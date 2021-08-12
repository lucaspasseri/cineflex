import "./Success.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
/* import React, { useEffect } from "react";
import isDeepStrictEqual from "util"; */
import React from "react";

Success.propTypes = {
	setPageState: PropTypes.func.isRequired,
	request: PropTypes.exact({
		selectedSeatsNames: PropTypes.arrayOf(PropTypes.string),
		movieTitle: PropTypes.string,
		dayDate: PropTypes.string,
		name: PropTypes.string,
		objReserveSeats: PropTypes.object
	}).isRequired,
	setRequest: PropTypes.func.isRequired
};

export default function Success(props){
	const { request, setRequest, setPageState } = props;
	console.log(request);
	setPageState("Success");	
	/* const history = useHistory();
	
	useEffect(() => {
		if(isDeepStrictEqual(request, object2) ){
		}

	}, []); */
	
	

	

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
				<div className="ingressos">
					<div>Ingressos</div>
					<div className="subtitulos">
						{
							request.objReserveSeats?.ids.map(item=><div key ={Number(item)-1}>Assento {item}</div>)							
						}
					</div>
				</div>
				<div className="comprador-dados">
					<div>Comprador</div>
					<div>
						<div className="subtitulos">Nome: {/* request.objReserveSeats?.names[0] */}</div>
						<div className="subtitulos">CPF: {/* request.objReserveSeats?.cpfs[0] */}</div>
					</div>
				</div>
			</div>
			<div className="botao-container">
				<Link to="/"><button onClick={()=>setRequest([])} className="botao-assentos">Voltar para a Home</button></Link>
			</div>
		</div>
	);
}