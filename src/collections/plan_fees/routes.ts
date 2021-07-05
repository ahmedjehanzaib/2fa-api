import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { planFeesFacade } from './facade';


export function planFeesRouters(): Router {
	const router = Router();

	// POST /api/v1/plan_fees/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPlanFees);

			if (validated.error === null) {

				const fees = await planFeesFacade.create({ id: uuidv4(), ...req.body })

				res.status(200).json({ data: fees[0], error: null, message: 'Plan fees has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/plan_fees' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new plan fees!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/plan_fees' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new plan fees!' });
		}
	});

	router.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
		try {
			const fees = await planFeesFacade.findAll();
			res.status(200).json({ data: fees, error: null, message: 'plan fees fetched successfully!' });
		} catch (err) {
			log.error({ message: 'Error in finding a plan fees!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/plan_fees' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a plan fees!' });
		}
	});

	// GET /api/v1/plan_fees/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPlanFees);
			if (validated.error === null) {
				const fees = await planFeesFacade.findById(req.params.id);
				if (!fees.length) {
					log.warn({ message: 'plan fees does not exist!', statusCode: 404, detail: 'Plan fees does not exist!', repo: 'aquila-api', path: '/api/v1/plan_fees/:id' });
					res.status(404).json({ data: null, error: true, message: 'Plan fees does not exist!' });
				} else {
					res.status(200).json({ data: fees[0], error: null, message: 'Plan fees fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/plan_fees/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a plan fees!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/plan_fees/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Plan fees!' });
		}
	});

	// DELETE /api/v1/plan_fees/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPlanFees);
			if (validated.error === null) {
				const fees = await planFeesFacade.findById(req.params.id);
				if (!fees.length) {
					log.warn({ message: 'plan fees does not exist!', statusCode: 404, detail: 'plan fees does not exist!', repo: 'aquila-api', path: '/api/v1/plan_fees/:id' });
					res.status(404).json({ data: null, error: true, message: 'plan fees does not exist!' });
				} else {
					const deletedtype = await planFeesFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedtype, error: null, message: 'Plan fees deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/plan_fees/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a plan fees!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/plan_fees/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Plan fees!' });
		}
	});

	// PUT /api/v1/plan_fees/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPlanFees);
			if (validated.error === null) {
				const fees = await planFeesFacade.findById(req.params.id);
				if (!fees.length) {
					log.warn({ message: 'plan fees does not exist!', statusCode: 404, detail: 'Plan fees does not exist!', repo: 'aquila-api', path: '/api/v1/plan_fees/:id' });
					res.status(404).json({ data: null, error: true, message: 'Plan fees does not exist!' });
				} else {
					const updatedFeesInfo = await planFeesFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedFeesInfo[0], error: null, message: 'Plan fees updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/plan_fees/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a plan fees!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/plan_fees/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a plan fees!' });
		}
	});

	return router;
};