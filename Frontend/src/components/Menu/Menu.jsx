import React, { useRef, useEffect } from 'react';
import './Menu.scss';
import DefaulUser from '../../assets/default-user.png';
import { Link } from 'react-router-dom';

const Menu = () => {
	const grid = useRef(null);

	useEffect(() => {
		//grid.current.style.transition = `500ms ease-out all`;
		//grid.current.style.transform = 'translatex(100%)';
	}, []);
	return <aside className='content'></aside>;
};

export default Menu;
