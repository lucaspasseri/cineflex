import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

User.propTypes = {
	id: PropTypes.number.isRequired,
	compradores: PropTypes.any.isRequired
};

export default function User(props){

	const {id, compradores} = props;
	return (
		<Brief>
			<div>Assento: {compradores[id].idAssento}</div>
			<div>Nome: {compradores[id].nome}</div>
			<div>CPF: {compradores[id].cpf}</div>
		</Brief>
	);
}

const Brief = styled.div`
	margin-bottom: 20px;
`;