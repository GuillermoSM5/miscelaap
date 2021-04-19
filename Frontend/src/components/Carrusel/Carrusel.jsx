import React, { useRef, useEffect } from 'react';
import './Carrusel.scss';
import { ReactComponent as Left } from '../../assets/left.svg';
import { ReactComponent as Rigth } from '../../assets/rigth.svg';

const Carrusel = () => {
	const slideshow = useRef(null);
	const intervaloSlideshow = useRef(null);
	const leftButton = useRef(null);
	const rigthButton = useRef(null);

	const next = () => {
		if (slideshow.current.children.length > 0) {
			const primerElemento = slideshow.current.children[0];
			slideshow.current.style.transition = `600ms ease-out all`;
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transition = () => {
				slideshow.current.style.transition = `none`;
				slideshow.current.style.transform = `translateX(0)`;
				//agregando el primer elelmento al ultimo
				slideshow.current.appendChild(primerElemento);
				slideshow.current.removeEventListener('transitionend', transition);
			};
			//Eviando el primer elemento al final
			slideshow.current.addEventListener('transitionend', transition);
		}
	};

	const previous = () => {
		if (slideshow.current.children.length > 0) {
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(
				ultimoElemento,
				slideshow.current.firstChild
			);

			slideshow.current.style.transition = `none`;
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `600ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	};

	useEffect(() => {
		intervaloSlideshow.current = setInterval(() => {
			next();
		}, 5000);

		leftButton.current.addEventListener('click', () => {
			console.log('limpiando intervalo');
			clearInterval(intervaloSlideshow.current);
			console.log('iniciando contador');
			intervaloSlideshow.current = setInterval(() => {
				next();
			}, 5000);
		});

		rigthButton.current.addEventListener('click', () => {
			console.log('limpiando intervalo');
			clearInterval(intervaloSlideshow.current);
			console.log('iniciando contador');
			intervaloSlideshow.current = setInterval(() => {
				next();
			}, 5000);
		});

		slideshow.current.addEventListener('mouseenter', () => {
			clearInterval(intervaloSlideshow.current);
		});

		slideshow.current.addEventListener('mouseleave', () => {
			intervaloSlideshow.current = setInterval(() => {
				next();
			}, 5000);
		});
	}, []);

	return (
		<div className='carrusel'>
			<div className='carrusel-slideshow' ref={slideshow}>
				<div className='carrusel-slideshow__slide'>
					<a href='https://www.google.com/'>
						<img
							className='carrusel-slideshow__slide-image'
							src='https://oxxo-com.s3.amazonaws.com/carousel/promociones/cc56b26a5a89d8fc505bec05e2baf8c4.jpg'
							alt=''
						/>
					</a>
				</div>
				<div className='carrusel-slideshow__slide'>
					<a href='https://www.google.com/'>
						<img
							className='carrusel-slideshow__slide-image'
							src='https://oxxo-com.s3.amazonaws.com/carousel/promociones/d12e28768364406ebcdadcdabc453a37.jpg'
							alt=''
						/>
					</a>
				</div>
				<div className='carrusel-slideshow__slide'>
					<a href='https://www.google.com/'>
						<img
							className='carrusel-slideshow__slide-image'
							src='https://oxxo-com.s3.amazonaws.com/carousel/promociones/195e9fd0047ed5f6132011b445a9f4af.png'
							alt=''
						/>
					</a>
				</div>
			</div>
			<div className='carrusel-controls'>
				<button onClick={previous} className='carrusel__arrow' ref={leftButton}>
					<Left />
				</button>
				<button
					onClick={next}
					className='carrusel__arrow rigth'
					ref={rigthButton}
				>
					<Rigth />
				</button>
			</div>
		</div>
	);
};

export default Carrusel;
