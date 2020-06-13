import React from 'react';
import { Link } from 'react-router-dom';

import './nav-menu.scss';

const NavMenu = () => {
	const handleBurger = () => {
		let mobileMenu = document.querySelector('.nav-menu__items');
		let burger = document.querySelector('.nav-menu-burger');
		console.log(burger)

		mobileMenu.classList.toggle('active');
		burger.classList.toggle('open');
	}

	return (
		<nav className="nav-menu">
			<div className="nav-menu-burger" onClick={handleBurger}>
				<div className="nav-menu-burger__line nav-menu-burger__line_top"></div>
				<div className="nav-menu-burger__line nav-menu-burger__line_middle"></div>
				<div className="nav-menu-burger__line  nav-menu-burger__line_bottom"></div>
			</div>
			<div className="container">
				<ul className="nav-menu__items">
					<li className="nav-menu__item">
						<Link to="/" className="nav-menu__link">О компании</Link>
					</li>
					<li className="nav-menu__item">
						<Link to="/services" className="nav-menu__link">Услуги</Link>
					</li>
					<li className="nav-menu__item">
						<Link to="/about-product" className="nav-menu__link">О продукте</Link>
					</li>
					<li className="nav-menu__item">
						<Link to="/contacts" className="nav-menu__link">Контакты</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavMenu;