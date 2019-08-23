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
		title: 'tomato soup',
		description: 'summer soup with basil',
		img:
			'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AABrZtf.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f&x=2187&y=1283',
		ingredients: [ 'tomatos', 'carrots' ],
		steps: [ 'clean tomatos' ]
	})
);

const recipe2 = appStore.dispatch(
	addRecipe({
		title: 'Authentic Bolognese',
		description: 'With fresh tomatos',
		img: 'https://s3.przepisy.pl/przepisy3ii/img/variants/1280x0/spaghetti-bolognese-3.jpg'
	})
);

const recipe3 = appStore.dispatch(
	addRecipe({
		title: 'Bolognese',
		description: 'authentic italian',
		img: 'https://hips.hearstapps.com/hmg-prod/images/delish-bolognese-horizontal-1-1540572556.jpg'
	})
);

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
