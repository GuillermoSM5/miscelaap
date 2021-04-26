import React from 'react';
import PageLink from '../../components/PageLink/PageLink';
import './NewUserLogin.scss';
import { Link } from 'react-router-dom';
const NewUserLoguin = () => {
	return (
		<section className='newUser'>
			<div className='newUser__content'>
				<h2 className='newUser__content-title'>¡Registrate!</h2>
				<div className='newUser__content-links'>
					<PageLink text='Quiero comprar' />
					<PageLink text='Quiero vender' />
				</div>
				<div className='newUser__content-login'>
					<p className='login__paragraph'>¿Ya tienes cuenta?</p>
					<Link to='/log-in' className='login__link'>
						inicia sesión
					</Link>
				</div>
			</div>
		</section>
	);
};

export default NewUserLoguin;
