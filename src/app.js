import React from 'react';
import { useRoutes } from 'hookrouter';
	
// Utils
import { routes } from 'utils/router';

// Components
import ScrollRestoration from 'components/ScrollRestoration';
import Header from 'components/Header';
import Footer from 'components/Footer';

const App = () => {
	const routeResult = useRoutes(routes) || null;

	return(
		<div className="tkr-app">
			<Header/>

			<div className="tkr-main-content">
				<ScrollRestoration />

				{ routeResult }
			</div>
			
			<Footer/>
		</div>
	);
};

export default App;