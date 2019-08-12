import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
	<div className="navigation">
		<NavLink exact activeClassName="is-active" to="/">
			Home
		</NavLink>
		<NavLink activeClassName="is-active" to="/grocery">
			Shopping List
		</NavLink>
		<NavLink activeClassName="is-active" to="/recipes">
			Cook Book
		</NavLink>
	</div>
);

export default Navigation;
