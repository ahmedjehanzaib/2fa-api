import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { templateFacade } from './facade';

/**
 * Clients Router
 */
export function templateRouters(): Router {
	const router = Router();

	// POST /api/v1/clinical/templates
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAClinicalTemplate);

			if (validated.error === null) {
				const role = await templateFacade.create({ id: uuidv4(), ...req.body })

				res.status(200).json({ data: role[0], error: null, message: 'Clinical Template has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/templates' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Clinical Template!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/templates' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Clinical Template!' });
		}
	});

	router.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await templateFacade.findAll();

			res.status(200).json({ data, error: null, message: 'Clinical Templates fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding a Clinical Template!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/templates' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Clinical Template!' });
		}
	});

	// GET /api/v1/clinical/templates:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAClinicalTemplate);
			if (validated.error === null) {
				const [data] = await templateFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Clinical Template does not exist!', statusCode: 404, detail: 'Clinical Template does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/templates/:id' });
					res.status(404).json({ data: null, error: true, message: 'Clinical Template does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'Clinical Template fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/templates/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Clinical Template!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/templates/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Clinical Template!' });
		}
	});

	// DELETE /api/v1/clinical/templates:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAClinicalTemplate);
			if (validated.error === null) {
				const [data] = await templateFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Clinical Template does not exist!', statusCode: 404, detail: 'Clinical Template does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/templates/:id' });
					res.status(404).json({ data: null, error: true, message: 'Clinical Template does not exist!' });
				} else {
					const data = await templateFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'Clinical Template deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/templates/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Clinical Template!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/templates/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Clinical Template!' });
		}
	});

	// PUT /api/v1/clinical/templates:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAClinicalTemplate);
			if (validated.error === null) {
				const [data] = await templateFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Clinical Template does not exist!', statusCode: 404, detail: 'Clinical Template does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/templates/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice location does not exist!' });
				} else {
					const [updated] = await templateFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated, error: null, message: 'Clinical Template updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/templates/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Clinical Template!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/templates/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Clinical Template!' });
		}
	});

	return router;
};