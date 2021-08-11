import "./Home.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Home.propTypes = {
	setPageState: PropTypes.func.isRequired
};

export default function Home(props){
	const { setPageState } = props;
	setPageState("Home");
	const [listFilms, setListFilms] = useState([]);
	useEffect(() => {
		const request = 
            // eslint-disable-next-line no-undef
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/movies`);

		request.then(response => {
			setListFilms(response.data);
		});
	}, []);

	const listComponentized = listFilms.map(item=> {
		return <Link key={item.id} to={"sessoes/"+item.id}>
			<div key={item.id} 
				className="cartaz" 
				style={{backgroundImage:`url(${item.posterURL})`}}>
			</div>
		</Link>;
	});
	return (
		<>
			<div className="titulo">Selecione o Filme</div>
			<div className="lista-filmes">
				{
					listComponentized.length===0? "Carregando..." : listComponentized
				}     
			</div>
		</>
	);
}
