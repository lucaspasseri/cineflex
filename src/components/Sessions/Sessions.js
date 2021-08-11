import Bottom from "../Bottom/Bottom";
import "./Sessions.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Showtimes from "../Showtimes/Showtimes";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";


Sessions.propTypes = {
	setPageState: PropTypes.func.isRequired
};

export default function Sessions(props){
	const { setPageState } = props;
	setPageState("Sessions");
	const [listSessions, setListSessions] = useState([]);
	const [dataFooter, setDataFooter] = useState([]);
	const { idFilm } = useParams();
    
	useEffect(() => {
        
		// eslint-disable-next-line no-undef
		const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/movies/${idFilm}/showtimes`);

		request.then(response => {
			setListSessions(response.data.days);
			dataFooter.push(response.data.posterURL);
			dataFooter.push(response.data.title);
			setDataFooter([...dataFooter]);

		});
	}, []);

	const listComponentized = listSessions.map(item => { 
		return <div key={item.id} className="card-sessoes">
			<div className="dia">{item.weekday} - {item.date}</div>
			<Showtimes key={item.id} showtimes={item.showtimes}/>
		</div>;              
	});

	return (
		<div className="sessoes">
			<div className="titulo">Selecione o horário</div>
			<div className="lista-sessoes">
				{listComponentized.length===0? "Carregando..." : listComponentized} 
			</div>
			<Bottom type="sessions" dataFooter={dataFooter}/>
		</div>
	);
}