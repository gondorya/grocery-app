import React from 'react';

class Product extends React.Component {
	constructor(props) {
		super(props);
	}
	isBuyed = this.props.isBuyed;

	handleBuy = (e) => {
		e.preventDefault();
		const list = this.props.products;

		list.map((product) => {
			if (this.props.name === product.name) {
				product['isBuyed'] = !this.isBuyed;
				this.isBuyed = !this.isBuyed;
			}
		});

		this.props.updateProducts(list);
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
				<button onClick={this.handleBuy}>{this.isBuyed ? '+' : '-'}</button>
				<button onClick={this.handleDelete}>Remove product</button>
			</li>
		);
	}
}

export default Product;
