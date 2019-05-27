import {
	createUser
} from './controllers/users.controller';

export default [
	{
		path: '/api/v1/users',
		method: 'post',
		action: createUser,
	}
];
