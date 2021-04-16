import React, { useRef, useEffect } from 'react';
import './Menu.css';

const Menu = () => {
	const grid = useRef(null);

	useEffect(() => {
		grid.current.style.transition = `500ms ease-out all`;
		grid.current.style.transform = 'translatex(100%)';
	}, []);
	return (
		<aside className="menuMain__content">
			<div className="menuMain__grid" ref={grid}>
				<p>prueba de menu</p>
			</div>
		</aside>
	);
};

export default Menu;
