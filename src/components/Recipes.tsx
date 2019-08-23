import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { filterRecipes } from '../selectors/selectors';
import RecipeListItem from './RecipeListItem';
import RecipesFilter from './RecipesFilter';

interface Recipe {
	id: number;
	name: string;
}

const Recipes = (props) => (
	<div>
		<Link to="recipes/add-recipe" className="btn btn--primary">
			Add recipe
		</Link>
		<RecipesFilter />
		<ul>{props.recipes.map((recipe) => <RecipeListItem key={recipe.id} {...recipe} />)}</ul>
	</div>
);
const mapStateToProps = (state) => {
	return {
		recipes: filterRecipes(state.recipes, state.filters)
	};
};

export default connect(mapStateToProps)(Recipes);
