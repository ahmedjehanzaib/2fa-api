import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practicesFacade } from './facade';

/**
 * Clients Router
 */
export function practicesRouter(): Router {
	const router = Router();

	// POST /api/v1/practices/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPractice);
			if (validated.error === null) {
				const [practice] = await practicesFacade.createAPractice({
					id: uuidv4(),
					...req.body,
					location: {
						id: uuidv4(),
						...req.body.location
					}
				})

				res.status(200).json({ data: practice, error: null, message: 'Practice has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practices/' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practices/' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice!' });
		}
	})
	router.get('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			// const validated = JOI.validate({ params: req.params }, validationSchema.findPractice);
			// if (validated.error === null) {
				const practices = await practicesFacade.findPracticeById(req.params.id);
				if (!practices.length) {
					log.warn({ message: 'Practices does not exist!', statusCode: 404, detail: 'Practices do not exist!', repo: 'aquila-api', path: '/api/v1/practices' });
					res.status(404).json({ data: null, error: true, message: 'Practices do not exist!' });
				} else {
					res.status(200).json({ data: practices, error: null, message: 'practices fetched successfully!' });
				}
			// } else {
			// 	log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practices/:id' });
			// 	res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			// }
		} catch (err) {
			log.error({ message: 'Error in finding practices!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practices' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding practices!' });
		}
	});

	// GET /api/v1/practices/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPractice);
			if (validated.error === null) {
				const practice = await practicesFacade.findPracticeById(req.params.id);
				if (!practice.length) {
					log.warn({ message: 'Practice does not exist!', statusCode: 404, detail: 'Practice does not exist!', repo: 'aquila-api', path: '/api/v1/practices/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice does not exist!' });
				} else {
					res.status(200).json({ data: practice[0], error: null, message: 'practice fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practices/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a client!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practices/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a client!' });
		}
	});

	// DELETE /api/v1/practices/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPractice);
			if (validated.error === null) {
				const practice = await practicesFacade.findPracticeById(req.params.id);
				if (!practice.length) {
					log.warn({ message: 'Pracrice does not exist!', statusCode: 404, detail: 'Pracrice does not exist!', repo: 'aquila-api', path: '/api/v1/practices/:id' });
					res.status(404).json({ data: null, error: true, message: 'Pracrice does not exist!' });
				} else {
					const deletedPractice = await practicesFacade.deletePracticeById(req.params.id);
					res.status(200).json({ data: deletedPractice, error: null, message: 'Practice deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practices/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practices/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice!' });
		}
	});

	// PUT /api/v1/practices/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPractice);
			if (validated.error === null) {
				const practice = await practicesFacade.findPracticeById(req.params.id);
				if (!practice.length) {
					log.warn({ message: 'Practice does not exist!', statusCode: 404, detail: 'Practice does not exist!', repo: 'aquila-api', path: '/api/v1/practices/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice does not exist!' });
				} else {
					const updatedPracticeInfo = await practicesFacade.updatePracticeById(req.params.id, req.body);
					res.status(200).json({ data: updatedPracticeInfo[0], error: null, message: 'practice updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practices/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practices/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice!' });
		}
	});

	return router;
};