import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Recipe = (props) => (
	<div>
		<h2>Post {props.recipe.title}</h2>
		<p>published at {props.recipe.date}</p>
		<Link to={`/recipes/edit/${props.match.params.id}`}>Edit</Link>
		<p>{props.recipe.description}</p>
		<img src={props.recipe.img} alt={props.recipe.title} />
		<ul>{props.recipe.ingredients.map((ingredient) => <li>{ingredient}</li>)}</ul>
		<ol>{props.recipe.steps.map((step) => <li>{step}</li>)}</ol>
	</div>
);

const mapStateToProps = (state, props) => {
	return {
		recipe: state.recipes.find((recipe) => recipe.id === props.match.params.id)
	};
};

export default connect(mapStateToProps)(Recipe);
