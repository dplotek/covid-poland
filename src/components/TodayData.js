import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function TodayData() {
	const API = "https://disease.sh/v3/covid-19/countries/pl?strict=true";
	const [todayCases, setTodayCases] = useState("");
	const [totalCases, setTotalCases] = useState("");

	useEffect(() => {
		const getData = async () => {
			await fetch(API)
				.then(res => res.json())
				.then(data => {
					setTodayCases(data.todayCases);
					setTotalCases(data.cases);
				});
		};
		getData();
	}, []);

	return (
		<Card
			color="primary"
			sx={{ width: 275, textAlign: "center", margin: "20px auto" }}
		>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					{todayCases !== 0
						? "Ilość nowych przypadków dzisiaj"
						: "Jeszcze nie ma oficjalnych danych"}
				</Typography>
				<Typography variant="h5" component="div">
					{todayCases !== 0 ? todayCases : ""}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					{todayCases !== 0 ? "Zarażonych" : ""}
				</Typography>
				<Typography variant="body2">
					Stan zarażonych na dzisiaj
					<br />
					{totalCases.toLocaleString()}
				</Typography>
			</CardContent>
		</Card>
	);
}
