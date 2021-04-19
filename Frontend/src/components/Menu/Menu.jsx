import React, { useRef, useEffect } from 'react';
import './Menu.scss';

const Menu = () => {
	const grid = useRef(null);

	useEffect(() => {
		// grid.current.style.transition = `500ms ease-out all`;
		// grid.current.style.transform = 'translatex(100%)';
	}, []);
	return (
		<aside className='menuMain__content'>
			<div className='menuMain__grid' ref={grid}>
				<div className='menuMain__grid-login'>
					<p>hola</p>
				</div>
			</div>
		</aside>
	);
};

export default Menu;
