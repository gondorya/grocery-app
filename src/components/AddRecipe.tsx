import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { addRecipe } from '../actions/recipes';

class AddRecipe extends React.Component {
	constructor(props) {
		super(props);
	}

	newRecipe = (recipe) => {
		this.props.newRecipe(recipe);
		this.props.history.push('/recipes');
	};

	render() {
		return (
			<div>
				<h2>Add New Recipe</h2>
				<RecipeForm newRecipe={this.newRecipe} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({ newRecipe: (recipe) => dispatch(addRecipe(recipe)) });

export default connect(undefined, mapDispatchToProps)(AddRecipe);
