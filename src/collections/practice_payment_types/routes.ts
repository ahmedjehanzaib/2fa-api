import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practicePaymentTypeFacade } from './facade';


export function practicePaymentTypeRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_payment_types/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practicePaymentTypeFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice payment type has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_payment_types' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice payment type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_payment_types' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice payment type!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {
				const data = await practicePaymentTypeFacade.findByPracticeId(req.params.practice_id);
				res.status(200).json({ data, error: null, message: 'practice payment types fetched successfully!' });
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_payment_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice payment types!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_payment_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice payment types!' });
		}
	});

	// GET /api/v1/practice_payment_types/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practicePaymentTypeFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice payment type does not exist!', statusCode: 404, detail: 'practice payment type does not exist!', repo: 'aquila-api', path: '/api/v1/practice_payment_types/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice payment type does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice payment type fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_payment_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice payment type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_payment_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice payment type!' });
		}
	});

	// DELETE /api/v1/practice_payment_types/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practicePaymentTypeFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice payment type does not exist!', statusCode: 404, detail: 'practice payment type does not exist!', repo: 'aquila-api', path: '/api/v1/practice_payment_types/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice payment type does not exist!' });
				} else {
					const [data] = await practicePaymentTypeFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice payment type deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_payment_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice payment type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_payment_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice payment type!' });
		}
	});

	// PUT /api/v1/practice_payment_types/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practicePaymentTypeFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice payment type does not exist!', statusCode: 404, detail: 'practice payment type does not exist!', repo: 'aquila-api', path: '/api/v1/practice_payment_types/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice payment type does not exist!' });
				} else {
					const data = await practicePaymentTypeFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice payment type updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_payment_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice payment type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_payment_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice payment type!' });
		}
	});

	return router;
};