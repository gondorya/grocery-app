import { addRecipe, removeRecipe, editRecipe } from '../../actions/recipes';

test('should setup remove recipe action object', () => {
	const action = removeRecipe({ id: '123abc' });
	expect(action).toEqual({
		id: '123abc',
		type: 'REMOVE_RECIPE'
	});
});

test('should setup edit recipe action object', () => {
	const action = editRecipe('123abc', { title: 'example' });
	expect(action).toEqual({
		id: '123abc',
		type: 'EDIT_RECIPE',
		updates: {
			title: 'example'
		}
	});
});

test('should setup add recipe action object', () => {
	const data = {
		title: 'example',
		description: 'example desc',
		img: 'img',
		ingredients: [ '1', '2', '3' ],
		steps: [ 'step 1', 'step-2' ],
		date: 123456
	};
	const action = addRecipe(data);

	expect(action).toEqual({
		type: 'ADD_RECIPE',
		recipe: {
			...data,
			id: expect.any(String)
		}
	});
});

test('should setup add recipe action object with default data', () => {
	const action = addRecipe();

	expect(action).toEqual({
		type: 'ADD_RECIPE',
		recipe: {
			title: '',
			description: '',
			img: '',
			ingredients: [],
			steps: [],
			date: 0,
			id: expect.any(String)
		}
	});
});
