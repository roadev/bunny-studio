import React, { ReactNode } from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Header from './Header';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => (
	<header>
		<Header />
		{children}
	</header>
);

export default Layout;
