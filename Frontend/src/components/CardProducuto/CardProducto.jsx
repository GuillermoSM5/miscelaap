import React from 'react';
import './CardProducto.scss';

const CardProducto = ({ numero, card }) => {
	return (
		<section>
			<div className='card-content'> {`${card} ${numero}`}</div>
		</section>
	);
};

export default CardProducto;
