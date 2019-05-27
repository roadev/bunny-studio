import React from 'react';
import UsersList from "./UsersList";
import UsersForm from './UsersForm';

const Users = (): JSX.Element => (
	<section style={{ marginTop: '2rem' }}>
		<UsersList />
		<UsersForm />
	</section>
);

export default Users;
