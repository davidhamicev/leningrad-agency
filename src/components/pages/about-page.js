import React from 'react';

import Reviews from '../reviews';
import Shedule from '../shedule';

import './about-page.scss';

const AboutPage = () => {
	return (
		<div className="about">
			<div className="about__content">
				<div className="about__title">О компании</div>
				<div className="about__head">
					<div className="about__desc">
						<p className="about__paragraph">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <span className="about__paragraph_bold">dolore magna aliqua</span>.
						</p>
						<p className="about__paragraph">
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
						<p className="about__paragraph about__paragraph_mark">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit!
						</p>
					</div>
					<button className="about__btn">Купить продукт</button>
				</div>
				<div className="about__reviews">
					<Reviews />
				</div>
				<div className="about__shedule">
					<Shedule />
				</div>
			</div>
		</div>
	)
}

export default AboutPage;