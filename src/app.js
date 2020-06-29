import React from 'react';

import 'styles/style.scss';

// Router
import Router from './Router';

// Components
import ScrollRestoration from 'components/ScrollRestoration';
import Header from 'components/Header';
import Footer from 'components/Footer';

const App = () => {
  return (
    <div className="tkr-app">
      <Header />

      <div className="tkr-main-content">
        <ScrollRestoration />
        <Router />
      </div>

      <Footer />
    </div>
  );
};

export default App;
