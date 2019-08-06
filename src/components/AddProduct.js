import Button from './atoms/Button';

class AddProduct extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			alreadyExist: false,
			error: undefined
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const name = e.target.elements.product.value.trim();
		const amount = e.target.elements.amount.value.trim();
		const unit = e.target.elements.unit.value.trim();
		const isBuyed = false;
		const product = { name, amount, unit, isBuyed };
		let error = false;
		if (!product.name) {
			error = 'Enter valid value';
		} else if (this.checkIfProductExist(product)) {
			const confirmation = window.confirm('Already exist');
			if (confirmation) {
				this.updateProduct(product);
			} else {
				error = 'Change your product name';
			}
		} else {
			this.props.handleSubmit(product);
			e.target.elements.product.value = '';
		}

		this.setState(() => ({
			error
		}));
	};

	checkIfProductExist(newProduct) {
		const productName = newProduct.name.toLowerCase();
		let exist = false;
		this.props.products.map((product) => {
			if (product.name.toLowerCase() === productName) {
				exist = true;
			}
		});
		return exist;
	}

	updateProduct(newProduct) {
		let product;
		const list = this.props.products;
		for (product in list) {
			list[product] = newProduct;
		}
		this.props.updateProducts(list);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{this.state.error && <p>{this.state.error}</p>}
				<input type="text" name="product" placeholder="new product" />
				<input type="number" name="amount" placeholder="1" defaultValue="1" min="0" />
				<select name="unit">
					<option>each</option>
					<option>liters</option>
					<option>gramms</option>
				</select>
				<Button className="btn--submit" text="Add new product" type="submit" />
			</form>
		);
	}
}
export default AddProduct;
