import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceAuthorizationStatusFacade } from './facade';


export function practiceAuthorizationStatusRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_authorization_statuses/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practiceAuthorizationStatusFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice authorization status has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_authorization_statuses' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice authorization status!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_authorization_statuses' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice authorization status!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {
				const data = await practiceAuthorizationStatusFacade.findByPracticeId(req.params.practice_id);
				res.status(200).json({ data, error: null, message: 'practice authorization statuses fetched successfully!' });
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_authorization_statuses/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice authorization statuses!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_authorization_statuses/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice authorization statuses!' });
		}
	});

	// GET /api/v1/practice_authorization_statuses/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practiceAuthorizationStatusFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice authorization status does not exist!', statusCode: 404, detail: 'practice authorization status does not exist!', repo: 'aquila-api', path: '/api/v1/practice_authorization_statuses/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice authorization status does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice authorization status fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_authorization_statuses/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice authorization status!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_authorization_statuses/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice authorization status!' });
		}
	});

	// DELETE /api/v1/practice_authorization_statuses/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceAuthorizationStatusFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice authorization status does not exist!', statusCode: 404, detail: 'practice authorization status does not exist!', repo: 'aquila-api', path: '/api/v1/practice_authorization_statuses/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice authorization status does not exist!' });
				} else {
					const [data] = await practiceAuthorizationStatusFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice authorization status deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_authorization_statuses/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice authorization status!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_authorization_statuses/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice authorization status!' });
		}
	});

	// PUT /api/v1/practice_authorization_statuses/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceAuthorizationStatusFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice authorization status does not exist!', statusCode: 404, detail: 'practice authorization status does not exist!', repo: 'aquila-api', path: '/api/v1/practice_authorization_statuses/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice authorization status does not exist!' });
				} else {
					const data = await practiceAuthorizationStatusFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice authorization status updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_authorization_statuses/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice authorization status!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_authorization_statuses/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice authorization status!' });
		}
	});

	return router;
};