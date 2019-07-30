import Button from './atoms/Button';

const AddProduct = () => (
	<form>
		<input type="text" name="product" placeholder="new product" />
		<Button className="btn--submit" text="Add new product" type="submit" />
	</form>
);

export default AddProduct;
