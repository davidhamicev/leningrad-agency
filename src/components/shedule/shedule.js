import React from 'react';

import './shedule.scss';

const Shedule = () => {
	return (
		<div className="shedule">
			<div className="shedule__content">
				<div className="shedule__title">Часы работы</div>
				<div className="shedule__plan">
					<div className="shedule__row">
						<div className="shedule__cell shedule__cell-left">пн-пт</div>
						<div className="shedule__cell shedule__cell-right">10-18</div>
					</div>
					<div className="shedule__row">
						<div className="shedule__cell shedule__cell-left">сб</div>
						<div className="shedule__cell shedule__cell-right">10-16</div>
					</div>
					<div className="shedule__row">
						<div className="shedule__cell shedule__cell-left">вс</div>
						<div className="shedule__cell shedule__cell-right">12-16</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Shedule;