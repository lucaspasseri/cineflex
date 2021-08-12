import React from "react";
import PropTypes from "prop-types";

User.propTypes = {
	id: PropTypes.number.isRequired,
	compradores: PropTypes.any.isRequired
};

export default function User(props){

	const {id, compradores} = props;
	return (
		<>
			<div>Assento: {compradores[id].idAssento}</div>
			<div>Nome: {compradores[id].nome}</div>
			<div>CPF: {compradores[id].cpf}</div>
		</>
	);
}