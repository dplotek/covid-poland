import { useContext } from "react";
import "../styles/dashboard.scss";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import Table from "./Table";
import Highchart from "./Highchart";

import { AppContext } from "../context/AppContext";

const Dashboard = () => {
	const { stats, text } = useContext(AppContext);

	return (
		<div className="dashboard__wrapper">
			<header>
				<Typography variant="h1">Covid Polska</Typography>
			</header>
			<div className="dashboard__container">
				<div className="left__side">
					<div className="dasboard__cards">
						<Paper style={{ width: "45%", padding: "40px 0" }}>
							<Typography variant="h6" align="center">
								Dzisiejsza ilość {text}
								<br />
							</Typography>
							<Typography variant="subtitle1" align="center">
								{stats.today === 0
									? "Jeszcze nie ma danych"
									: stats.today.toLocaleString()}
							</Typography>
						</Paper>
						<Paper style={{ width: "45%", padding: "40px 0" }}>
							<Typography variant="h5" align="center">
								Wszystkich {text}
							</Typography>
							<Typography variant="subtitle1" align="center">
								{stats.totalData.toLocaleString()}
							</Typography>
						</Paper>
					</div>
					<div>
						<Highchart data={stats.historicalData} title={text} />
					</div>
				</div>
				<div className="right__side">
					<Table data={stats.historicalData} />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
