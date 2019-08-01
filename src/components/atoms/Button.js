const Button = (props) => (
	<button className={`btn ${props.className || ''}`} type={props.type || 'button'} onClick={props.onClick}>
		{props.text}
	</button>
);

export default Button;
