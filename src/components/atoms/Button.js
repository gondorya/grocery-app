const Button = (props) => (
	<button className={`btn ${props.className || ''}`} type={props.type || 'button'} onClick={props.clickBinding}>
		{props.text}
	</button>
);

Button.defaultProps = {
	clickBinding: () => {}
};

export default Button;
