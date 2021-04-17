import React, { useRef } from 'react';
import './CarruselGrid.scss';
import CardProducto from '../CardProducuto/CardProducto';
import { ReactComponent as Left } from '../../assets/left.svg';
import { ReactComponent as Rigth } from '../../assets/rigth.svg';

const CarruselGrid = ({ titulo, card }) => {
	const bd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const slide = useRef(null);
	const leftArrow = useRef(null);
	const rightArrow = useRef(null);
	let slice = 0;
	const clickLeft = () => {
		if (slide.current.children.length > 0) {
			rightArrow.current.style.display = 'block';
			slice = slice - slide.current.children[0].clientWidth * 2;
			if (slice === 0) {
				leftArrow.current.style.visibility = 'hidden';
				leftArrow.current.disabled = true;
			}
			slide.current.style.transition = `600ms ease-out all`;
			slide.current.style.transform = `translatex(-${slice}px)`;
		}
	};
	const clickRight = () => {
		const tope = slide.current.scrollWidth - slide.current.clientWidth;
		console.log(tope);
		slice = slice + slide.current.children[0].clientWidth * 2;
		console.log(slice);
		if (slide.current.children.length > 0) {
			leftArrow.current.style.visibility = 'visible';
			leftArrow.current.disabled = false;
			slide.current.style.transition = `600ms ease-out all`;
			console.log(slice);
			if (!(slice >= tope)) {
				slide.current.style.transform = `translatex(-${slice}px)`;
			} else {
				slide.current.style.transform = `translatex(-${tope}px)`;
				rightArrow.current.style.display = 'none';
			}
		}
	};
	return (
		<section className='carouselgrid'>
			<h2 className='carouselgrid__title'>{titulo}</h2>
			<div className='carouselgrid__slideshow'>
				<div className='carouselgrid__slideshow-slide' ref={slide}>
					{bd.map((number) => {
						return <CardProducto numero={number} card={card} />;
					})}
				</div>
				<div className='carouselgrid__slideshow-controls'>
					<button
						onClick={clickLeft}
						className='carouselgrid__slideshow-controls-arrow left'
						ref={leftArrow}
					>
						<Left />
					</button>
					<button
						onClick={clickRight}
						className='carouselgrid__slideshow-controls-arrow'
						ref={rightArrow}
					>
						<Rigth />
					</button>
				</div>
			</div>
		</section>
	);
};

export default CarruselGrid;
