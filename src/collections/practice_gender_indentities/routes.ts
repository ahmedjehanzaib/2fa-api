import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceGenderIdentityFacade } from './facade';


export function practiceGenderIdentityRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_gender_indentities/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practiceGenderIdentityFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice gender indentity has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_gender_indentities' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice gender indentity!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_gender_indentities' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice gender indentity!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {

				const data = await practiceGenderIdentityFacade.findByPracticeId(req.params.practice_id);

				if (!data.length) {

					log.warn({ message: 'practice gender indentities do not exist!', statusCode: 404, detail: 'practice gender indentities do not exist!', repo: 'aquila-api', path: '/api/v1/practice_gender_indentities/:practice_id' });
					res.status(404).json({ data: null, error: true, message: 'practice gender indentities do not exist!' });

				} else {
					res.status(200).json({ data, error: null, message: 'practice gender indentities fetched successfully!' });
				}
			} else {

				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_gender_indentities/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice gender indentities!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_gender_indentities/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice gender indentities!' });
		}
	});

	// GET /api/v1/practice_gender_indentities/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practiceGenderIdentityFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice gender indentity does not exist!', statusCode: 404, detail: 'practice gender indentity does not exist!', repo: 'aquila-api', path: '/api/v1/practice_gender_indentities/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice gender indentity does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice gender indentity fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_gender_indentities/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice gender indentity!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_gender_indentities/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice gender indentity!' });
		}
	});

	// DELETE /api/v1/practice_gender_indentities/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceGenderIdentityFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice gender indentity does not exist!', statusCode: 404, detail: 'practice gender indentity does not exist!', repo: 'aquila-api', path: '/api/v1/practice_gender_indentities/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice gender indentity does not exist!' });
				} else {
					const [data] = await practiceGenderIdentityFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice gender indentity deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_gender_indentities/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice gender indentity!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_gender_indentities/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice gender indentity!' });
		}
	});

	// PUT /api/v1/practice_gender_indentities/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceGenderIdentityFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice gender indentity does not exist!', statusCode: 404, detail: 'practice gender indentity does not exist!', repo: 'aquila-api', path: '/api/v1/practice_gender_indentities/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice gender indentity does not exist!' });
				} else {
					const data = await practiceGenderIdentityFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice gender indentity updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_gender_indentities/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice gender indentity!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_gender_indentities/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice gender indentity!' });
		}
	});

	return router;
};