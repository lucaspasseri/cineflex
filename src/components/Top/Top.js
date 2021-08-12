import styled from "styled-components";
import { useHistory } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

Top.propTypes = {
	page: PropTypes.string.isRequired
};

export default function Top(props){
	const { page} = props;
	const showBackButton = (page !== "" && page !== "Home" );
	let history = useHistory();
	return (
		<Header>
			<div className="voltar-container">
				{showBackButton?
					<button onClick={()=>history.goBack()} className="botao-sessoes">Voltar</button>
					:
					""
				}
			</div>
			<div className="titulo-header">CINEFLEX</div>
			<div className="filler"></div>
		</Header>
	);
}
const Header = styled.div `
	height: 67px;
    background-color: #c3cfd9;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100vw;
    box-shadow: 0px 4px 5px 1px rgba(0,0,0,0.57);
    top: 0;
    left: 0;
	z-index: 1;

	.filler, .voltar-container{
    	width: 30%;
	}

	> div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.titulo-header {
		font-family: 'Roboto', sans-serif;
		font-size: 34px;
		line-height: 40px;
		color: #d99f76;
	}
`; 


