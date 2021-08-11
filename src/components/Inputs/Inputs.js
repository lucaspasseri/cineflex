import React from "react";
import PropTypes from "prop-types";

Inputs.propTypes = {
	listSeats: PropTypes.arrayOf(
		PropTypes.exact( 
			{   
				id: PropTypes.number,
				name: PropTypes.string,
				isAvailable: PropTypes.bool,
				selected: PropTypes.bool
			}
		)
	)
};

export default function Inputs(props){
	const { listSeats } = props;
	const selectedSeatsList = listSeats.filter(item => item.selected === true);
	console.log(selectedSeatsList);
	const activeInputs = selectedSeatsList.map(item=> item.name);
	console.log(activeInputs);
	const inputsComponentized = activeInputs.map(item => {
		return <div key={item.id}>
			<div>{item}</div>
			<div className="titulo-comprador">Nome do comprador:</div>
			<input placeholder="Digite seu nome..."></input>
			<div className="titulo-comprador">CPF do comprador:</div>
			<input placeholder="Digite seu CPF..."></input>
		</div>;
	});
	return (
		<div className="dados-comprador">
			{inputsComponentized}
		</div>
	);
}
