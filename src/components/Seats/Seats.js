import Bottom from "../Bottom/Bottom";
import Inputs from "../Inputs/Inputs";
import "./Seats.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

Seats.propTypes = {
	setPageState: PropTypes.func.isRequired,
	request: PropTypes.exact({
		selectedSeatsNames: PropTypes.arrayOf(PropTypes.string),
		/* inputName: PropTypes.string,
		inputCPF: PropTypes.string
 */
	}).isRequired,
	setRequest: PropTypes.func.isRequired
};

export default function Seats(props){
	const { request, setRequest, setPageState } = props;
	setPageState("Seats");
	const [listSeats, setListSeats] = useState([]);
	const [dataFooter, setDataFooter] = useState([]);
	const { idSession } = useParams();
	/* const [inputName, setInputName] = useState("");
	const [inputCPF, setInputCPF] = useState(""); */

	useEffect(() => {

		// eslint-disable-next-line no-undef
		const requestGET = axios.get(`${process.env.REACT_APP_API_BASE_URL}/showtimes/${idSession}/seats`);

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
			/* request.push(response.data.movie.title);
			request.push(response.data.day.date);
			request.push(response.data.name); */
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
		const idsSelectedSeats =listSelectedSeats.map(item => item.id);
		const numberSelectedSeats =listSelectedSeats.map(item => item.name);
		const objReserveSeats = { ids: idsSelectedSeats,
			/* name: inputName,
			cpf: inputCPF */
		};

		// eslint-disable-next-line no-undef
		const requestPost = axios.post(`${process.env.REACT_APP_API_BASE_URL}/seats/book-many`, objReserveSeats);
		requestPost.then(response => {
			request["selectedSeatsNames"] = numberSelectedSeats;
			/* request["inputName"] = inputName;
			request.push(inputCPF); */
			setRequest([...request]);
			console.log(response);
		});
		requestPost.catch(erro => alert(erro.response.data));
	}

	const listComponentized = listSeats.map(item=> {
		return <div onClick={() => item.isAvailable? selectSeat(item.id,item.isAvailable, item.selected):alert("Esse assento não esta disponível.")} key={item.id} className={!item.isAvailable?"assento indisponivel":(item.selected?"assento selecionado": "assento disponivel")}>{item.name}</div>;
	});

	return (
		<div className="seats">
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
			<Inputs listSeats={listSeats}/>
			<Link to="/sucesso"><div onClick={reserveSeats} className="botao-container"><button className="botao-assentos">Reservar assento(s)</button></div></Link>
			<Bottom type="seats" dataFooter={dataFooter}/>
		</div>
	);
}

/* <div className="dados-comprador">
<div className="titulo-comprador">Nome do comprador:</div>
<input onChange={e => setInputName(e.target.value)} value={inputName} placeholder="Digite seu nome..."></input>
<div className="titulo-comprador">CPF do comprador:</div>
<input onChange={e => setInputCPF(e.target.value)} value={inputCPF} placeholder="Digite seu CPF..."></input>
</div> */