import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import ClearList from './components/ClearList';

const products = [ 'tomat', 'potato' ];

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<AddProduct />
				<ClearList />
				<Products products={products} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
