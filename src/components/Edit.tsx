import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { editRecipe } from '../actions/recipes';

const Edit = (props) => (
	<div>
		<h2>Edit page:</h2>
		<RecipeForm
			recipe={props.recipe}
			newRecipe={(recipe) => {
				props.dispatch(editRecipe(props.recipe.id, recipe));
				props.history.push('/recipes');
			}}
		/>
	</div>
);

const mapStateToProps = (state, props) => {
	return {
		recipe: state.recipes.find((recipe) => recipe.id === props.match.params.id)
	};
};

export default connect(mapStateToProps)(Edit);
