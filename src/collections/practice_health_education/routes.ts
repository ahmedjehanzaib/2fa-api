import { Request, Response, NextFunction, Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { healthEducationFacade } from './facade';

/**
 * Clients Router
 */
export function healthEducationRouters(): Router {
	const router = Router();

	// POST /api/v1/practice/health_education
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const validated = JOI.validate({ body: req.body }, validationSchema.createAHealthEducation);

			if (validated.error === null) {
				const [data] = await healthEducationFacade.create({ id: uuidv4(), ...req.body })

				res.status(200).json({ data, error: null, message: 'Health Education has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/health_education' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Health Education!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/health_education' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Health Education!' });
		}
	});

	router.get('/bypractice/:practiceId', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await healthEducationFacade.findAll(req.params.practiceId);

			res.status(200).json({ data, error: null, message: 'Health Education fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding Health Education!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/health_education' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding Health Education!' });
		}
	});

	// GET /api/v1/practice/health_education:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAHealthEducation);
			if (validated.error === null) {
				const [data] = await healthEducationFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Health Education does not exist!', statusCode: 404, detail: 'Health Education does not exist!', repo: 'aquila-api', path: '/api/v1/practice/health_education/:id' });
					res.status(404).json({ data: null, error: true, message: 'Health Education does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'Health Education fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/health_education/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Health Education!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/health_education/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Health Education!' });
		}
	});

	// DELETE /api/v1/practice/health_education:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAHealthEducation);
			if (validated.error === null) {
				const [data] = await healthEducationFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Health Education does not exist!', statusCode: 404, detail: 'Health Education does not exist!', repo: 'aquila-api', path: '/api/v1/practice/health_education/:id' });
					res.status(404).json({ data: null, error: true, message: 'Health Education does not exist!' });
				} else {
					const data = await healthEducationFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'Health Education deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/health_education/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Health Education!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/health_education/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Health Education!' });
		}
	});

	// PUT /api/v1/practice/health_education:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAHealthEducation);
			if (validated.error === null) {
				const [data] = await healthEducationFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Health Education does not exist!', statusCode: 404, detail: 'Health Education does not exist!', repo: 'aquila-api', path: '/api/v1/practice/health_education/:id' });
					res.status(404).json({ data: null, error: true, message: 'Health Education does not exist!' });
				} else {
					const [updated] = await healthEducationFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated, error: null, message: 'Health Education updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/health_education/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Health Education!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/health_education/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Health Education!' });
		}
	});

	return router;
};