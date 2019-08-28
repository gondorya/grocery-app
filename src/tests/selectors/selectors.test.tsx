import { filterRecipes } from '../../selectors/selectors';
import recipes from '../fixtures/recipes';

test('should filters by text value', () => {
	const filter = {
		text: 'chips',
		sortBy: 'date'
	};
	expect(filterRecipes(recipes, filter)).toEqual([ recipes[0], recipes[2] ]);
});
