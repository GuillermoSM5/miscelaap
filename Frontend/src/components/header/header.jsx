import React, { useState } from 'react';
import './Header.scss';
import MenuH from '../../assets/Menu.svg';
import Shopping from '../../assets/Shopping.svg';
import { Link } from 'react-router-dom';
import Close from '../../assets/Close.svg';
import DefaulUser from '../../assets/default-user.png';

const Header = () => {
	const [menuActive, setMenuActive] = useState(false);
	const sideMenu = () => {
		setMenuActive(!menuActive);
		console.log(menuActive);
	};
	return (
		<>
			<header className='header-v1'>
				<button className='header-v1__menu' href='/'>
					<img
						className='header-v1__menu-image'
						onClick={sideMenu}
						src={MenuH}
						alt='Menu'
					/>
				</button>
				<a className='header-v1__menu-shopping' href='/'>
					<img
						className='header-v1__menu-shopping-image'
						src={Shopping}
						alt=''
					/>
				</a>
			</header>
			<nav className={menuActive ? 'nav-menu menu-active' : 'nav-menu'}>
				<div className='nav-menu__close'>
					<img
						onClick={sideMenu}
						className='nav-menu__close-img'
						src={Close}
						alt=''
					/>
				</div>
				<div to='/log-in' className='nav-menu__account'>
					<div className='nav-menu__account-name'>
						<img src={DefaulUser} alt='' />
						<p>Mi cuenta</p>
					</div>
					<div className='nav-menu__account-links'>
						<Link onClick={sideMenu} to='/log-in'>
							Ingresar
						</Link>
						<Link onClick={sideMenu} to='/sign-up'>
							Registrarse
						</Link>
					</div>
				</div>
				<Link to='#' className='nav-menu__links'>
					Novedades
				</Link>
				<Link to='#' className='nav-menu__links'>
					Promociones
				</Link>
				<Link to='#' className='nav-menu__links'>
					Tiendas
				</Link>
				<Link to='#' className='nav-menu__links'>
					Prodcutos
				</Link>
			</nav>
		</>
	);
};

export default Header;
