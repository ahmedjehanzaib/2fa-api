import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practicePharmacyFacade } from './facade';


export function practicePharmacyRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_pharmacies/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practicePharmacyFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice pharmacy has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_pharmacies' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice pharmacy!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_pharmacies' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice pharmacy!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {

				const data = await practicePharmacyFacade.findByPracticeId(req.params.practice_id);
				res.status(200).json({ data, error: null, message: 'practice pharmacies fetched successfully!' });
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_pharmacies/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice pharmacies!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_pharmacies/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice pharmacies!' });
		}
	});

	// GET /api/v1/practice_pharmacies/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practicePharmacyFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice pharmacy does not exist!', statusCode: 404, detail: 'practice pharmacy does not exist!', repo: 'aquila-api', path: '/api/v1/practice_pharmacies/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice pharmacy does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice pharmacy fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_pharmacies/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice pharmacy!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_pharmacies/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice pharmacy!' });
		}
	});

	// DELETE /api/v1/practice_pharmacies/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practicePharmacyFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice pharmacy does not exist!', statusCode: 404, detail: 'practice pharmacy does not exist!', repo: 'aquila-api', path: '/api/v1/practice_pharmacies/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice pharmacy does not exist!' });
				} else {
					const [data] = await practicePharmacyFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice pharmacy deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_pharmacies/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice pharmacy!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_pharmacies/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice pharmacy!' });
		}
	});

	// PUT /api/v1/practice_pharmacies/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practicePharmacyFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice pharmacy does not exist!', statusCode: 404, detail: 'practice pharmacy does not exist!', repo: 'aquila-api', path: '/api/v1/practice_pharmacies/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice pharmacy does not exist!' });
				} else {
					const data = await practicePharmacyFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice pharmacy updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_pharmacies/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice pharmacy!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_pharmacies/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice pharmacy!' });
		}
	});

	return router;
};