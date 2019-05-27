import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import errorhandler from 'strong-error-handler';
import { connect } from 'mongoose';
import routes from './routes';
const MONGODB_URI =
	process.env.MONGODB_URI || 'mongodb://localhost/bunnyStudioTasksDB';
	connect(
		MONGODB_URI,
			{
				useNewUrlParser: true,
				useCreateIndex: true,
			}
		).then(() => {
			const app = express();
			app.use(bodyParser.urlencoded({ extended: false }));
			app.use(bodyParser.json());
			app.use(cors());
			app.use(errorhandler({
				debug: process.env.ENV !== 'prod',
				log: true,
			}));

			routes.forEach((route) => {
				app[route.method](
					route.path,
					(request: Request, response: Response, next: NextFunction) => {
						route
							.action(request, response)
							.then(() => next)
							.catch(error => next(error));
					},
				);
			});
			app.listen(process.env.APP_PORT || 5000);
		});

