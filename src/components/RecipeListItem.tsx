import React from 'react';
import { Link } from 'react-router-dom';

const RecipeListItem = ({ id, title, img, description }) => (
	<li>
		<Link to={`recipes/recipe/${id}`}>
			<h3>{title}</h3>
		</Link>
		<img src={img} alt={title} />
		<p>{description}</p>
	</li>
);

export default RecipeListItem;
