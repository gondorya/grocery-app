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
			<li className={`productList__item ${this.isBuyed ? 'is-buyed' : ''}`}>
				<p className="productList__data">
					<span className="productList__name">{this.props.name}</span>
					<span className="productList__amount">
						{this.props.amount} {this.props.unit}
					</span>
				</p>
				<button className={`btn btn--primary btn--buyed ${this.isBuyed ? 'is-buyed' : ''}`} onClick={this.handleBuy}>
				</button>
				<button className="btn btn--error" onClick={this.handleDelete}>
					Remove product
				</button>
			</li>
		);
	}
}

export default Product;
