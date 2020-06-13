import React from 'react';

import Review from '../review';

import './reviews.scss';

const Reviews = () => {
	return (
		<div className="reviews">
			<h2 className="reviews__title">Отзывы наших покупателей</h2>
			<div className="reviews__list">
				<div className="reviews__item">
					<Review />
				</div>
				<div className="reviews__item">
					<Review />
				</div>
			</div>
		</div>
	)
}

export default Reviews;