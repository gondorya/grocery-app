import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/routes';
import Header from './components/Header';
import store from './stores/configureStore';
import { addRecipe } from './actions/recipes';
import { setTextFilter, sortByTitle } from './actions/filters';
import { filterRecipes } from './selectors/selectors';

import './styles/style.scss';

const appStore = store();

const recipe1 = appStore.dispatch(
	addRecipe({
		title: 'a tomato soup',
		description: 'summer soup with basil',
		img: 'https://deltadailynews.com/wp-content/uploads/2016/06/ddn-duck.jpg'
	})
);

const recipe2 = appStore.dispatch(
	addRecipe({
		title: 'Bolognese',
		description: 'With fresh tomatos',
		img: 'https://deltadailynews.com/wp-content/uploads/2016/06/ddn-duck.jpg'
	})
);

const recipe3 = appStore.dispatch(
	addRecipe({
		title: 'Bolognese',
		description: 'authentic italian',
		img: 'https://deltadailynews.com/wp-content/uploads/2016/06/ddn-duck.jpg'
	})
);

appStore.dispatch(setTextFilter('tomato'));
appStore.dispatch(sortByTitle());

const state = appStore.getState();
const recipesToShow = filterRecipes(state.recipes, state.filters);
console.log(recipesToShow);

const Layout = () => (
	<BrowserRouter>
		<div>
			<Header />
			<div className="container">
				<Routes />
			</div>
		</div>
	</BrowserRouter>
);

const jsx = (
	<Provider store={appStore}>
		<Layout />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
