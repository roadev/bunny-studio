import {
	createUser, getUsers
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
];
