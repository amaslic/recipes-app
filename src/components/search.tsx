import React, { useRef } from 'react';
import ISearch from '../interface/search';

const Search = (props: ISearch) => {

	const searchRef = useRef<HTMLInputElement>(null);

	const submitSearch = (e: React.FormEvent<any>) => {
		e.preventDefault();
		props.setQuery(searchRef.current!.value);
	}
	return (
		<>
			<form onSubmit={submitSearch}>
				<input ref={searchRef} type="text" name="search"></input>
				<button type="submit">Search</button>
			</form>
		</>
	);
}

export default Search;