import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";

export const DashboardRoutes = () => {
	return (
		<>
			<div className="container mt-3">
				<Switch>
					<Route path="journal" element={<JournalScreen />} />
					<Route path="/" element={<JournalScreen />} />
				</Switch>
			</div>
		</>
	);
};
