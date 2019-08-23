import React from 'react';
import { Link } from 'react-router-dom';

const RecipeListItem = ({ id, title, img, description }) => (
	<li className="recipeList__item">
		<img src={img} alt={title} className="recipeList__image" />
		<div className="recipeList__text">
			<Link to={`recipes/recipe/${id}`}>
				<h3 className="recipeList__title">{title}</h3>
			</Link>
			<p className="recipeList__description">{description}</p>
		</div>
	</li>
);

export default RecipeListItem;
