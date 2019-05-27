import React from 'react';
import UsersList from "./UsersList";
import UsersForm from './UsersForm';

const Users = (): JSX.Element => (
	<div>
		<UsersList />
		<UsersForm />
	</div>
);

export default Users;
