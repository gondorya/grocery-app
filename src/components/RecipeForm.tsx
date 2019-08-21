import React from 'react';
import NewStep from './atoms/NewStep';
import Button from './atoms/Button';

type Props = {
	stepsInputs: Array<string>;
	title: string;
	description: string;
	img: string;
	date: number;
	error: boolean | string;
	steps: Array<string>;
};

class RecipeForm extends React.Component<{ newRecipe: any }, Props> {
	constructor(props) {
		super(props);
	}

	state = {
		stepsInputs: [ 'step-0' ],
		title: '',
		description: '',
		img: '',
		date: 0,
		error: false,
		steps: []
	};

	addNewStep = () => {
		const keyValue = `step-${this.state.stepsInputs.length}`;
		this.setState((prevState) => ({
			stepsInputs: prevState.stepsInputs.concat([ keyValue ])
		}));
	};

	removeStep = (stepName) => {
		const result = this.state.stepsInputs.filter((step) => {
			return step !== stepName;
		});

		this.setState(() => ({
			stepsInputs: result
		}));
	};

	submitHandler = (e) => {
		e.preventDefault();
		this.setState(() => ({ error: false }));
		this.props.newRecipe({
			title: this.state.title,
			description: this.state.description,
			img: this.state.img,
			steps: this.state.steps
		});
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

	render() {
		return (
			<div>
				<h2>Add New Recipe</h2>
				<form className="form" onSubmit={this.submitHandler}>
					<label>
						Title
						<input
							type="text"
							name="title"
							className="form__input form__input--big"
							onChange={this.onTitleChange}
						/>
					</label>
					<label>
						Description
						<textarea name="description" className="form__input form__input--big" />
					</label>
					<label>
						Photo
						<input type="file" name="photo" className="form__input" />
					</label>
					<div className="form__group">
						{this.state.stepsInputs.map((step, index) => (
							<NewStep
								key={step}
								value={step}
								buttonHandler={this.removeStep}
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
