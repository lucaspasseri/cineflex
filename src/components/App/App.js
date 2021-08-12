import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "../Styles/GlobalStyle";
import Top from "../Top/Top";
import Body from "../Body/Body";

export default function App() {
	const [pageState, setPageState] = useState("");
	return (
		<Page>
			<GlobalStyle />
			<BrowserRouter>
				<Top pageState={pageState}/>
				<Body setPageState={setPageState}/>
			</BrowserRouter>
		</Page>
	);
}

const Page = styled.div`
    width: 375px;
`;
