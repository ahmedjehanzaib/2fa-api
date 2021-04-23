import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceSpecimenFacade } from './facade';


export function practiceSpecimenRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_specimen/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practiceSpecimenFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice specimen has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_specimen' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice specimen!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_specimen' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice specimen!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {

				const data = await practiceSpecimenFacade.findByPracticeId(req.params.practice_id);

				if (!data.length) {

					log.warn({ message: 'practice specimen do not exist!', statusCode: 404, detail: 'practice specimen do not exist!', repo: 'aquila-api', path: '/api/v1/practice_specimen/:practice_id' });
					res.status(404).json({ data: null, error: true, message: 'practice specimenes do not exist!' });

				} else {
					res.status(200).json({ data, error: null, message: 'practice specimen fetched successfully!' });
				}
			} else {

				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_specimen/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice specimens!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_specimen/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice specimens!' });
		}
	});

	// GET /api/v1/practice_specimen/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practiceSpecimenFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'practice specimen does not exist!', statusCode: 404, detail: 'practice specimen does not exist!', repo: 'aquila-api', path: '/api/v1/practice_specimen/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice specimen does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice specimen fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_specimen/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice specimen!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_specimen/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice specimen!' });
		}
	});

	// DELETE /api/v1/practice_specimen/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceSpecimenFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice specimen does not exist!', statusCode: 404, detail: 'practice specimen does not exist!', repo: 'aquila-api', path: '/api/v1/practice_specimen/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice specimen does not exist!' });
				} else {
					const [data] = await practiceSpecimenFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice specimen deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_specimen/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice specimen!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_specimen/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice specimen!' });
		}
	});

	// PUT /api/v1/practice_specimen/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceSpecimenFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice specimen does not exist!', statusCode: 404, detail: 'practice specimen does not exist!', repo: 'aquila-api', path: '/api/v1/practice_specimen/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice specimen does not exist!' });
				} else {
					const data = await practiceSpecimenFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice specimen updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_specimen/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice specimen!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_specimen/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice specimen!' });
		}
	});

	return router;
};