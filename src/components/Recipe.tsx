import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = (props) => (
	<div>
		<h2>Post {props.match.params.id}</h2>
		<Link to={`/recipes/edit/${props.match.params.id}`}>Edit</Link>
	</div>
);

export default Recipe;
