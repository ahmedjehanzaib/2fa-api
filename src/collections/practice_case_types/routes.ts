import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceCaseTypeFacade } from './facade';


export function practiceCaseTypeRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_case_types/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practiceCaseTypeFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice case type has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_case_types' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice case type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_case_types' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice case type!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {

				const data = await practiceCaseTypeFacade.findByPracticeId(req.params.practice_id);

				if (!data.length) {

					log.warn({ message: 'practice case types do not exist!', statusCode: 404, detail: 'practice case types do not exist!', repo: 'aquila-api', path: '/api/v1/practice_case_types/:practice_id' });
					res.status(404).json({ data: null, error: true, message: 'practice case types do not exist!' });

				} else {
					res.status(200).json({ data, error: null, message: 'practice case types fetched successfully!' });
				}
			} else {

				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_case_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice case types!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_case_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice case types!' });
		}
	});

	// GET /api/v1/practice_case_types/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practiceCaseTypeFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice case type does not exist!', statusCode: 404, detail: 'practice case type does not exist!', repo: 'aquila-api', path: '/api/v1/practice_case_types/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice case type does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice case type fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_case_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice case type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_case_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice case type!' });
		}
	});

	// DELETE /api/v1/practice_case_types/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceCaseTypeFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice case type does not exist!', statusCode: 404, detail: 'practice case type does not exist!', repo: 'aquila-api', path: '/api/v1/practice_case_types/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice case type does not exist!' });
				} else {
					const [data] = await practiceCaseTypeFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice case type deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_case_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice case type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_case_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice case type!' });
		}
	});

	// PUT /api/v1/practice_case_types/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceCaseTypeFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice case type does not exist!', statusCode: 404, detail: 'practice case type does not exist!', repo: 'aquila-api', path: '/api/v1/practice_case_types/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice case type does not exist!' });
				} else {
					const data = await practiceCaseTypeFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice case type updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_case_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice case type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_case_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice case type!' });
		}
	});

	return router;
};