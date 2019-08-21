import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GroceryApp from '../components/GroceryApp';
import Home from '../components/Home';
import Recipes from '../components/Recipes';
import Recipe from '../components/Recipe';
import AddRecipe from '../components/AddRecipe';
import Edit from '../components/Edit';
import NotFoundPage from '../components/404';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/grocery" component={GroceryApp} />
		<Route exact path="/recipes" component={Recipes} />
		<Route exact path="/recipes/add-recipe" component={AddRecipe} />
		<Route exact path="/recipes/recipe/:id" component={Recipe} />
		<Route exact path="/recipes/edit/:id" component={Edit} />
		<Route exact component={NotFoundPage} />
	</Switch>
);

export default Routes;
