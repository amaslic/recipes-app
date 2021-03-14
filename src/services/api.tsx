export const api = (query: string) => {
	return fetch(
		`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
	).then((res) => res.json());
};

