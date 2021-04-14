import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { planTypesFacade } from './facade';


export function planTypesRouters(): Router {
	const router = Router();

	// POST /api/v1/plan_types/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPlanType);
			if (validated.error === null) {
				const type = await planTypesFacade.create(req.body)

				res.status(200).json({ data: type[0], error: null, message: 'Plan type has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/plan_types' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new plan type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/plan_types' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new plan type!' });
		}
	});

	router.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
		try {

			const types = await planTypesFacade.findAll();
			if (!types.length) {
				log.warn({ message: 'plan types do not exist!', statusCode: 404, detail: 'plan types do not exist!', repo: 'aquila-api', path: '/api/v1/plan_types' });
				res.status(404).json({ data: null, error: true, message: 'plan types do not exist!' });
			} else {
				res.status(200).json({ data: types, error: null, message: 'plan types fetched successfully!' });
			}

		} catch (err) {
			log.error({ message: 'Error in finding a plan types!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/plan_types' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a plan types!' });
		}
	});

	// GET /api/v1/plan_types/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPlanType);
			if (validated.error === null) {
				const type = await planTypesFacade.findById(req.params.id);
				if (!type.length) {
					log.warn({ message: 'plan type does not exist!', statusCode: 404, detail: 'Plan types does not exist!', repo: 'aquila-api', path: '/api/v1/plan_types/:id' });
					res.status(404).json({ data: null, error: true, message: 'Plan type does not exist!' });
				} else {
					res.status(200).json({ data: type[0], error: null, message: 'Plan type fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/plan_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a plan type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/plan_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Plan type!' });
		}
	});

	// DELETE /api/v1/plan_types/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPlanType);
			if (validated.error === null) {
				const type = await planTypesFacade.findById(req.params.id);
				if (!type.length) {
					log.warn({ message: 'plan type does not exist!', statusCode: 404, detail: 'plan type does not exist!', repo: 'aquila-api', path: '/api/v1/plan_types/:id' });
					res.status(404).json({ data: null, error: true, message: 'plan type does not exist!' });
				} else {
					const deletedtype = await planTypesFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedtype, error: null, message: 'Plan type deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/plan_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a plan type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/plan_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Plan type!' });
		}
	});

	// PUT /api/v1/plan_types/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPlanType);
			if (validated.error === null) {
				const type = await planTypesFacade.findById(req.params.id);
				if (!type.length) {
					log.warn({ message: 'plan type does not exist!', statusCode: 404, detail: 'Plan type does not exist!', repo: 'aquila-api', path: '/api/v1/plan_types/:id' });
					res.status(404).json({ data: null, error: true, message: 'Plan type does not exist!' });
				} else {
					const updatedtypeInfo = await planTypesFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedtypeInfo[0], error: null, message: 'Plan types updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/plan_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a plan type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/plan_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a plan type!' });
		}
	});

	return router;
};