class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buyed: false
		};
	}

	handleBuy = (e) => {
		e.preventDefault();
		this.setState(() => ({
			buyed: true
		}));
	};

	handleDelete = (e) => {
		e.preventDefault();
		const result = this.props.products.filter((product) => {
			return product.name !== this.props.name;
		});

		this.props.updateProducts(result);
	};

	render() {
		return (
			<li>
				{this.props.name}
				<span>
					{this.props.amount} {this.props.unit}
				</span>
				<button onClick={this.handleBuy}>{this.state.buyed ? '+' : '-'}</button>
				<button onClick={this.handleDelete}>hjjj</button>
			</li>
		);
	}
}

export default Product;
