import React from 'react';
import Navigation from './Navigation';

const Header = (props) => (
	<header className="header">
		<h1 className="header__title">{props.appTitle}</h1>
		<Navigation />
	</header>
);

Header.defaultProps = {
	appTitle: 'Grocery app'
};

export default Header;
