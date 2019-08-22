import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import store from '../stores/configureStore';
import { setTextFilter, sortByTitle } from '../actions/filters';
import { filterRecipes } from '../selectors/selectors';

interface Recipe {
	id: number;
	name: string;
}

const Recipes = (props) => (
	<div>
		<Link to='recipes/add-recipe' className='btn btn--primary'>Add recipe</Link>
		<ul>
			{props.recipes.map((recipe) => (
				<li key={recipe.id}>{recipe.title}</li>
			))}
		</ul>
	</div>
)
const mapStateToProps = (state) => {
	return {
		recipes: filterRecipes(state.recipes, state.filters);
	}
}

export default connect(mapStateToProps)(Recipes);
