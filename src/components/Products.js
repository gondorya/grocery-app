import Product from './atoms/Product';
const Products = (props) => <ul>{props.products.map((product) => <Product key={product} name={product} />)}</ul>;

export default Products;
