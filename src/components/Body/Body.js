import "./Body.css";
import Home from '../Home/Home';
import Sessions from '../Sessions/Sessions';
import Seats from '../Seats/Seats';
import Success from	'../Success/Success';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Body(){
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
					<Seats />
				</Route>
				<Route path="/sucesso" exact>
					<Success />
				</Route>
			</Switch>
		</BrowserRouter>
    );
}

