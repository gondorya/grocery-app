import React from 'react';
import { Link } from 'react-router-dom';

interface Recipe {
	id: number;
	name: string;
}

class Recipes extends React.Component {
	recipes: Array<Recipe> = [
		{
			id: 33333,
			name: 'Post 1'
		},
		{
			id: 22,
			name: 'Post 2'
		},
		{
			id: 24442,
			name: 'Post 3'
		}
	];

	render() {
		return (
			<div>
				<Link to="/recipes/add-recipe/" className="btn btn--primary">
					Add New
				</Link>
				<ul>
					{this.recipes.map((recipe) => (
						<li key={recipe.id}>
							<Link to={`/recipes/recipe/${recipe.id}`}>{recipe.name}</Link>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Recipes;
