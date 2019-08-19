import { createStore, combineReducers } from 'redux';
import RecipeReducer from '../reducers/recipeReducer';
import FiltersReducer from '../reducers/filtersReducer';

const store = createStore(
	combineReducers({
		recipes: RecipeReducer,
		filters: FiltersReducer
	})
);

export default store;
