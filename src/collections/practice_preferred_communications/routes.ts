import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practicePreferredCommunicationFacade } from './facade';


export function practicePreferredCommunicationRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_preferred_communications/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practicePreferredCommunicationFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice preferred communication has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_preferred_communications' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice preferred communication!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_preferred_communications' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice preferred communication!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {

				const data = await practicePreferredCommunicationFacade.findByPracticeId(req.params.practice_id);

				if (!data.length) {

					log.warn({ message: 'practice preferred communications do not exist!', statusCode: 404, detail: 'practice preferred communications do not exist!', repo: 'aquila-api', path: '/api/v1/practice_preferred_communications/:practice_id' });
					res.status(404).json({ data: null, error: true, message: 'practice preferred communications do not exist!' });

				} else {
					res.status(200).json({ data, error: null, message: 'practice preferred communications fetched successfully!' });
				}
			} else {

				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_preferred_communications/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice preferred communications!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_preferred_communications/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice preferred communications!' });
		}
	});

	// GET /api/v1/practice_preferred_communications/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practicePreferredCommunicationFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice preferred communication does not exist!', statusCode: 404, detail: 'practice preferred communication does not exist!', repo: 'aquila-api', path: '/api/v1/practice_preferred_communications/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice preferred communication does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice preferred communication fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_preferred_communications/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice preferred communication!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_preferred_communications/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice preferred communication!' });
		}
	});

	// DELETE /api/v1/practice_preferred_communications/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practicePreferredCommunicationFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice preferred communication does not exist!', statusCode: 404, detail: 'practice preferred communication does not exist!', repo: 'aquila-api', path: '/api/v1/practice_preferred_communications/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice preferred communication does not exist!' });
				} else {
					const [data] = await practicePreferredCommunicationFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice preferred communication deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_preferred_communications/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice preferred communication!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_preferred_communications/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice preferred communication!' });
		}
	});

	// PUT /api/v1/practice_preferred_communications/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practicePreferredCommunicationFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice preferred communication does not exist!', statusCode: 404, detail: 'practice preferred communication does not exist!', repo: 'aquila-api', path: '/api/v1/practice_preferred_communications/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice preferred communication does not exist!' });
				} else {
					const data = await practicePreferredCommunicationFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice preferred communication updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_preferred_communications/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice preferred communication!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_preferred_communications/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice preferred communication!' });
		}
	});

	return router;
};