import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceClassFacade } from './facade';


export function practiceClassRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_classes/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practiceClassFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice class has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_classes' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice class!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_classes' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice class!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {
				const data = await practiceClassFacade.findByPracticeId(req.params.practice_id);
				res.status(200).json({ data, error: null, message: 'practice classes fetched successfully!' });
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_classes/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice classes!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_classes/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice classes!' });
		}
	});

	// GET /api/v1/practice_classes/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practiceClassFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice class does not exist!', statusCode: 404, detail: 'practice class does not exist!', repo: 'aquila-api', path: '/api/v1/practice_classes/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice class does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice class fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_classes/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice class!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_classes/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice class!' });
		}
	});

	// DELETE /api/v1/practice_classes/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceClassFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice class does not exist!', statusCode: 404, detail: 'practice class does not exist!', repo: 'aquila-api', path: '/api/v1/practice_classes/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice class does not exist!' });
				} else {
					const [data] = await practiceClassFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice class deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_classes/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice class!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_classes/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice class!' });
		}
	});

	// PUT /api/v1/practice_classes/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceClassFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice class does not exist!', statusCode: 404, detail: 'practice class does not exist!', repo: 'aquila-api', path: '/api/v1/practice_classes/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice class does not exist!' });
				} else {
					const data = await practiceClassFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice class updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_classes/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice class!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_classes/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice class!' });
		}
	});

	return router;
};