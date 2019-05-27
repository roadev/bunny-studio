import React, { useEffect, useState } from 'react';
// import { ScrollPanel } from 'primereact/scrollpanel';
import { ListBox } from 'primereact/listbox';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import { getUsers } from '../../../services/users';
import { User } from './interfaces';

const UsersList = ({ history }: { history: History }): JSX.Element => {
	const [user, setUser] = useState('');
	const [users, setUsers] = useState([]);
	
	useEffect((): void => {
		if (users.length === 0) {
			getUsers().then((usersData: User[]) => {
				setUsers(usersData.map(u => ({ label: u.name, value: u.id, key: u.id })));
			});
		}
	}, [users]);

	useEffect((): void => {
		if (user !== '') {
			history.push(`/users/${user}/tasks`);
		}
	}, [user]);

	return (
		<section className="p-grid p-justify-center" style={{ marginTop: '2rem' }}>
			<div className="p-col-6">
				<ListBox
					value={user}
					filter={true}
					options={users}
					onChange={(e) => setUser(e.value)}
					// itemTemplate={this.carTemplate}
					style={{ width: '100%' }}
					listStyle={{ maxHeight: '250px' }}
				/>
				{/*<ScrollPanel style={{  height: '200px' }} className="">*/}
				{/*	The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.*/}
				{/*	His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.*/}
				{/*	Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,*/}
				{/*	kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.*/}
				{/*</ScrollPanel>*/}
			</div>

		</section>
	);
};

export default withRouter(UsersList);
