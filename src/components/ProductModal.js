import React from 'react';
import Modal from 'react-modal';

class ProductModal extends React.Component {
	constructor(props) {
		super(props);
	}

	sendValue = (e) => {
		e.preventDefault();
		this.props.answer(e.target.value === 'yes', this.props.productToCheck);
	};

	render() {
		return (
			<Modal isOpen={this.props.isOpen} contentLabel="Product Exist" className="popup">
        <h3 className="popup__header">Ups!</h3>
				<p>This product already exist. Do you want to change this product?</p>
				<input type="button" className="btn btn--error" value="no" onClick={this.sendValue} />
				<input type="button" className="btn btn--primary" value="yes" onClick={this.sendValue} />
			</Modal>
		);
	}
}

export default ProductModal;
