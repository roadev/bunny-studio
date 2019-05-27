import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import UsersList from './';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Router>
			<UsersList />
		</Router>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
