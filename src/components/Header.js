const Header = (props) => (
	<header>
		<h1>{props.appTitle}</h1>
	</header>
);

Header.defaultProps = {
	appTitle: 'Grocery app'
};

export default Header;
