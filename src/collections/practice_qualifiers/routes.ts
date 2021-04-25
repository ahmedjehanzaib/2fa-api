import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceQualifierFacade } from './facade';


export function practiceQualifierRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_qualifiers/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practiceQualifierFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice qualifier has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_qualifiers' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice qualifier!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_qualifiers' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice qualifier!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {

				const data = await practiceQualifierFacade.findByPracticeId(req.params.practice_id);

				if (!data.length) {

					log.warn({ message: 'practice qualifiers do not exist!', statusCode: 404, detail: 'practice qualifiers do not exist!', repo: 'aquila-api', path: '/api/v1/practice_qualifiers/:practice_id' });
					res.status(404).json({ data: null, error: true, message: 'practice qualifiers do not exist!' });

				} else {
					res.status(200).json({ data, error: null, message: 'practice qualifiers fetched successfully!' });
				}
			} else {

				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_qualifiers/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice qualifiers!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_qualifiers/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice qualifiers!' });
		}
	});

	// GET /api/v1/practice_qualifiers/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practiceQualifierFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice qualifier does not exist!', statusCode: 404, detail: 'practice qualifier does not exist!', repo: 'aquila-api', path: '/api/v1/practice_qualifiers/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice qualifier does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice qualifier fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_qualifiers/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice qualifier!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_qualifiers/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice qualifier!' });
		}
	});

	// DELETE /api/v1/practice_qualifiers/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceQualifierFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice qualifier does not exist!', statusCode: 404, detail: 'practice qualifier does not exist!', repo: 'aquila-api', path: '/api/v1/practice_qualifiers/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice qualifier does not exist!' });
				} else {
					const [data] = await practiceQualifierFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice qualifier deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_qualifiers/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice qualifier!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_qualifiers/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice qualifier!' });
		}
	});

	// PUT /api/v1/practice_qualifiers/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceQualifierFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice qualifier does not exist!', statusCode: 404, detail: 'practice qualifier does not exist!', repo: 'aquila-api', path: '/api/v1/practice_qualifiers/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice qualifier does not exist!' });
				} else {
					const data = await practiceQualifierFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice qualifier updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_qualifiers/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice qualifier!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_qualifiers/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice qualifier!' });
		}
	});

	return router;
};