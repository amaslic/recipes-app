import React from 'react';
import './recipes.scss'
import IRecipes from '../../interface/recipes';

const Recipe = (props: IRecipes) => {

	return (
		<div className="recipe-box" data-testid="recipe-cmp">

			<img src={props.strMealThumb} alt={props.strMeal} loading="lazy" />
			<div className="recipe-info">
				<div className="title">
					{props.strMeal}
				</div>
			</div>
			<div className="recipe-over">
				<span>
					{props.strInstructions}
				</span>
			</div>
		</div>
	);
}

export default Recipe;