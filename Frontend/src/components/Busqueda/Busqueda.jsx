import React from 'react';
import './Busqueda.css';
import { ReactComponent as Search } from './assets/Search.svg';

const Busqueda = () => {
	return (
		<section>
			<form className="busqueda--form">
				<a href="https://www.google.com" className="busqueda--form-img">
					<Search />
				</a>
				<input
					className="busqueda--form-input"
					type="search"
					placeholder="Buscar..."
				/>
			</form>
		</section>
	);
};

export default Busqueda;
