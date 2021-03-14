import App from './App';
import { render } from "@testing-library/react";
import React from 'react';

describe('App components', () => {


	it('Check if Home is rendered in APP', () => {
		const { getByTestId } = render(<App />);
		expect(getByTestId('home-cmp')).toBeInTheDocument();
	});


});