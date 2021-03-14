import React, { useEffect, useState } from 'react';
import './home.scss';
import Recipe from '../recipe/recipe';
import { api } from '../../services/api';
import IRecipes from '../../interface/recipes';
import Search from '../search/search';

const Home = () => {

	const [recipes, setRecipes] = useState<IRecipes[]>([]);
	const [query, setQuery] = useState<any>('');

	useEffect(() => {
		getRecipes();
		//  To get rid of annoying warning since getRecipes is used only in useEffect
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getRecipes = async () => {

		try {
			const data = await api(query);

			if (data.meals) {
				setRecipes(data.meals);
			}

		} catch (e) {
			console.warn('API call failed');
		}
	}


	return (
		<>
			<div data-testid="home-cmp" >
				<header>
					<Search getRecipes={getRecipes} setQuery={setQuery} query={query} />
				</header>
				<div className="container" data-testid="recipes-cnt">
					{
						recipes.map(recipe => {
							return <Recipe key={recipe.idMeal} {...recipe} />
						})
					}
				</div>

			</div>
		</>
	);
}

export default Home;
