import {
	createTask, getTasks, updateTask, deleteTask
} from './controllers/tasks.controller';

export default [
	{
		path: '/api/v1/tasks',
		method: 'post',
		action: createTask,
	},
	{
		path: '/api/v1/tasks',
		method: 'get',
		action: getTasks,
	},
	{
		path: '/api/v1/tasks/:id',
		method: 'patch',
		action: updateTask,
	},
	{
		path: '/api/v1/tasks/:id',
		method: 'delete',
		action: deleteTask,
	},
];
