import Bottom from "../Bottom/Bottom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Showtimes from "../Showtimes/Showtimes";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";


Sessions.propTypes = {
	setPage: PropTypes.func.isRequired
};

export default function Sessions(props){
	const { setPage } = props;
	
	const [listSessions, setListSessions] = useState([]);
	const [dataFooter, setDataFooter] = useState([]);
	const { idFilm } = useParams();
    
	useEffect(() => {		
		setPage("Sessions");
		
		const request = 
			// eslint-disable-next-line no-undef
			axios.get(`${process.env.REACT_APP_API_BASE_URL}/movies/${idFilm}/showtimes`);

		request.then(response => {
			setListSessions(response.data.days);
			dataFooter.push(response.data.posterURL);
			dataFooter.push(response.data.title);
			setDataFooter([...dataFooter]);

		});
	}, []);

	const listComponentized = listSessions.map(item => { 
		return (
			<SessionContainer key={item.id} >
				<div className="dia"> {item.weekday} - {item.date}</div>
				<Showtimes key={item.id} showtimes={item.showtimes}/>
			</SessionContainer>     
		);         
	});

	return (
		<SessionsList>
			<div className="titulo">Selecione o horário</div>
			<div className="lista-sessoes">
				{listComponentized.length===0? "Carregando..." : listComponentized} 
			</div>
			<Bottom type="sessions" dataFooter={dataFooter}/>
		</SessionsList>
	);
}

const SessionsList = styled.div`

	.lista-sessoes{
		padding: 0 0 150px 30px;
	}
`;

const SessionContainer = styled.div`
	margin-bottom: 20px;

	.dia {
		height: 35px;
		font-family: 'Roboto', sans-serif;
		font-size: 20px;
		line-height: 23px;
		display: flex;
		align-items: center;
		letter-spacing: 0.02em;
	}
`;