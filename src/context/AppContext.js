import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [stats, setStats] = useState({
		today: "",
		totalData: "",
		historicalData: [],
	});

	const [text, setText] = useState("zarażonych");

	return (
		<AppContext.Provider value={{ stats, setStats, text, setText }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
