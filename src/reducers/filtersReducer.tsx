const filtersReducerState = {
	text: '',
	category: [],
	date: undefined,
	sortBy: 'date'
};

const FiltersReducer = (state = filtersReducerState, action) => {
	switch (action.type) {
		case 'SET_TITLE_FILTER':
			return {
				...state,
				text: action.title
			};
		default:
			return state;
	}
};

export default FiltersReducer;
