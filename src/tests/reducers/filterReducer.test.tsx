import filterReducer from '../../reducers/filtersReducer';

test('should setup default filter values', () => {
	const state = filterReducer(undefined, '@@INIT');
	expect(state).toEqual({
		text: '',
		sortBy: 'date'
	});
});

test('should set sortBy date', () => {
	const state = filterReducer(undefined, { type: 'SORT_BY_DATE' });
	expect(state.sortBy).toBe('date');
});

test('should set sortBy title', () => {
	const state = filterReducer(undefined, { type: 'SORT_BY_TITLE' });
	expect(state.sortBy).toBe('title');
});

test('should set filter text', () => {
	const state = filterReducer(undefined, { type: 'SET_TITLE_FILTER', text: 'text to test' });
	expect(state.text).toBe('text to test');
});
