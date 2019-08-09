import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import GroceryApp from './components/GroceryApp';
import './styles/style.scss';

const Layout = (props) => (
	<div>
		<Header />
		<div className="container">{props.children}</div>
	</div>
);

ReactDOM.render(
	<Layout>
		<GroceryApp />
	</Layout>,
	document.getElementById('app')
);
