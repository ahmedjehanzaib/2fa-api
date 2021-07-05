import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceAccidentTypeFacade } from './facade';


export function practiceAccidentTypeRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_accident_types/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practiceAccidentTypeFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice accident type has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_accident_types' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice accident type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_accident_types' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice accident type!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {
				const data = await practiceAccidentTypeFacade.findByPracticeId(req.params.practice_id);
				res.status(200).json({ data, error: null, message: 'practice accident types fetched successfully!' });
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_accident_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice accident types!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_accident_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice accident types!' });
		}
	});

	// GET /api/v1/practice_accident_types/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practiceAccidentTypeFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice accident type does not exist!', statusCode: 404, detail: 'practice accident type does not exist!', repo: 'aquila-api', path: '/api/v1/practice_accident_types/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice accident type does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice accident type fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_accident_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice accident type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_accident_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice accident type!' });
		}
	});

	// DELETE /api/v1/practice_accident_types/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceAccidentTypeFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice accident type does not exist!', statusCode: 404, detail: 'practice accident type does not exist!', repo: 'aquila-api', path: '/api/v1/practice_accident_types/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice accident type does not exist!' });
				} else {
					const [data] = await practiceAccidentTypeFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice accident type deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_accident_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice accident type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_accident_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice accident type!' });
		}
	});

	// PUT /api/v1/practice_accident_types/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceAccidentTypeFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice accident type does not exist!', statusCode: 404, detail: 'practice accident type does not exist!', repo: 'aquila-api', path: '/api/v1/practice_accident_types/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice accident type does not exist!' });
				} else {
					const data = await practiceAccidentTypeFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice accident type updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_accident_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice accident type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_accident_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice accident type!' });
		}
	});

	return router;
};