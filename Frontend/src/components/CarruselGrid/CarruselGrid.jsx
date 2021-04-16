import React, { useRef } from 'react';
import './CarruselGrid.css';
import CardProducto from '../CardProducuto/CardProducto';
import { ReactComponent as Left } from '../../assets/left.svg';
import { ReactComponent as Rigth } from '../../assets/rigth.svg';

const CarruselGrid = ({ titulo, card }) => {
	const bd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const slide = useRef(null);
	const flechaIzquierda = useRef(null);
	const flechaDerecha = useRef(null);
	let slice = 0;
	const izquierda = () => {
		if (slide.current.children.length > 0) {
			flechaDerecha.current.style.display = 'block';
			slice = slice - slide.current.children[0].clientWidth * 2;
			if (slice === 0) {
				flechaIzquierda.current.style.visibility = 'hidden';
				flechaIzquierda.current.disabled = true;
			}
			slide.current.style.transition = `600ms ease-out all`;
			slide.current.style.transform = `translatex(-${slice}px)`;
		}
	};
	const derecha = () => {
		const tope = slide.current.scrollWidth - slide.current.clientWidth;
		console.log(tope);
		slice = slice + slide.current.children[0].clientWidth * 2;
		console.log(slice);
		if (slide.current.children.length > 0) {
			flechaIzquierda.current.style.visibility = 'visible';
			flechaIzquierda.current.disabled = false;
			slide.current.style.transition = `600ms ease-out all`;
			console.log(slice);
			if (!(slice >= tope)) {
				slide.current.style.transform = `translatex(-${slice}px)`;
			} else {
				slide.current.style.transform = `translatex(-${tope}px)`;
				flechaDerecha.current.style.display = 'none';
			}
		}
	};
	return (
		<section className="carruselgrid">
			<h2 className="carruselgrid__title">{titulo}</h2>
			<div className="carruselgrid__slideshow">
				<div className="carruselgrid__slideshow-slide" ref={slide}>
					{bd.map((number) => {
						return <CardProducto numero={number} card={card} />;
					})}
				</div>
				<div className="carruselgrid__slideshow-controls">
					<button
						onClick={izquierda}
						className="carruselgrid__slideshow-controls-arrow left"
						ref={flechaIzquierda}
					>
						<Left />
					</button>
					<button
						onClick={derecha}
						className="carruselgrid__slideshow-controls-arrow"
						ref={flechaDerecha}
					>
						<Rigth />
					</button>
				</div>
			</div>
		</section>
	);
};

export default CarruselGrid;
