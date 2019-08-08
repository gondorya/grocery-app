import React from 'react';
import Modal from 'react-modal';
import ProductModal from './ProductModal';
import Button from './atoms/Button';

class AddProduct extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		alreadyExist: false,
		error: undefined,
		modalIsOpen: false,
		newProduct: {}
	};

	componentWillMount = () => {
		Modal.setAppElement('body');
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const name = e.target.elements.product.value.trim();
		const amount = e.target.elements.amount.value.trim();
		const unit = e.target.elements.unit.value.trim();
		const isBuyed = false;
		const product = { name, amount, unit, isBuyed };
		
		this.runValidation(product);
	};

	runValidation = (product) => {
		let error = false;
		if (!product.name) {
			return (error = 'Enter valid value');
		} else {
			const ifExist = this.checkIfProductExist(product);
			if (ifExist.exist) {
				this.askAboutUpdate(product);
				e.target.elements.product.value = '';
			} else {
				this.props.handleSubmit(product);
				e.target.elements.product.value = '';
			}
		}

		this.setState(() => ({
			error
		}));
	}

	checkIfProductExist = (newProduct) => {
		const productName = newProduct.name.toLowerCase();
		let exist = false;
		let currentProduct;
		this.props.products.map((product) => {
			if (product.name.toLowerCase() === productName) {
				exist = true;
				currentProduct = product;
			}
		});
		return { exist, currentProduct };
	};

	askAboutUpdate = (product) => {
		this.changeModalState(true, product);
	};

	getAnswerAboutUpdate = (answer, product) => {
		this.changeModalState(false);
		let error = false;
		if (answer) {
			this.updateProduct(product);
		} else {
			error = 'Change your product name';
		}

		this.setState(() => ({
			error
		}));
	};

	changeModalState = (state, product = {}) => {
		this.setState(() => ({
			modalIsOpen: state,
			newProduct: product
		}));
	};

	updateProduct = (newProduct) => {
		let product;
		const list = this.props.products;
		for (product in list) {
			list[product] = newProduct;
		}
		this.props.updateProducts(list);
	};

	render() {
		return (
			<div>
				<ProductModal
					isOpen={this.state.modalIsOpen}
					productToCheck={this.state.newProduct}
					answer={this.getAnswerAboutUpdate}
				/>

				<form onSubmit={this.handleSubmit} className="form">
					{this.state.error && <p className="form__error">{this.state.error}</p>}
					<input type="text" name="product" placeholder="new product" className="form__input form__input--big"/>
					Amount: <input type="number" name="amount" placeholder="1" defaultValue="1" min="0" className="form__input form__input--small" />
					Units: <select name="unit" className="form__select">
						<option>each</option>
						<option>liters</option>
						<option>gramms</option>
					</select>
					<Button className="btn btn--submit" text="Add new product" type="submit" />
				</form>
			</div>
		);
	}
}
export default AddProduct;
