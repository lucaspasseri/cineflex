import React from "react";
import PropTypes from "prop-types";

Bottom.propTypes = {
	type: PropTypes.string,
	dataFooter: PropTypes.arrayOf(PropTypes.string)
};

export default function Bottom(props){
	const { type, dataFooter } = props;

	const sessionsFooter = 
		<div className="rodape">
			<div className="poster" style={{backgroundImage:`url(${dataFooter[0]})`}}></div>
			<div className="container-infos-filme">
				<div className="dados-filme">{dataFooter[1]}</div>
			</div>
		</div>;
	const seatsFooter = 
		<div className="rodape">
			<div className="poster" style={{backgroundImage:`url(${dataFooter[0]})`}}></div>
			<div className="container-infos-filme">
				<div className="dados-filme">{dataFooter[1]}</div>
				<div className="dados-filme">{dataFooter[2]} - {dataFooter[3]}</div>
			</div>
		</div>;
	return (
		<>
			{type==="sessions"?sessionsFooter:seatsFooter}
		</>
	);
}