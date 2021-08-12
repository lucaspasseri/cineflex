import React from "react";
import PropTypes from "prop-types";

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
		<>
			<div>Nome:
				<input 
					placeholder="Nome do cliente..." 
					value={names[id-1]} 
					onChange={e => {
						names[id-1] = e.target.value;
						setNames([...names]);
					}} 
				/>
			</div>
			<div>CPF:
				<input 
					placeholder="CPF do cliente..." 
					value={cpfs[id-1]} 
					onChange={e => {
						cpfs[id-1] = e.target.value;
						setCPFs([...cpfs]);
					}} 
				/>
			</div>
		</>
	);
}