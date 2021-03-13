import React, { useEffect, useState } from 'react';
import './App.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IRecipes from './interface/recipes';

const App = () => {

  const [recipes, setRecipes] = useState<IRecipes[]>([]);


  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data.meals);

  }

  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Recipes app</title>
          <meta name="description" content="Recipes app" />
          <meta name="keywords" content="React, Typescript, Recipe, Recipes, Chicken, Pizza, Pasta"></meta>
        </Helmet>
        <header>

        </header>
      </div>
    </HelmetProvider>

  );
}

export default App;
