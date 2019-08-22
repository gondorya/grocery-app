const filtersReducerState = {
	text: '',
	category: [],
	sortBy: 'date'
};

const FiltersReducer = (state = filtersReducerState, action) => {
	switch (action.type) {
		case 'SET_TITLE_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			};
		case 'SORT_BY_TITLE':
			return {
				...state,
				sortBy: 'title'
			}
		default:
			return state;
	}
};

export default FiltersReducer;
