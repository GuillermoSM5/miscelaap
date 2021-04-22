import React from 'react';
import './PageLink.scss';
import { Link } from 'react-router-dom';

const Links = ({ text, path }) => {
	return (
		<Link className='link' to={path}>
			<p className='link__text'>{text}</p>
		</Link>
	);
};

export default Links;
