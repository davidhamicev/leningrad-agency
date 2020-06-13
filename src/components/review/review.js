import React from 'react';

import './review.scss';
import user from './photo.png';

const Review = () => {
	return (
		<div className="review">
			<div className="review__image">
				<img src={user} alt="Roger Stevenson"/>
			</div>
			<div className="review__info">
				<div className="review__author">Roger Stevenson</div>
				<div className="review__content">
					American skeptic producer and author Brian Dunning believes Polybius to be an urban legend that grew out of exaggerated and distorted tales of an early release version of Tempest that caused problems with photosensitive epilepsy, motion sickness, and vertigo.
				</div>
			</div>
		</div>
	);
}

export default Review;