import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

Home.propTypes = {
	setPage: PropTypes.func.isRequired
};

export default function Home(props){
	const [listFilms, setListFilms] = useState([]);
	const { setPage } = props;
	
	
	useEffect(() => {
		setPage("Home");
		const request = 
            // eslint-disable-next-line no-undef
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/movies`);

		request.then(response => {
			setListFilms(response.data);
		});
	}, []);

	const listComponentized = listFilms.map(item=> {
		return <Link key={item.id} to={"sessoes/"+item.id}>
			<Card key={item.id} 
				className="cartaz" 
				style={{backgroundImage:`url(${item.posterURL})`}}>
			</Card>
		</Link>;
	});
	return (
		<MoviesList>
			<div className="titulo">Selecione o Filme</div>
			<div className="lista-filmes">
				{
					listComponentized.length===0? "Carregando..." : listComponentized
				}     
			</div>
		</MoviesList>
	);
}

const MoviesList = styled.div`

	.lista-filmes {
		display: flex;
		flex-wrap: wrap;
	}
`;

const Card = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-left: 30px;
    margin-bottom: 11px;
    border: 8px solid #FFFFFF;
    background-size: cover;
`; 