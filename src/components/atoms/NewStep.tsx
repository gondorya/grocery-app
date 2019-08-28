import React from 'react';

// interface Props {
// 	value: string;
// 	buttonHandler: (stepName: any) => void;
// 	onChange: (e: any) => void;
// }

class NewStep extends React.Component {
	constructor(props) {
		super(props);
	}

	removeStep = (e) => {
		e.preventDefault();
		this.props.buttonHandler(this.props.value);
	};

	render() {
		return (
			<div>
				<label>
					Step description
					<textarea
						className="form__input form__input--withButton"
						name="step[]"
						onChange={this.props.onChange}
						value={this.props.value}
					/>
				</label>
				<button className="btn btn--error" onClick={this.removeStep}>
					Remove
				</button>
			</div>
		);
	}
}

export default NewStep;
