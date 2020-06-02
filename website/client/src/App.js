import React from "react";
import "./styles/App.css";
import CarRoutes from "./routing/CarRoutes";
import {CookiesProvider} from 'react-cookie'
function App() {
	return (
		<CookiesProvider>
			<CarRoutes />
		</CookiesProvider>
	);
}

export default App;
