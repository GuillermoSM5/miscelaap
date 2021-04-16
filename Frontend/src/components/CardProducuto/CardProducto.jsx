import React from 'react';
import './CardProducto.css';

const CardProducto = ({ numero, card }) => {
	return (
		<section>
			<div className="card-contenido"> {`${card} ${numero}`}</div>
		</section>
	);
};

export default CardProducto;
