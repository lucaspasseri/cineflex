import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import User from "../User/User";
import styled from "styled-components";

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

	const brief = ids?.map((item, n) => {
		return <User key={n} id={n} compradores={compradores} />;
	} );

	return (
		<Infos>
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
					<div className="brief">
						{
							brief
						}
					</div>
				</div>
			</div>
			<div className="botao-container">
				<Link to="/"><button onClick={()=>setRequest([])} className="botao-assentos">Voltar para a Home</button></Link>
			</div>
		</Infos>
	);
}

const Infos = styled.div`
	.titulo-sucesso{
		font-weight: bold;
		color: #247A6B;
	}

	.pedido-feito{
		font-family: 'Roboto', sans-serif;
		font-weight: bold;
		font-size: 24px;
		line-height: 28px;
		display: flex;
		flex-direction: column;
		letter-spacing: 0.04em;
		color: #293845;
		margin-left: 29px;
		margin-bottom: 50px;

		@media screen and (min-width: 700px) {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-left: 0;
			
			.subtitulos{
				display: flex;
				justify-content: center;
				align-items: center;
			}
		} 
	}
	.brief {
		font-size: 22px;
		line-height: 26px;
		font-weight: normal;
	}

	.filme-sessao, .ingressos, .comprador-dados {
		margin-bottom: 40px;
		display:flex;
		flex-direction: column;
		@media screen and (min-width: 700px) {
			justify-content: center;
			align-items: center;
		} 
	}
	.filme-sessao div:first-of-type, .ingressos div:first-of-type, .comprador-dados div:first-of-type {
		margin-top: 5px;
	}

	.botao-container{
		margin-bottom: 30px;
		display: flex;
		justify-content: center;
	}
`;