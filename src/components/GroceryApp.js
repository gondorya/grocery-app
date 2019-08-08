import React from 'react';
import Products from './Products';
import AddProduct from './AddProduct';
import ClearList from './ClearList';

class GroceryApp extends React.Component {
	state = {
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

	handleSubmit = (newProduct) => {
		this.setState((prevState) => ({
			products: prevState.products.concat(newProduct)
		}));
	};

	updateProducts = (newList) => {
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
					changeModalState={this.changeModalState}
				/>
				<Products
					products={this.state.products}
					updateProducts={this.updateProducts}
					handleDelete={this.deleteProduct}
				/>
        <ClearList handleClick={this.resetList} />
			</div>
		);
	}
}

export default GroceryApp;
