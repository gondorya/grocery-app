import { createStore, combineReducers } from 'redux';
import RecipeReducer from '../reducers/recipeReducer';
import FiltersReducer from '../reducers/filtersReducer';

export default () => {
	const store = createStore(
		combineReducers({
			recipes: RecipeReducer,
			filters: FiltersReducer
		})
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};
