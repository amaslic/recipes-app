import { render, waitFor } from "@testing-library/react";
import nock from 'nock';
import React from "react";
import Home from "./home";

describe('App components', () => {

	const recipe = {
		idMeal: "52795",
		strMeal: "Chicken Handi",
		strMealThumb: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
	};

	afterAll(() => {
		nock.restore();
	});
	afterEach(() => {
		nock.cleanAll();
	});

	it('Fake api call and check for data', async () => {
		const { queryByText } = render(<Home />);

		const server = nock('https://www.themealdb.com/api/json/v1/1/').get('search.php?s=').reply(200, {
			meals: { recipe }
		});


	});


});