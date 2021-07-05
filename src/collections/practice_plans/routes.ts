import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practicePlanFacade } from './facade';

/**
 * Practice Plan Router
 */
export function practicePlanRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_plans/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticePlan);
			if (validated.error === null) {
				const role = await practicePlanFacade.create({ id: uuidv4(), ...req.body })

				res.status(200).json({ data: role[0], error: null, message: 'Practice plan has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_plans' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice plan!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_plans' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice plan!' });
		}
	});

	router.get('/bypractice/:practiceId', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const data = await practicePlanFacade.findAll(req.params.practiceId);
			res.status(200).json({ data, error: null, message: 'practice plans fetched successfully!' });
		} catch (err) {
			log.error({ message: 'Error in finding a practice plans!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_plans' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice plans!' });
		}
	});

	// GET /api/v1/practice_plans/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticePlan);
			if (validated.error === null) {
				const plan = await practicePlanFacade.findById(req.params.id);
				if (!plan.length) {
					log.warn({ message: 'Practice plan does not exist!', statusCode: 404, detail: 'Practice plan does not exist!', repo: 'aquila-api', path: '/api/v1/practice_plans/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice plan does not exist!' });
				} else {
					res.status(200).json({ data: plan[0], error: null, message: 'practice plan fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_plans/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice plan!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_plans/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice plan!' });
		}
	});

	// DELETE /api/v1/practice_plans/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticePlan);
			if (validated.error === null) {
				const plan = await practicePlanFacade.findById(req.params.id);
				if (!plan.length) {
					log.warn({ message: 'Pracrice role does not exist!', statusCode: 404, detail: 'Pracrice role does not exist!', repo: 'aquila-api', path: '/api/v1/practice_plans/:id' });
					res.status(404).json({ data: null, error: true, message: 'Pracrice role does not exist!' });
				} else {
					const deletedplan = await practicePlanFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedplan, error: null, message: 'Practice plan deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dplanetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_plans/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice plan!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_plans/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice plan!' });
		}
	});

	// PUT /api/v1/practice_plans/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticePlan);
			if (validated.error === null) {
				const plan = await practicePlanFacade.findById(req.params.id);
				if (!plan.length) {
					log.warn({ message: 'Practice plan does not exist!', statusCode: 404, detail: 'Practice plan does not exist!', repo: 'aquila-api', path: '/api/v1/practice_plans/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice plan does not exist!' });
				} else {
					const updatedplanInfo = await practicePlanFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedplanInfo[0], error: null, message: 'practice plan updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_plans/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice plan!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_plans/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice plan!' });
		}
	});

	return router;
};