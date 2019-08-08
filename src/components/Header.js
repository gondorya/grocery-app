import React from 'react';

const Header = (props) => (
	<header className="header">
		<h1 className="header__title">{props.appTitle}</h1>
	</header>
);

Header.defaultProps = {
	appTitle: 'Grocery app'
};

export default Header;
