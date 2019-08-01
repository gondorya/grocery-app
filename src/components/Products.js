import Product from './atoms/Product';
const Products = (props) => (
	<ul>
		{props.products.map((product) => (
			<Product key={product.name} name={product.name} unit={product.unit} amount={product.amount} />
		))}
	</ul>
);

export default Products;
