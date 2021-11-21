import React, { useEffect, useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import "../styles/menu.scss";

import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import ColorizeIcon from "@mui/icons-material/Colorize";
import PersonOffIcon from "@mui/icons-material/PersonOff";

import { AppContext } from "../context/AppContext";

const Menu = () => {
	const { setStats, setText } = useContext(AppContext);

	const handleCases = async index => {
		await fetch(`https://disease.sh/v3/covid-19/historical/pl?lastdays=30`)
			.then(response => response.json())
			.then(data => Object.entries(data.timeline.cases))
			.then(data =>
				setStats(prevState => ({
					...prevState,
					historicalData: data.map(data => {
						return {
							date: data[0],
							cases: data[1],
						};
					}),
				})),
			)
			.then(setText("zarażonych"))
			.then(setActiveItem(index));

		await fetch(`https://disease.sh/v3/covid-19/countries/pl?strict=true`)
			.then(response => response.json())
			.then(data =>
				setStats(prevState => ({
					...prevState,
					today: data.todayCases,
					totalData: data.cases,
				})),
			);
	};

	const handleDeaths = async index => {
		await fetch(`https://disease.sh/v3/covid-19/historical/pl?lastdays=30`)
			.then(response => response.json())
			.then(data => Object.entries(data.timeline.deaths))
			.then(data =>
				setStats(prevState => ({
					...prevState,
					historicalData: data.map(data => {
						return {
							date: data[0],
							cases: data[1],
						};
					}),
				})),
			)
			.then(setText("zmarłych"))
			.then(setActiveItem(index));

		await fetch(`https://disease.sh/v3/covid-19/countries/pl?strict=true`)
			.then(response => response.json())
			.then(data =>
				setStats(prevState => ({
					...prevState,
					today: data.todayDeaths,
					totalData: data.deaths,
				})),
			);
	};

	const handleVaccine = async index => {
		await fetch(
			`https://disease.sh/v3/covid-19/vaccine/coverage/countries/pl?lastdays=30&fullData=false`,
		)
			.then(response => response.json())
			.then(data => Object.entries(data.timeline))
			.then(data =>
				setStats(prevState => ({
					...prevState,
					historicalData: data.map(data => {
						return {
							date: data[0],
							cases: data[1],
						};
					}),
				})),
			)
			.then(setText("zaszczepionych"))
			.then(setActiveItem(index));

		await fetch(
			`https://disease.sh/v3/covid-19/vaccine/coverage/countries/pl?lastdays=2&fullData=false`,
		)
			.then(response => response.json())
			.then(data => Object.values(data.timeline))
			.then(data =>
				setStats(prevState => ({
					...prevState,
					totalData: data[0],
					today: data[1] - data[0],
				})),
			);
	};

	useEffect(() => {
		handleCases(0);
	}, [,]);

	const [menu, setMenu] = useState({
		active: null,
		items: [
			{
				text: "Zarażeni",
				icon: <CoronavirusIcon />,
				handler: handleCases,
			},
			{
				text: "Zaszczepieni",
				icon: <ColorizeIcon />,
				handler: handleVaccine,
			},
			{
				text: "Zmarło",
				icon: <PersonOffIcon />,
				handler: handleDeaths,
			},
		],
	});

	const setActiveItem = index => {
		setMenu({ ...menu, active: menu.items[index] });
	};

	const toggleActiveClass = index => {
		if (menu.items[index] === menu.active) {
			return "menu__item active";
		} else {
			return "menu__item";
		}
	};

	return (
		<div className="menu__container">
			{menu.items.map((item, index) => (
				<div
					className={toggleActiveClass(index)}
					onClick={() => item.handler(index)}
				>
					{item.icon}
					<Typography variant="subtitle2">{item.text}</Typography>
				</div>
			))}
		</div>
	);
};

export default Menu;
