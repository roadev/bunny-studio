import { Request, Response } from 'express';
import { from } from 'rxjs';
import Task from '../models/Task';

/**
 * @param  {Request} {body}
 * @param  {Response} response
 * @description this function uses the repository feature from typeorm
 * and creates an object instance for the entity. It hashes the password
 * with bcrypt and creates an admonition type in the database
 * @author Juan Roa
 */
export async function createTask(
	request: Request,
	response: Response,
) {
		const taskInstance = new Task({ ...request.body });

		const observable = from(taskInstance.save());
		observable.subscribe(
			(createdTask) => {
				response.send(createdTask);
			},
			(error: Error) => {
				console.log(error);
				response.status(422).send({ error: error.message });
			},
		);
	}

/**
 * @param  {Request} {body}
 * @param  {Response} response
 * @description this function uses the repository feature from typeorm
 * and creates an object instance for the entity. It hashes the password
 * with bcrypt and creates an admonition type in the database
 * @author Juan Roa
 */
export async function getTasks(
	{ query }: Request,
	response: Response,
) {

	const queryParams = query.user_id ? { user_id: query.user_id } : {};
	console.log('queryParams', queryParams);

	const observable = from(Task.find({ ...queryParams }));
	observable.subscribe(
		(tasks) => {
			response.send(tasks);
		},
		(error: Error) => {
			console.log(error);
			response.status(422).send({ error: error.message });
		},
	);
}

/**
 * @param  {Request} {body}
 * @param  {Response} response
 * @description this function uses the repository feature from typeorm
 * and creates an object instance for the entity. It hashes the password
 * with bcrypt and creates an admonition type in the database
 * @author Juan Roa
 */
export async function updateTask(
	{ body, params }: Request,
	response: Response,
) {

	const observable = from(Task.update({ id: params.id }, { ...body }));
	observable.subscribe(
		(updatedTask) => {
			response.send(updatedTask);
		},
		(error: Error) => {
			console.log(error);
			response.status(422).send({ error: error.message });
		},
	);
}

/**
 * @param  {Request} {body}
 * @param  {Response} response
 * @description this function uses the repository feature from typeorm
 * and creates an object instance for the entity. It hashes the password
 * with bcrypt and creates an admonition type in the database
 * @author Juan Roa
 */
export async function deleteTask(
	{ params }: Request,
	response: Response,
) {

	const observable = from(Task.deleteOne(params));
	observable.subscribe(
		(deletedTask) => {
			response.send(deletedTask);
		},
		(error: Error) => {
			console.log(error);
			response.status(422).send({ error: error.message });
		},
	);
}
