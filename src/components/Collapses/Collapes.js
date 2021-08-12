import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

Collapes.propTypes = {
	id: PropTypes.number.isRequired,
	names: PropTypes.array.isRequired,
	setNames: PropTypes.func.isRequired,
	cpfs: PropTypes.array.isRequired,
	setCPFs: PropTypes.func.isRequired
};

export default function Collapes(props){

	const {id, names, setNames, cpfs, setCPFs } = props;

	return (
		<Inputs>
			<div><span>Nome:</span>
				<input 
					placeholder="Nome do cliente..." 
					value={names[id-1]} 
					onChange={e => {
						names[id-1] = e.target.value;
						setNames([...names]);
					}} 
				/>
			</div>
			<div><span>CPF:</span>
				<input 
					placeholder="CPF do cliente..." 
					value={cpfs[id-1]} 
					onChange={e => {
						cpfs[id-1] = e.target.value;
						setCPFs([...cpfs]);
					}} 
				/>
			</div>
		</Inputs>
	);
}

const Inputs = styled.div`
	display: flex;
	flex-direction:column;
	justify-content:center;
	align-items: center;
	margin-bottom: 30px;
	
	div {
		width: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	span {
		width: 50px;
	}
	input {
		padding-left: 10px;
	}
	@media screen and (max-width: 320px) {
		input {
			width: 280px;
		}
	}
	
	@media screen and (min-width: 700px) {
		input {
			width: 500px;
		}
	}  
`;