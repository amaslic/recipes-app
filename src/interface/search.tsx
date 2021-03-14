export default interface ISearch {
	query: string,
	setQuery: (data: string) => void,
	getRecipes: () => void
}