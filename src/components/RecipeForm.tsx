import React from 'react';
import NewStep from './atoms/NewStep';
import NewIngredient from './atoms/NewIngredient';
import Button from './atoms/Button';
import moment from 'moment';

type State = {
	title: string;
	description: string;
	img: string;
	date: number;
	error: boolean | string;
	steps: Array<string>;
	ingredients: Array<string>;
};

class RecipeForm extends React.Component<{ newRecipe: any; recipe?: object }, State> {
	constructor(props) {
		super(props);

		this.state = {
			title: props.recipe ? props.recipe.title : '',
			description: props.recipe ? props.recipe.description : '',
			img: props.recipe ? props.recipe.img : '',
			date: props.recipe ? props.recipe.date : moment().format('DD MMM YY'),
			error: false,
			steps: props.recipe ? props.recipe.steps : [ '' ],
			ingredients: props.recipe ? props.recipe.ingredients : [ '' ]
		};
		console.log(props);
	}

	addNewStep = () => {
		this.setState((prevState) => ({
			steps: prevState.steps.concat([ '' ])
		}));
	};

	addNewIngredient = () => {
		this.setState((prevState) => ({
			ingredients: prevState.ingredients.concat([ '' ])
		}));
	};

	removeStep = (stepName) => {
		const result = this.state.steps.filter((step) => {
			return step !== stepName;
		});

		this.setState(() => ({
			steps: result
		}));
	};

	removeIngredient = (ingredientName) => {
		const result = this.state.ingredients.filter((ingredient) => {
			return ingredient !== ingredientName;
		});

		this.setState(() => ({
			ingredients: result
		}));
	};

	submitHandler = (e) => {
		e.preventDefault();
		if (!this.state.title) {
			return this.setState(() => ({ error: 'Title is required' }));
		} else if (!this.state.ingredients.length) {
			return this.setState(() => ({ error: 'Please add at least one ingredient' }));
		} else if (!this.state.steps.length) {
			return this.setState(() => ({ error: 'Please add at least one step' }));
		} else {
			this.setState(() => ({ error: false }));
			this.props.newRecipe({
				title: this.state.title,
				description: this.state.description,
				img: this.state.img,
				steps: this.state.steps,
				date: moment().format('DD MMM YY')
			});
		}
	};

	onTitleChange = (e) => {
		const title = e.target.value;
		this.setState(() => ({ title }));
	};

	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	};

	onImgChange = (e) => {
		const img = e.target.value;
		this.setState(() => ({ img }));
	};

	onStepChange = (index, value) => {
		this.setState((prevState) => {
			const list = prevState.steps;
			list[index] = value;
			return {
				steps: list
			};
		});
	};

	onIngredientChange = (index, value) => {
		this.setState((prevState) => {
			const list = prevState.ingredients;
			list[index] = value;
			return {
				ingredients: list
			};
		});
	};

	render() {
		return (
			<div>
				<form className="form" onSubmit={this.submitHandler}>
					{this.state.error && <p className="form__error">{this.state.error}</p>}
					<label>
						Title
						<input
							type="text"
							name="title"
							className="form__input form__input--big"
							onChange={this.onTitleChange}
							value={this.state.title}
						/>
					</label>
					<label>
						Description
						<textarea
							name="description"
							className="form__input form__input--big"
							onChange={this.onDescriptionChange}
							value={this.state.description}
						/>
					</label>
					<label>
						Photo
						<input type="file" name="photo" className="form__input" onChange={this.onImgChange} />
					</label>
					<div className="form__group">
						{this.state.ingredients.map((ingredient, index) => (
							<NewIngredient
								key={index}
								value={ingredient}
								index={index}
								buttonHandler={this.removeIngredient}
								onChange={(e) => this.onIngredientChange(index, e.target.value)}
							/>
						))}
						<Button
							text="Add New Ingredient"
							type="button"
							className="btn--primary"
							onClick={this.addNewIngredient}
						/>
					</div>
					<div className="form__group">
						{this.state.steps.map((step, index) => (
							<NewStep
								key={index}
								value={step}
								buttonHandler={this.removeIngredient}
								onChange={(e) => this.onStepChange(index, e.target.value)}
							/>
						))}
						<Button text="Add New Step" type="button" className="btn--primary" onClick={this.addNewStep} />
					</div>
					<button type="submit" className="btn btn--big btn--submit">
						Create New Recipe
					</button>
				</form>
			</div>
		);
	}
}

export default RecipeForm;
