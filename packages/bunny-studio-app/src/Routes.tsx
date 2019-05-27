import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Users from './pages/Users';
import NotFound from './pages/NotFound';

export default function Routes(): JSX.Element {
	return (
		<Router>
			<Layout>
				<Route exact path="/" component={Home} />
				<Route exact path="/users" component={Users} />
				<Route component={NotFound} />
			</Layout>
		</Router>
	);
}
