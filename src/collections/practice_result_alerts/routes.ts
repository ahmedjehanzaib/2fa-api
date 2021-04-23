import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceResultAlertFacade } from './facade';


export function practiceResultAlertRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_result_alerts/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practiceResultAlertFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice result alert has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_result_alerts' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice result alert!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_result_alerts' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice result alert!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {

				const data = await practiceResultAlertFacade.findByPracticeId(req.params.practice_id);

				if (!data.length) {

					log.warn({ message: 'practice result alerts do not exist!', statusCode: 404, detail: 'practice result alerts do not exist!', repo: 'aquila-api', path: '/api/v1/practice_result_alerts/:practice_id' });
					res.status(404).json({ data: null, error: true, message: 'practice result alerts do not exist!' });

				} else {
					res.status(200).json({ data, error: null, message: 'practice result alert fetched successfully!' });
				}
			} else {

				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_result_alerts/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice result alerts!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_result_alerts/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice result alerts!' });
		}
	});

	// GET /api/v1/practice_result_alerts/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practiceResultAlertFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice result alert does not exist!', statusCode: 404, detail: 'practice result alert does not exist!', repo: 'aquila-api', path: '/api/v1/practice_result_alerts/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice result alert does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice result alert fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_result_alerts/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice result alert!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_result_alerts/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice result alert!' });
		}
	});

	// DELETE /api/v1/practice_result_alerts/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceResultAlertFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice result alert does not exist!', statusCode: 404, detail: 'practice result alert does not exist!', repo: 'aquila-api', path: '/api/v1/practice_result_alerts/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice result alert does not exist!' });
				} else {
					const [data] = await practiceResultAlertFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice result alert deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_result_alerts/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice result alert!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_result_alerts/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice result alert!' });
		}
	});

	// PUT /api/v1/practice_result_alerts/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceResultAlertFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice result alert does not exist!', statusCode: 404, detail: 'practice result alert does not exist!', repo: 'aquila-api', path: '/api/v1/practice_result_alerts/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice result alert does not exist!' });
				} else {
					const data = await practiceResultAlertFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice result alert updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_result_alerts/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice result alert!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_result_alerts/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice result alert!' });
		}
	});

	return router;
};