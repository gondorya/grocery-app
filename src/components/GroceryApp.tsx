import React from 'react';
import Products from './Products';
import AddProduct from './AddProduct';
import ClearList from './ClearList';

interface State {
	products?: any
}

interface Props {
	updateProducts?: void
}

class GroceryApp extends React.Component<State & Props> {
	state: State = {
		products: []
	};

	componentDidMount = () => {
		const data = JSON.parse(localStorage.getItem('products'));

		this.setState(() => ({
			products: data ? data : []
		}));
	};

	componentDidUpdate = () => {
		localStorage.setItem('products', JSON.stringify(this.state.products));
	};

	handleSubmit: object = (newProduct) => {
		const newList = this.state.products.concat(newProduct);
		console.log(newList);
		this.setState(() => ({
			products: newList
		}));
	};

	updateProducts = (newList) => {
		console.log(newList);
		this.setState(() => ({
			products: newList
		}));
	};

	resetList = (e) => {
		e.preventDefault;
		this.setState(() => ({
			products: []
		}));
	};

	render() {
		return (
			<div>
				<AddProduct
					handleSubmit={this.handleSubmit}
					products={this.state.products}
					updateProducts={this.updateProducts}
				/>
				<Products
					products={this.state.products}
					updateProducts={this.updateProducts}
				/>
        <ClearList handleClick={this.resetList} />
			</div>
		);
	}
}

export default GroceryApp;
