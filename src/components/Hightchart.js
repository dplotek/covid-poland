import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import DarkUnica from "highcharts/themes/dark-unica";

const Hightchart = () => {
	const [data, setData] = useState([]);

	const API = `https://disease.sh/v3/covid-19/historical/pl?lastdays=31`;

	useEffect(() => {
		const getData = async () => {
			await fetch(API)
				.then(response => response.json())
				.then(data => Object.entries(data.timeline.cases))
				.then(data =>
					setData(
						data.map(data => {
							return {
								date: data[0],
								cases: data[1],
							};
						}),
					),
				);
		};
		getData();
	}, []);

	const newData = [...data];
	newData.shift();

	const days = newData.map(day => day.date);

	const stats = newData.map(
		(difference, index) => difference.cases - data[index].cases,
	);

	const HighchartOptions = {
		title: {
			text: `30dniowe zestawienie zakażeń`,
			style: {
				fontSize: 28,
				fontFamily: "Roboto",
			},
		},
		xAxis: {
			categories: days,
		},
		yAxis: {
			title: {
				text: "Zakażenia",
			},
		},
		series: [
			{
				name: "zakażenia",
				data: stats,
			},
		],
		chart: {
			style: {
				fontFamily: "Roboto",
				fontSize: 18,
				color: "white",
			},
		},
	};

	DarkUnica(Highcharts);

	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={HighchartOptions} />
		</div>
	);
};

export default Hightchart;
