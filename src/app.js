import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import ClearList from './components/ClearList';

class App extends React.Component {
	state = {
		products: []
	};

	componentDidMount() {
		const data = JSON.parse(localStorage.getItem('products'));

		this.setState(() => ({
			products: data ? data : []
		}));
	}

	componentDidUpdate() {
		localStorage.setItem('products', JSON.stringify(this.state.products));
	}

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
				<Header />
				<AddProduct
					handleSubmit={this.handleSubmit}
					products={this.state.products}
					updateProducts={this.updateProducts}
				/>
				<ClearList handleClick={this.resetList} />
				<Products
					products={this.state.products}
					updateProducts={this.updateProducts}
					handleDelete={this.deleteProduct}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
