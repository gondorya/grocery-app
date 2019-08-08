import React from 'react';
import Product from './atoms/Product';

const Products = (props) => (
	<ul className="productList">
		{props.products.map((product) => (
			<Product
				key={product.name}
				name={product.name}
				unit={product.unit}
				amount={product.amount}
				isBuyed={product.isBuyed}
				updateProducts={props.updateProducts}
				products={props.products}
			/>
		))}
	</ul>
);

export default Products;
