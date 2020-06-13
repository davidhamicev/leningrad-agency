import React from 'react';

import './error-indicator.scss';

const ErrorIndicator = () => {
	return (
		<div className="error-indicator">
			<span>Something has gone terribly wrong!</span>
			<span>Don't worry, we will fix it!</span>
		</div>
	);
};

export default ErrorIndicator;