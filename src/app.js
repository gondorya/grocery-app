import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import ClearList from './components/ClearList';

class App extends React.Component {
	state = {
		products: []
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const value = e.target.elements.product.value.trim();
		if (value) {
			this.setState((prevState) => ({
				products: prevState.products.concat(value)
			}));
			e.target.elements.product.value = [];
		}
	};

	resetList = (e) => {
		e.preventDefault;
		this.setState(() => ({
			products: []
		}));
	};

	deleteProduct = (e) => {
		e.preventDefault();
		console.log(e.target);
	};

	render() {
		return (
			<div>
				<Header />
				<AddProduct handleSubmit={this.handleSubmit} />
				<ClearList handleClick={this.resetList} />
				<Products products={this.state.products} deleteProduct={this.deleteProduct} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
