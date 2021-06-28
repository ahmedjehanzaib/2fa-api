import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceModifierFacade } from './facade';


export function practiceModifierRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_modifiers/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeModifier);
			if (validated.error === null) {
				const modifier = await practiceModifierFacade.create(req.body)

				res.status(200).json({ data: modifier[0], error: null, message: 'Practice Modifier has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_modifiers' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Practice Modifier!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_modifiers' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Practice Modifier!' });
		}
	});

	router.get('/bypractice/:practiceId', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await practiceModifierFacade.findAll(req.params.practiceId);

			res.status(200).json({ data, error: null, message: 'Practice Modifiers fetched successfully!' });

		} catch (err) {
			log.error({ message: 'Error in finding a Practice Modifiers!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_modifiers' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Practice Modifiers!' });
		}
	});

	// GET /api/v1/practice_modifiers/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeModifier);
			if (validated.error === null) {
				const modifier = await practiceModifierFacade.findById(req.params.id);
				if (!modifier.length) {
					log.warn({ message: 'Practice Modifier does not exist!', statusCode: 404, detail: 'Practice Modifiers does not exist!', repo: 'aquila-api', path: '/api/v1/practice_modifiers/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice Modifier does not exist!' });
				} else {
					res.status(200).json({ data: modifier[0], error: null, message: 'Practice Modifier fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_modifiers/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Practice Modifier!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_modifiers/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Practice Modifier!' });
		}
	});

	// DELETE /api/v1/practice_modifiers/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeModifier);
			if (validated.error === null) {
				const modifier = await practiceModifierFacade.findById(req.params.id);
				if (!modifier.length) {
					log.warn({ message: 'Practice Modifier does not exist!', statusCode: 404, detail: 'Practice Modifier does not exist!', repo: 'aquila-api', path: '/api/v1/practice_modifiers/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice Modifier does not exist!' });
				} else {
					const deletedtype = await practiceModifierFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedtype, error: null, message: 'Practice Modifier deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_modifiers/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Practice Modifier!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_modifiers/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Practice Modifier!' });
		}
	});

	// PUT /api/v1/practice_modifiers/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeModifier);
			if (validated.error === null) {
				const modifier = await practiceModifierFacade.findById(req.params.id);
				if (!modifier.length) {
					log.warn({ message: 'Practice Modifier does not exist!', statusCode: 404, detail: 'Practice Modifier does not exist!', repo: 'aquila-api', path: '/api/v1/practice_modifiers/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice Modifier does not exist!' });
				} else {
					const updatedmodifierInfo = await practiceModifierFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedmodifierInfo[0], error: null, message: 'Practice Modifiers updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_modifiers/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Practice Modifier!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_modifiers/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Practice Modifier!' });
		}
	});

	return router;
};