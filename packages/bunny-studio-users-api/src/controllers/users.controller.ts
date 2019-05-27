import { Request, Response } from 'express';
import { from } from 'rxjs';
import User from '../models/User';

/**
 * @param  {Request} {body}
 * @param  {Response} response
 * @description this function uses the repository feature from typeorm
 * and creates an object instance for the entity. It hashes the password
 * with bcrypt and creates an admonition type in the database
 * @author Juan Roa
 */
export async function createUser(
	{ body }: Request,
	response: Response,
) {
	const userInstance = new User({ ...body });

	const observable = from(userInstance.save());
	observable.subscribe(
		(createdUser) => {
			response.send(createdUser);
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
export async function getUsers(
	request: Request,
	response: Response,
) {

	const observable = from(User.find());
	observable.subscribe(
		(createdUser) => {
			response.send(createdUser);
		},
		(error: Error) => {
			console.log(error);
			response.status(422).send({ error: error.message });
		},
	);
}
