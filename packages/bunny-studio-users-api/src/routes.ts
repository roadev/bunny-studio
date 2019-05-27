import {
	createUser, getUsers, updateUser, deleteUser
} from './controllers/users.controller';

export default [
	{
		path: '/api/v1/users',
		method: 'post',
		action: createUser,
	},
	{
		path: '/api/v1/users',
		method: 'get',
		action: getUsers,
	},
	{
		path: '/api/v1/users/:id',
		method: 'patch',
		action: updateUser,
	},
	{
		path: '/api/v1/users/:id',
		method: 'delete',
		action: deleteUser,
	},
];
