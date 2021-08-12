import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "../Styles/GlobalStyle";
import Top from "../Top/Top";
import Body from "../Body/Body";

export default function App() {
	const [page, setPage] = useState("");

	const [request, setRequest] = useState({});

	return (
		<Page>
			<GlobalStyle />
			<BrowserRouter>
				<Top page={page}/>
				<Body setPage={setPage} request={request} setRequest={setRequest}/>
			</BrowserRouter>
		</Page>
	);
}

const Page = styled.div`
    width: 100vw;
`;
