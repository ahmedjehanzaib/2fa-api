import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceAccidentStateFacade } from './facade';


export function practiceAccidentStateRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_accident_states/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practiceAccidentStateFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice accident state has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_accident_states' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice accident state!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_accident_states' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice accident state!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {
				const data = await practiceAccidentStateFacade.findByPracticeId(req.params.practice_id);
				res.status(200).json({ data, error: null, message: 'practice accident states fetched successfully!' });
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_accident_states/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice accident states!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_accident_states/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice accident states!' });
		}
	});

	// GET /api/v1/practice_accident_states/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practiceAccidentStateFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice accident state does not exist!', statusCode: 404, detail: 'practice accident state does not exist!', repo: 'aquila-api', path: '/api/v1/practice_accident_states/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice accident state does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice accident state fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_accident_states/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice accident state!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_accident_states/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice accident state!' });
		}
	});

	// DELETE /api/v1/practice_accident_states/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceAccidentStateFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice accident state does not exist!', statusCode: 404, detail: 'practice accident state does not exist!', repo: 'aquila-api', path: '/api/v1/practice_accident_states/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice accident state does not exist!' });
				} else {
					const [data] = await practiceAccidentStateFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice accident state deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dstateetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_accident_states/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice accident state!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_accident_states/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice accident state!' });
		}
	});

	// PUT /api/v1/practice_accident_states/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceAccidentStateFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice accident state does not exist!', statusCode: 404, detail: 'practice accident state does not exist!', repo: 'aquila-api', path: '/api/v1/practice_accident_states/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice accident state does not exist!' });
				} else {
					const data = await practiceAccidentStateFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice accident state updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_accident_states/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice accident state!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_accident_states/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice accident state!' });
		}
	});

	return router;
};