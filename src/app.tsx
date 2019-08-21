import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { addRecipe, editRecipe } from './actions/recipes';
import Routes from './routes/routes';
import Header from './components/Header';
import store from './stores/configureStore';
import './styles/style.scss';

const appStore = store();

const myRecipe = appStore.dispatch(
	addRecipe({
		title: 'about',
		description: 'nice',
		img: 'https://deltadailynews.com/wp-content/uploads/2016/06/ddn-duck.jpg'
	})
);

const mRecipe = appStore.dispatch(
	addRecipe({
		title: 'about',
		description: 'nice',
		img: 'https://deltadailynews.com/wp-content/uploads/2016/06/ddn-duck.jpg'
	})
);

appStore.dispatch(editRecipe(myRecipe.recipe.id, { title: 'ello' }));

const state = appStore.getState();

console.log(state);

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
