import React from "react";
import PropTypes from "prop-types";
import styled from	"styled-components";

Inputs.propTypes = {
	listSeats: PropTypes.arrayOf(PropTypes.string),
	nameInputs: PropTypes.arrayOf(PropTypes.string),
	cpfInputs: PropTypes.arrayOf(PropTypes.string),
	setNameInputs: PropTypes.func,
	setCPFInputs: PropTypes.func
};

export default function Inputs(props){
	const { listSeats, nameInputs, cpfInputs, setNameInputs, setCPFInputs } = props;
	console.log(listSeats);
	const selectedSeatsList = listSeats.filter(item => item.selected === true);
	console.log(selectedSeatsList);
	const activeInputs = selectedSeatsList.map(item=> item.name);
	console.log(activeInputs);
	console.log("====>");
	console.log(nameInputs);
	console.log(cpfInputs);

	const inputsComponentized = activeInputs.map(item => {
		return (
			<Client key={Number(item)}>
				<div>{item}</div>
				<div className="titulo-comprador">Nome do comprador:</div>
				<input
					key={Number(item)} 
					placeholder="Digite seu nome..." 
					value={nameInputs[Number(item)-1]} 
					onChange={e => {
						nameInputs[Number(item)-1] = e.target.value;
						setNameInputs([... nameInputs]);
					}}	
				></input>
				<div className="titulo-comprador">CPF do comprador:</div>
				<input	
					key={100+Number(item)-1} 
					placeholder="Digite seu CPF..."
					value={cpfInputs[Number(item) -1]} 
					onChange={e => {
						cpfInputs[Number(item)-1] = e.target.value;
						setCPFInputs([... cpfInputs]);
					}}
				></input>
			</Client>
		);
	});
	return (
		<div className="dados-comprador">
			{inputsComponentized}
		</div>
	);
}

const Client = styled.div`

`;