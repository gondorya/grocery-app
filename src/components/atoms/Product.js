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

	render() {
		return (
			<li>
				{this.props.name}
				<span>
					{this.props.amount} {this.props.unit}
				</span>
				<button onClick={this.handleBuy}>{this.state.buyed ? '+' : 'x'}</button>
			</li>
		);
	}
}

export default Product;
