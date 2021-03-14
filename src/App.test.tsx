import App from './App';
import { render } from "@testing-library/react";
import React from 'react';

describe('App components', () => {

	it('Check if Home and APP is rendered correctly', () => {
		const { getByTestId } = render(<App />);

		expect(getByTestId('app-cmp')).toBeInTheDocument();
		expect(getByTestId('home-cmp')).toBeInTheDocument();
	});

});