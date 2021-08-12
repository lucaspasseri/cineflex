import Bottom from "../Bottom/Bottom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import Collapes from "../Collapses/Collapes";

Seats.propTypes = {
	setPage: PropTypes.func.isRequired,
	request: PropTypes.any.isRequired,
	setRequest: PropTypes.func.isRequired
};

export default function Seats(props){

	const history = useHistory();
	const { request, setRequest, setPage } = props;
	const [listSeats, setListSeats] = useState([]);
	const [names, setNames] = useState(Array(50).fill(""));
	const [cpfs, setCPFs] = useState(Array(50).fill(""));
	const [dataFooter, setDataFooter] = useState([]);
	const { idSession } = useParams();
	useEffect(() => {
		setPage("Seats");
		
		const requestGET = 
			// eslint-disable-next-line no-undef
			axios.get(`${process.env.REACT_APP_API_BASE_URL}/showtimes/${idSession}/seats`);

		requestGET.then(response=> {
			const newArray = [];
			response.data.seats.forEach(element => {
				newArray.push({id: element.id,
					name: element.name,
					isAvailable: element.isAvailable,
					selected: false
				});
			});
			dataFooter.push(response.data.movie.posterURL);
			dataFooter.push(response.data.movie.title);
			dataFooter.push(response.data.day.weekday);
			dataFooter.push(response.data.name);
			request.movieTitle = response.data.movie.title;
			request.dayDate = response.data.day.date;
			request.name = response.data.name;
			setDataFooter([...dataFooter]);
			setListSeats(newArray);
		});
	}, []);

	function selectSeat(id, isAvailable,selected){
		if(isAvailable){
			if(!selected){
				listSeats.forEach(item =>{
					if(item.id === id){
						item.selected = true;
					}
				});
			} else {
				listSeats.forEach(item =>{
					if(item.id === id){
						if(window.confirm("tem certeza?")){
							item.selected = false;
						}
					} 
				});
			}
		}
		setListSeats([...listSeats]);
	}

	function reserveSeats(){

		const listSelectedSeats = listSeats.filter(item => item.selected===true);
		const nameSelectedSeats =listSelectedSeats.map(item => item.name);
		const numbers = nameSelectedSeats.map(item => Number(item));

		const objReservedSeats = { 
			ids: numbers,
			compradores: numbers.map(item =>{
				return ({idAssento: item,nome: names[item-1],cpf: cpfs[item-1]});
			} )	
		};

		// eslint-disable-next-line no-undef
		const requestPost = axios.post(`${process.env.REACT_APP_API_BASE_URL}/seats/book-many`, objReservedSeats);
		requestPost.then(() => {
			request.objReservedSeats = objReservedSeats;
			setRequest({...request});
			history.push("/sucesso");
		});
		requestPost.catch(erro => alert(erro.response.data));
	}

	const listComponentized = listSeats.map(item=> {
		return (
			<div onClick={() => item.isAvailable? 
				selectSeat(item.id,item.isAvailable, item.selected)
				:
				alert("Esse assento não esta disponível.")} 
			key={item.id} className={!item.isAvailable?
				"assento indisponivel"
				:
				(item.selected?
					"assento selecionado"
					: 
					"assento disponivel")}
			>
				{item.name}
			</div>
		);
	});

	const listSelectedSeats = listSeats.filter(item => item.selected===true);
	const nameSelectedSeats = listSelectedSeats.map(item => item.name);
	const numbers = nameSelectedSeats.map(item => Number(item));

	const inputs = numbers.map((item, n) => 
		<Collapes 
			key={n}
			id={item} 
			names={names}
			setNames={setNames}
			cpfs={cpfs}
			setCPFs={setCPFs}
		/>
	);

	return (
		<SeatsList>
			<div className="titulo">Selecione o(s) assento(s)</div>
			<div className="grade-container">
				<div className="grade">
					{listComponentized.length===0? "Carregando..." : listComponentized} 
				</div>
				<div className="legendas">
					<div className="legenda"><div className="selecionado"></div><span>Selecionado</span></div>
					<div className="legenda"><div className="disponivel"></div><span>Disponível</span></div>
					<div className="legenda"><div className="indisponivel"></div><span>Indisponível</span></div>   
				</div>
			</div>
			{
				inputs
			}
			<div 
				onClick={reserveSeats} 
				className="botao-container"
			>
				<button 
					disabled={!listSeats.find(item=>item.selected===true)} 
					className="botao-assentos"
				>
					Reservar assento(s)
				</button>
			</div>
			<Bottom type="seats" dataFooter={dataFooter}/>
		</SeatsList>
	);
}

const SeatsList = styled.div`
	.grade-container {
		margin-bottom: 45px;

		.grade {
			display: grid;
			margin-left: 24px;
			margin-right: 24px;
			grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
			row-gap: 15px;
		}
		.legendas {
			display: flex;
			justify-content: space-evenly;
			margin-top: 16px;

			.legenda {
				display: flex;
				flex-direction: column;
				justify-content: center;
			}	
		}
	}
	.botao-container{
		margin-bottom: 30px;
		display: flex;
		justify-content: center;
		padding-bottom: 140px;

		.botao-assentos {
			width: 225px;
			height: 43px;
			background: #E8833A;
			border-radius: 3px;
			font-family: 'Roboto', sans-serif;
			font-size: 18px;
			line-height: 21px;
			letter-spacing: 0.02em;
			color: #FFFFFF;
			border: none;
			margin-right: 9px;
		}
	}
	
`;