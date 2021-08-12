//import "./Success.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

Success.propTypes = {
	setPage: PropTypes.func.isRequired,
	request: PropTypes.any.isRequired,
	setRequest: PropTypes.func.isRequired
};

export default function Success(props){
	const { request, setRequest, setPage } = props;
	
	useEffect(() => {
		setPage("Success");
	}, []);

	

	const compradores = request.objReservedSeats?.compradores;
	const ids = request.objReservedSeats?.ids;

	const brief = ids?.map((item, n) =>{
		return <>
			<div>Assento: {ids[n]}</div>
			<div>Nome: {compradores[n].nome}</div>
			<div>CPF: {compradores[n].cpf}</div>
		</>;
	} );

	return (
		<div className="success">
			<div className="titulo titulo-sucesso">Pedido feito <br></br> com sucesso!</div>
			<div className="pedido-feito">
				<div className="filme-sessao">
					<div>Filme e sessão</div>
					<div>
						<div className="subtitulos">{request.movieTitle}</div>
						<div className="subtitulos">{request.dayDate} - {request.name} </div>
					</div>
				</div>
				<div className="comprador-dados">
					<div>Assentos</div>
					<div className="subtitulos">
						{
							brief
						}
					</div>
				</div>
			</div>
			<div className="botao-container">
				<Link to="/"><button onClick={()=>setRequest([])} className="botao-assentos">Voltar para a Home</button></Link>
			</div>
		</div>
	);
}