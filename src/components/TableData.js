import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const columns = [
	{ id: "date", label: "Data (M/D/R)", minWidth: 100 },
	{
		id: "casesTotal",
		label: "Zarażonych ogółem",
		align: "center",
		minWidth: 100,
		format: value => value.toLocaleString(),
	},
	{
		id: "more",
		label: "Więcej o",
		minWidth: 90,
		align: "right",
		color: "#123123",
		format: value => value.toLocaleString("en-US"),
	},
];

function createData(date, casesTotal, more) {
	return { date, casesTotal, more };
}

function TableData() {
	const [data, setData] = useState([]);
	const [days, setDays] = useState(30);

	const API = `https://disease.sh/v3/covid-19/historical/pl?lastdays=${
		days + 1
	}`;

	useEffect(() => {
		const getData = async () => {
			await fetch(API)
				.then(response => response.json())
				.then(data => Object.entries(data.timeline.cases))
				.then(data =>
					setData(
						data.reverse().map(data => {
							return {
								date: data[0],
								cases: data[1],
							};
						}),
					),
				);
		};
		getData();
	}, [days]);

	const lessOneDay = [...data];
	lessOneDay.pop();

	const rows = lessOneDay.map(({ date, cases }, index) =>
		createData(date, cases, cases - data[index + 1].cases),
	);

	const handleChangeDays = e => {
		const value = e.target.value;
		setDays(value);
	};

	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper sx={{ maxWidth: "450px", overflow: "hidden", margin: "30px auto" }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "10px",
				}}
			>
				<Typography variant="h6" sx={{ marginRight: "10px" }}>
					Historyczne dane dla ostatnich{" "}
				</Typography>
				<Box sx={{ maxWidth: 120 }}>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Dni</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={days}
							label="Age"
							onChange={handleChangeDays}
						>
							<MenuItem value={7}>7</MenuItem>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={14}>14</MenuItem>
							<MenuItem value={20}>20</MenuItem>
							<MenuItem value={30}>30</MenuItem>
							<MenuItem value={60}>60</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Box>

			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map(column => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map(row => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.date}>
										{columns.map(column => {
											const value = row[column.id];
											return (
												<TableCell key={column.id} align={column.align}>
													{column.format && typeof value === "number"
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[7, 10, 14, 20, 21, 28, 31, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}

export default TableData;
