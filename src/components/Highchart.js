import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const Highchart = ({ data, title }) => {
	const statsMinusOne = [...data];
	statsMinusOne.shift();
	const days = statsMinusOne.map(data => data.date);
	const differences = statsMinusOne.map(
		(difference, index) => difference.cases - data[index].cases,
	);

	const upperCaseTitle = title.charAt(0).toUpperCase() + title.slice(1);

	const HighchartOptions = {
		title: {
			text: `30dniowe zestawienie ${title}`,
			style: {
				fontSize: 28,
				fontFamily: "Roboto",
				color: "#ffffff",
			},
		},
		xAxis: {
			categories: days,
			labels: {
				style: {
					color: "#ffffff",
				},
			},
		},
		yAxis: {
			title: {
				text: upperCaseTitle,
				style: {
					color: "#ffffff",
				},
			},
		},
		series: [
			{
				name: upperCaseTitle,
				data: differences,
			},
		],
		chart: {
			style: {
				fontFamily: "Roboto",
				fontSize: 18,
				color: "#ffffff",
			},
			backgroundColor: "#2f3042",
		},
		colors: [
			"#0177fb",
			"#0d233a",
			"#8bbc21",
			"#910000",
			"#1aadce",
			"#492970",
			"#f28f43",
			"#77a1e5",
			"#c42525",
			"#a6c96a",
		],
		legend: {
			itemStyle: {
				color: "#fff",
			},
			itemHoverStyle: {
				color: "#f5f5f5",
			},
		},
	};

	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={HighchartOptions} />
		</div>
	);
};

export default Highchart;
