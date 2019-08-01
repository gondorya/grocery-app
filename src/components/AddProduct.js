import Button from './atoms/Button';

const AddProduct = (props) => (
	<form onSubmit={props.handleSubmit}>
		<input type="text" name="product" placeholder="new product" />
		<Button className="btn--submit" text="Add new product" type="submit" />
	</form>
);
export default AddProduct;
