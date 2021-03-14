import { render } from "@testing-library/react";
import React from "react";
import IRecipes from "../../interface/recipes";
import { api } from "../../services/api";
import Recipe from "../recipe/recipe";

describe('Mock API call', () => {

	const recipe: IRecipes = {
		idMeal: "52795",
		strInstructions: 'dummy instructions',
		strMeal: "Chicken Handi",
		strMealThumb: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
	};

	beforeEach(() => {
		global.fetch = jest.fn().mockImplementation(() => {
			const p = new Promise(resolve => {
				resolve({
					json: () => {
						return ({ meals: recipe });
					}
				})
			})
			return p;

		});
	});

	it('Fake api call and check for data', async () => {
		const res = await api('');

		expect(res.meals).toBe(recipe);

	});

	it('Check for data in Recipe component', async () => {
		const { queryByText } = render(<Recipe {...recipe} />);

		const res = await api('');

		expect(queryByText(recipe.strMeal)).toHaveTextContent(res.meals.strMeal);
	});


});