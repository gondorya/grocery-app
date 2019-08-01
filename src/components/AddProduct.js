import Button from './atoms/Button';

class AddProduct extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			alreadyExist: false
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const name = e.target.elements.product.value.trim();
		const amount = e.target.elements.amount.value.trim();
		const unit = e.target.elements.unit.value.trim();
		const product = { name, amount, unit };
		if (!product.name) {
			alert('Add product name');
		} else if (this.checkIfProductExist(product) === true) {
			const confirmation = window.confirm('Already exist');
			if (confirmation) {
				this.updateProduct(product);
				e.target.elements.product.value = '';
			}
		} else {
			this.props.handleSubmit(product);
			e.target.elements.product.value = '';
		}
	};

	checkIfProductExist = (newProduct) => {
		const productName = newProduct.name.lowerCase;
		let exist = false;
		this.props.products.map((product) => {
			if (product.name.lowerCase === productName) {
				exist = true;
			}
		});
		return exist;
	};

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
