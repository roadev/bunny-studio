import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import TasksList from '../TasksForm';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Router>
			<TasksList />
		</Router>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
