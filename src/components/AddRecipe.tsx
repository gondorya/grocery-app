import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { addRecipe } from '../actions/recipes';

const AddRecipe = (props) => (
	<div>
		<h2>Add New Recipe</h2>
		<RecipeForm
			newRecipe={(recipe) => {
				props.dispatch(addRecipe(recipe));
				props.history.push('/recipes');
			}}
		/>
	</div>
);

export default connect()(AddRecipe);
