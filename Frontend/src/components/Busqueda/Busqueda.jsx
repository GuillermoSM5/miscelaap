import React from 'react';
import './Busqueda.scss';
import { ReactComponent as Search } from '../../assets/Search.svg';

const Busqueda = () => {
	return (
		<section>
			<form className='search--form'>
				<a href='https://www.google.com' className='search--form-img'>
					<Search />
				</a>
				<input
					className='search--form-input'
					type='search'
					placeholder='Buscar...'
				/>
			</form>
		</section>
	);
};

export default Busqueda;
