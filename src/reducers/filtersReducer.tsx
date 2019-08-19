const filtersReducerState = {
	filters: {
		text: '',
		category: [],
		date: undefined,
		sortBy: 'date'
	}
};

const FiltersReducer = (state = filtersReducerState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default FiltersReducer;
