import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

Showtimes.propTypes = {
	showtimes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default function Showtimes(props){
	const { showtimes } = props;
	const listComponentized = showtimes.map(item=>{
		return <Link key={item.id} to={"/assentos/"+item.id}><button key={item.id} className="botao-sessoes">{item.name}</button></Link>;
	});
	return (
		<div className="horarios">
			{listComponentized}
		</div> 
	);
}