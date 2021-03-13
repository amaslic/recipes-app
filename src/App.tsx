import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IRecipes from './interface/recipes';
import Recipe from './components/recipe';

const App = () => {

  const [recipes, setRecipes] = useState<IRecipes[]>([]);
  const [query, setQuery] = useState<any>('');
  const searchRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    getRecipes();
    //  To get rid of annoying warning since getRecipes is used only in useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.meals) {
      setRecipes(data.meals);
    }
  }

  const submitSearch = (e: React.FormEvent<any>) => {
    e.preventDefault();
    setQuery(searchRef.current!.value);
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
          <form onSubmit={submitSearch}>
            <input ref={searchRef} type="text" name="search"></input>
            <button type="submit">Search</button>
          </form>
        </header>
        <div>
          {
            recipes.map(recipe => {
              return <Recipe key={recipe.idMeal} {...recipe} />
            })
          }
        </div>

      </div>
    </HelmetProvider>

  );
}

export default App;
