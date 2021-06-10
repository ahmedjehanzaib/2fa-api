import { Request, Response, NextFunction, Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceMacrosFacade } from './facade';

/**
 * Clients Router
 */
export function practiceMacrosRouters(): Router {
	const router = Router();

	// POST /api/v1/practice/macros
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeMacros);

			if (validated.error === null) {
				const [data] = await practiceMacrosFacade.create({ id: uuidv4(), ...req.body })

				res.status(200).json({ data, error: null, message: 'Practice Macros has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/macros' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Practice Macros!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/macros' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Practice Macros!' });
		}
	});

	router.get('/bypractice/:practiceId', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await practiceMacrosFacade.findAll(req.params.practiceId);

			res.status(200).json({ data, error: null, message: 'Practice Macros fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding Practice Macros!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/macros' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding Practice Macros!' });
		}
	});

	// GET /api/v1/practice/macros:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeMacros);
			if (validated.error === null) {
				const [data] = await practiceMacrosFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Practice Macros does not exist!', statusCode: 404, detail: 'Practice Macros does not exist!', repo: 'aquila-api', path: '/api/v1/practice/macros/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice Macros does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'Practice Macros fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/macros/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Practice Macros!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/macros/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Practice Macros!' });
		}
	});

	// DELETE /api/v1/practice/macros:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeMacros);
			if (validated.error === null) {
				const [data] = await practiceMacrosFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Practice Macros does not exist!', statusCode: 404, detail: 'Practice Macros does not exist!', repo: 'aquila-api', path: '/api/v1/practice/macros/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice Macros does not exist!' });
				} else {
					const data = await practiceMacrosFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'Practice Macros deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/macros/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Practice Macros!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/macros/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Practice Macros!' });
		}
	});

	// PUT /api/v1/practice/macros:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeMacros);
			if (validated.error === null) {
				const [data] = await practiceMacrosFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Practice Macros does not exist!', statusCode: 404, detail: 'Practice Macros does not exist!', repo: 'aquila-api', path: '/api/v1/practice/macros/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice Macros does not exist!' });
				} else {
					const [updated] = await practiceMacrosFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated, error: null, message: 'Practice Macros updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/macros/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Practice Macros!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/macros/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Practice Macros!' });
		}
	});

	return router;
};