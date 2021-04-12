import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { usersFacade } from './facade';

/**
 * Clients Router
 */
export function userRouters(): Router {
	const router = Router();

	// POST /api/v1/s/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAUser);
			if (validated.error === null) {
                const user = await usersFacade.create({
                    id: uuidv4(),
					...req.body
                })

                res.status(200).json({ data: user[0], error: null, message: 'user has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/users/' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new user!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/users/' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new user!' });
		}
	});

	router.get('/',  async (_req: Request, res: Response, _next: NextFunction) => {
		try {
			
				const users = await usersFacade.findAll();
				if (!users.length) {
					log.warn({ message: 'Users do not exist!', statusCode: 404, detail: 'Users do not exist!', repo: 'aquila-api', path: '/api/v1/users' });
					res.status(404).json({ data: null, error: true, message: 'Users do not exist!' });
				} else {
					res.status(200).json({ data: users, error: null, message: 'Users fetched successfully!' });
				}
	
		} catch (err) {
			log.error({ message: 'Error in finding a users!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/users' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a users!' });
		}
    });

    // GET /api/v1/s/:id
	router.get('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAUser);
			if (validated.error === null) {
				const user = await usersFacade.findById(req.params.id);
				if (!user.length) {
					log.warn({ message: 'User does not exist!', statusCode: 404, detail: 'User does not exist!', repo: 'aquila-api', path: '/api/v1/users/:id' });
					res.status(404).json({ data: null, error: true, message: 'User does not exist!' });
				} else {
					res.status(200).json({ data: user[0], error: null, message: 'User fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/users/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a user!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/users/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a user!' });
		}
    });

	// DELETE /api/v1/s/:id
	router.delete('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAUser);

			if (validated.error === null) {
				const user = await usersFacade.findById(req.params.id);
				if (!user.length) {
					log.warn({ message: 'User does not exist!', statusCode: 404, detail: 'User does not exist!', repo: 'aquila-api', path: '/api/v1/users/:id' });
					res.status(404).json({ data: null, error: true, message: 'User does not exist!' });
				} else {
					const deletedLocation = await usersFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedLocation, error: null, message: ' user deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/users/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a user!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/users/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a user!' });
		}
    });

	// PUT /api/v1/s/:id
	router.put('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAUser);

			if (validated.error === null) {
				const user = await usersFacade.findById(req.params.id);
				if (!user.length) {
					log.warn({ message: 'User does not exist!', statusCode: 404, detail: 'User does not exist!', repo: 'aquila-api', path: '/api/v1/users/:id' });
					res.status(404).json({ data: null, error: true, message: 'User does not exist!' });
				} else {
					const updatedUserInfo = await usersFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedUserInfo[0], error: null, message: 'User updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/users/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a user!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/users/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a user!' });
		}
	});

	return router;
};