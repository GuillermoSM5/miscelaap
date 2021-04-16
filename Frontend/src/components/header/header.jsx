import React, { useState } from 'react';
import './header.css';
import MenuH from './menu.svg';
import Shopping from './shopping.svg';
import MenuDeslizable from '../Menu/Menu';
import Close from './Close.svg';

const Header = () => {
	const [menuMain, setMenuMain] = useState(false);
	const menu = () => {
		setMenuMain(!menuMain);
	};
	return (
		<>
			<header className="header-v1">
				<button className="header-v1__menu" href="/">
					<img
						onClick={menu}
						className="header-v1__menu-image"
						src={menuMain ? Close : MenuH}
						alt="Menu"
					/>
				</button>
				{menuMain && (
					<div className="menuMain">
						<MenuDeslizable />
					</div>
				)}
				<a className="header-v1__menu-shopping" href="/">
					<img
						className="header-v1__menu-shopping-image"
						src={Shopping}
						alt=""
					/>
				</a>
			</header>
		</>
	);
};

export default Header;
