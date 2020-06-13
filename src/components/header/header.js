import React from 'react';

import Logo from './components/logo';
import NavMenu from './components/nav-menu';

import './header.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<Logo />
			</div>
			<div className="header__menu">
				<NavMenu />
			</div>
		</header>
	)
}

export default Header;