import React from 'react';
import { Link } from 'react-router-dom';

import './logo.scss';

const Logo = () => {
	return (
		<div className="container">
			<Link to="/" className="logo">Лого</Link>
		</div>
	)
};

export default Logo;