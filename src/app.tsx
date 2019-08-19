import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes/routes';
import Header from './components/Header';
import store from './stores/configureStore';
import './styles/style.scss';

const Layout = () => (
	<div>
		<BrowserRouter>
			<Header />
			<div className="container">{routes()}</div>
		</BrowserRouter>
		{console.log(store.getState())}
	</div>
);

ReactDOM.render(<Layout />, document.getElementById('app'));
