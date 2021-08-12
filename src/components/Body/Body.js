import Home from "../Home/Home";
import Sessions from "../Sessions/Sessions";
import Seats from "../Seats/Seats";
import Success from	"../Success/Success";
import { Route, Switch} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

Body.propTypes = {
	setPage: PropTypes.func.isRequired,
	request: PropTypes.any.isRequired,
	setRequest: PropTypes.func.isRequired
};

export default function Body(props){
	const { setPage, request, setRequest } = props;

	return (
		<Switch>
			<Route path="/" exact >
				<Home setPage={setPage}/>
			</Route>
			<Route path="/sessoes/:idFilm" exact>
				<Sessions setPage={setPage}/>
			</Route>
			<Route path="/assentos/:idSession" exact>
				<Seats setPage={setPage} request={request} setRequest={setRequest}/>
			</Route>
			<Route path="/sucesso" exact>
				<Success setPage={setPage} request={request} setRequest={setRequest}/>
			</Route>
		</Switch>
	);
}

