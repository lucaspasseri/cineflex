import Top from "../Top/Top";
import Body from "../Body/Body";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

export default function App() {
	const [pageState, setPageState] = useState("");
	return (
		<div className="page">
			<BrowserRouter>
				<Top pageState={pageState}/>
				<Body setPageState={setPageState}/>
			</BrowserRouter>
		</div>
	);
}
