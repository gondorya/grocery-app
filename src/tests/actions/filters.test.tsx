import { setTextFilter, sortByDate, sortByTitle } from '../../actions/filters';

test('should setup set text filter action object', () => {
	const action = setTextFilter('filter');
	expect(action).toEqual({
		type: 'SET_TITLE_FILTER',
		text: 'filter'
	});
});

test('should setup set text filter action object with default filter', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TITLE_FILTER',
		text: ''
	});
});

test('should setup sort by date action filter', () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: 'SORT_BY_DATE'
	});
});

test('should setup sort by title action filter', () => {
	const action = sortByTitle();
	expect(action).toEqual({
		type: 'SORT_BY_TITLE'
	});
});
