import { render, fireEvent } from '@testing-library/react';
import Search from './search';

describe('Search component', () => {
	const { getByTestId } = render(<Search setQuery={() => ''} />);
	const search = getByTestId('search-input');
	const searchBtn = getByTestId('search-btn');

	describe('search input', () => {
		it('check if initial value of search input is empty', () => {
			expect(search).toHaveValue('');
		});

		it('change input value and check if it is equal to changed value', () => {
			fireEvent.change(search, { target: { value: 'Chicken' } });
			expect(search).toHaveValue('Chicken');
		});
	});

	describe('Search button', () => {
		it('check for typo in search button', () => {
			expect(searchBtn).toHaveTextContent('Search');
		});
	});

});