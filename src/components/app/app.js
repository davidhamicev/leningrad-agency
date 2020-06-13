import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';
import AboutPage from '../pages/about-page';

const App = () => {
	return (
		<main className="main">
			<Header />
			<div className="container">
				<Switch>
					<Route path="/" component={AboutPage} exact/>
					<Route path="/services" render={() => <h2>Services page</h2>}/>
					<Route path="/about-product" render={() => <h2>About product page</h2>}/>
					<Route path="/contacts" render={() => <h2>Contacts page</h2>}/>
					<Route render={() => <h2>Page not found!</h2>}/>
				</Switch>
			</div>
			<Footer />
		</main>
	)
}

export default App;