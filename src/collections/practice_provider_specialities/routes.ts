import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceProviderSpecialityFacade } from './facade';


export function practiceProviderSpecialityRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_provider_specialities/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practiceProviderSpecialityFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice provider speciality has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_provider_specialities' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice provider speciality!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_provider_specialities' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice provider speciality!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {
				const data = await practiceProviderSpecialityFacade.findByPracticeId(req.params.practice_id);
				res.status(200).json({ data, error: null, message: 'practice provider specialities fetched successfully!' });
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_provider_specialities/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice provider specialities!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_provider_specialities/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice provider specialities!' });
		}
	});

	// GET /api/v1/practice_provider_specialities/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practiceProviderSpecialityFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice provider speciality does not exist!', statusCode: 404, detail: 'practice provider speciality does not exist!', repo: 'aquila-api', path: '/api/v1/practice_provider_specialities/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice provider speciality does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice provider speciality fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_provider_specialities/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice provider speciality!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_provider_specialities/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice provider speciality!' });
		}
	});

	// DELETE /api/v1/practice_provider_specialities/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceProviderSpecialityFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice provider speciality does not exist!', statusCode: 404, detail: 'practice provider speciality does not exist!', repo: 'aquila-api', path: '/api/v1/practice_provider_specialities/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice provider speciality does not exist!' });
				} else {
					const [data] = await practiceProviderSpecialityFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice provider speciality deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_provider_specialities/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice provider speciality!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_provider_specialities/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice provider speciality!' });
		}
	});

	// PUT /api/v1/practice_provider_specialities/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceProviderSpecialityFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice provider speciality does not exist!', statusCode: 404, detail: 'practice provider speciality does not exist!', repo: 'aquila-api', path: '/api/v1/practice_provider_specialities/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice provider speciality does not exist!' });
				} else {
					const data = await practiceProviderSpecialityFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice provider speciality updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_provider_specialities/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice provider speciality!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_provider_specialities/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice provider speciality!' });
		}
	});

	return router;
};