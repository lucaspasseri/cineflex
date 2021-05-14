import "./Body.css";
import Home from '../Home/Home';
import Sessions from '../Sessions/Sessions';
import Seats from '../Seats/Seats';
import Success from	'../Success/Success';
import { Route, Switch} from "react-router-dom";
import { useState } from 'react';

export default function Body(props){
	const { setPageState } = props;
	const [request, setRequest] = useState([]);
    return(
			<Switch>
				<Route path="/" exact >
					<Home setPageState={setPageState}/>
				</Route>
                <Route path="/sessoes/:idFilm" exact>
					<Sessions setPageState={setPageState}/>
				</Route>
                <Route path="/assentos/:idSession" exact>
					<Seats request={request} setRequest={setRequest} setPageState={setPageState}/>
				</Route>
				<Route path="/sucesso" exact>
					<Success request={request} setRequest={setRequest} setPageState={setPageState}/>
				</Route>
			</Switch>
    );
}

