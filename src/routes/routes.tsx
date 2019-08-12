import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GroceryApp from '../components/GroceryApp';
import Home from '../components/Home';
import Recipes from '../components/Recipes';
import Recipe from '../components/Recipe';
import AddNew from '../components/AddNew';
import Edit from '../components/Edit';
import NotFoundPage from '../components/404';

const routes = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/grocery" component={GroceryApp} />
		<Route exact path="/recipes" component={Recipes} />
		<Route exact path="/recipes/add-new" component={AddNew} />
		<Route exact path="/recipes/recipe/:id" component={Recipe} />
		<Route exact path="/recipes/edit/:id" component={Edit} />
		<Route exact component={NotFoundPage} />
	</Switch>
);

export default routes;
