import "./Body.css";
import Home from '../Home/Home';
import Sessions from '../Sessions/Sessions';
import Seats from '../Seats/Seats';
import Success from	'../Success/Success';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from 'react';

export default function Body(){
	const [request, setRequest] = useState([]);

    return(
        <BrowserRouter>
			<Switch>
				<Route path="/" exact >
					<Home />
				</Route>
                <Route path="/filme/:idFilme" exact>
					<Sessions />
				</Route>
                <Route path="/sessao/:idSessao" exact>
					<Seats request={request} setRequest={setRequest}/>
				</Route>
				<Route path="/sucesso" exact>
					<Success request={request} setRequest={setRequest}/>
				</Route>
			</Switch>
		</BrowserRouter>
    );
}

