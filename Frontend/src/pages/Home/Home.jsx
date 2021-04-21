import React from 'react';
import Carrusel from '../../components/Carrusel/Carrusel';
import Busqueda from '../../components/Busqueda/Busqueda';
import CarruselGrid from '../../components/CarruselGrid/CarruselGrid';

const Home = () => {
	return (
		<>
			{/* <Carrusel /> */}
			<Busqueda />
			<div className='saludo'>
				<h2 className='saludo-pregunta'>¿Que te traigo de la tienda?</h2>
			</div>
			<CarruselGrid titulo='Productos' card='prodcuto' />
			<CarruselGrid titulo='Tiendas' card='tienda' />
		</>
	);
};

export default Home;
