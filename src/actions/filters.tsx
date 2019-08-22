const setTextFilter = (text = '') => ({
	type: 'SET_TITLE_FILTER',
	text
});

const sortByDate = () =>({
	type: 'SORT_BY_DATE',
});

const sortByTitle = () =>({
	type: 'SORT_BY_TITLE',
});

export { setTextFilter, sortByDate, sortByTitle };
