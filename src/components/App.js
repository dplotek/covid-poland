import React from "react";
import "../index.css";
import TableData from "./TableData";
import TodayData from "./TodayData";
import Hightchart from "./Hightchart";
import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

function App() {
	return (
		<div>
			<Grid
				container
				spacing={2}
				xs={12}
				lg={10}
				alignSelf="center"
				mx="auto"
				minHeight="100vh"
				alignItems="center"
				item={true}
			>
				<Grid item xs={12} lg={8}>
					<Typography variant="h1" align="center" my={4}>
						Covid Polska
					</Typography>
					<TodayData />
					<Card>
						<Hightchart />
					</Card>
				</Grid>
				<Grid item xs={12} lg={4}>
					<TableData />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
