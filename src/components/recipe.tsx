import React from 'react';
import IRecipes from '../interface/recipes';

const Recipe = (props: IRecipes) => {
	console.log(props);
	return (
		<>
			<div>
				{props.strMeal}
			</div>
			<img src={props.strMealThumb} alt={props.strMeal} loading="lazy" />
			<div>
				{props.strInstructions}
			</div>
		</>
	);
}

export default Recipe;