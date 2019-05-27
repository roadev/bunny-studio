import {
	createTask
} from './controllers/tasks.controller';

export default [
	{
		path: '/api/v1/tasks',
		method: 'post',
		action: createTask,
	}
];
