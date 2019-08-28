import RecipeReducer from '../../reducers/recipeReducer';
import recipes from '../fixtures/recipes';

test('should setup default recipe values', () => {
	const state = RecipeReducer(undefined, '@@INIT');
	expect(state).toEqual([]);
});

test('should remove ricpe by id', () => {
	const action = {
		type: 'REMOVE_RECIPE',
		id: '1'
	};
	const state = RecipeReducer(recipes, action);
	expect(state).toEqual([ recipes[1], recipes[2] ]);
});

test('should not remove ricpe if not found', () => {
	const action = {
		type: 'REMOVE_RECIPE',
		id: '-1'
	};
	const state = RecipeReducer(recipes, action);
	expect(state).toEqual(recipes);
});

test('should add new ricpe to state', () => {
	const newRecipe = {
		id: '4',
		title: 'new recipe',
		description: 'example text',
		data: new Date(0),
		ingredients: [ 'first', 'second' ],
		steps: [ 'step 1', 'step 2', 'step 3' ]
	};
	const action = {
		type: 'ADD_RECIPE',
		recipe: newRecipe
	};
	const state = RecipeReducer(recipes, action);
	expect(state).toEqual([ ...recipes, newRecipe ]);
});

test('should edit a ricpe', () => {
	const action = {
		type: 'EDIT_RECIPE',
		id: '1',
		updates: {
			title: 'some awesome new recipe'
		}
	};
	const state = RecipeReducer(recipes, action);
	expect(state[0].title).toBe('some awesome new recipe');
});

test('should not edit a ricpe if not exist', () => {
	const action = {
		type: 'EDIT_RECIPE',
		id: '-1',
		updates: {
			title: 'some awesome new recipe'
		}
	};
	const state = RecipeReducer(recipes, action);
	expect(state).toEqual(recipes);
});
