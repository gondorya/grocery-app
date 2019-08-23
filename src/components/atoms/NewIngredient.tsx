import React from 'react';

interface Props {
	value: string;
	index: number;
	buttonHandler: (stepName: any) => void;
	onChange: (e: any) => void;
}

class NewIngredient extends React.Component<Props> {
	constructor(props) {
		super(props);
	}

	removeIngredient = (e) => {
		e.preventDefault();
		this.props.buttonHandler(this.props.value);
	};

	render() {
		return (
			<div>
				<label>
					{`${this.props.index + 1}. `} Ingredient description
					<input
						type="text"
						className="form__input form__input--withButton"
						name="step[]"
						onChange={this.props.onChange}
						value={this.props.value}
					/>
				</label>
				<button className="btn btn--error" onClick={this.removeIngredient}>
					Remove
				</button>
			</div>
		);
	}
}

export default NewIngredient;
