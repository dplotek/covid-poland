import React, { useEffect, useState } from "react";
import "../styles/worldstats.scss";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const WorldStats = () => {
	const [worldData, setWorldData] = useState({
		cases: "",
		deaths: "",
		recovered: "",
		active: "",
		todayCases: "",
		todayDeaths: "",
		todayRecovered: "",
	});

	const {
		cases,
		deaths,
		recovered,
		active,
		todayCases,
		todayDeaths,
		todayRecovered,
	} = worldData;

	useEffect(() => {
		const fetchWorldData = async () => {
			fetch("https://disease.sh/v3/covid-19/all")
				.then(res => res.json())
				.then(data => {
					setWorldData({
						cases: data.cases,
						deaths: data.deaths,
						recovered: data.recovered,
						active: data.active,
						todayCases: data.todayCases,
						todayDeaths: data.todayDeaths,
						todayRecovered: data.todayRecovered,
					});
				});
		};
		fetchWorldData();
	}, []);

	return (
		<div className="worldstats__container">
			<Typography variant="h2" align="center">
				Statystyki na świecie
			</Typography>
			<div className="worldstats__board">
				<Typography variant="subtitle2" align="center">
					Zarażonych: <span>{cases.toLocaleString()}</span>
				</Typography>
				<Typography variant="subtitle2" align="center">
					Zgony: <span>{deaths.toLocaleString()}</span>
				</Typography>
				<Typography variant="subtitle2" align="center">
					Wyleczonych: <span>{recovered.toLocaleString()}</span>
				</Typography>
				<Typography variant="subtitle2" align="center">
					Aktywnych: <span>{active.toLocaleString()}</span>
				</Typography>
			</div>
			<div className="worldstats__today-stats">
				<Typography variant="h3" align="center" mb={3}>
					Dzisiejsze statystyki
				</Typography>
				<Paper
					style={{
						width: "100%",
						padding: "20px 0",
						textAlign: "center",
					}}
				>
					<Typography variant="subtitle2" align="center">
						Zarażonych: <span>{todayCases.toLocaleString()}</span>
					</Typography>
					<Typography variant="subtitle2" align="center">
						Zgony: <span>{todayDeaths.toLocaleString()}</span>
					</Typography>
					<Typography variant="subtitle2" align="center">
						Ozdrowiałych: <span>{todayRecovered.toLocaleString()}</span>
					</Typography>
				</Paper>
			</div>
		</div>
	);
};

export default WorldStats;
