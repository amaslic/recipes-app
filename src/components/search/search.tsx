import React from 'react';
import ISearch from '../../interface/search';

const Search = (props: ISearch) => {

	const submitSearch = (e: React.FormEvent<any>) => {
		e.preventDefault();
		props.getRecipes();
	}

	return (
		<>
			<form onSubmit={submitSearch}>
				<input onChange={e => props.setQuery(e.target.value)} data-testid="search-input" value={props.query} type="text" name="search" placeholder="Search recipes"></input>
				<button type="submit" data-testid="search-btn">Search</button>
			</form>
		</>
	);
}

export default Search;