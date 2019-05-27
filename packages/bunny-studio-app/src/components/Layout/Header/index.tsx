import React from 'react';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import { Menubar } from 'primereact/menubar';

interface Items {
	label: string;
	icon: string;
	command?: () => void;
}

interface Props {
	history: History;
};

const items = (history: History): Items[] => [
	{
		label: 'Users',
		icon: 'pi pi-fw pi-users',
		command: (): void => history.push('/users')
	},
	{
		label: 'Tasks',
		icon: 'pi pi-fw pi-check',
		command: (): void => history.push('/tasks')
	}
];


const Header = ({ history }: Props): JSX.Element => (
	<Menubar model={items(history)}/>
);

export default withRouter(Header);
