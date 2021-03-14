import React from 'react';
import './App.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './components/home/home';

const App = () => {

  return (
    <>
      <HelmetProvider>
        <div className="App" data-testid="app-cmp">
          <Helmet>
            <title>Recipes app</title>
            <meta name="description" content="Recipes app" />
            <meta name="keywords" content="React, Typescript, Recipe, Recipes, Chicken, Pizza, Pasta"></meta>
          </Helmet>
          <Home />
        </div>
      </HelmetProvider>
    </>
  );
}

export default App;
