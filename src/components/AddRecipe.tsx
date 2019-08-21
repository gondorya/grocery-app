import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { addRecipe } from '../actions/recipes';

const AddRecipe = (props) => (
	<RecipeForm
		newRecipe={(recipe) => {
			props.dispatch(addRecipe(recipe));
		}}
	/>
);

export default connect()(AddRecipe);
