import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { sectionFacade } from './facade';

/**
 * Clients Router
 */
export function sectionRouters(): Router {
	const router = Router();

	// POST /api/v1/clinical/sections
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {

		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createASection);
			if (validated.error === null) {
				const role = await sectionFacade.create({ id: uuidv4(), ...req.body })

				res.status(200).json({ data: role[0], error: null, message: 'Clinical Section has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/sections' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Clinical Section!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/sections' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Clinical Section!' });
		}
	});

	router.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await sectionFacade.findAll();

			res.status(200).json({ data, error: null, message: 'Clinical Sections fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding a Clinical Section!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/sections' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Clinical Section!' });
		}
	});

	// GET /api/v1/clinical/sections:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findASection);
			if (validated.error === null) {
				const [data] = await sectionFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Clinical Section does not exist!', statusCode: 404, detail: 'Clinical Section does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/sections/:id' });
					res.status(404).json({ data: null, error: true, message: 'Clinical Section does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'Clinical Section fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/sections/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Clinical Section!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/sections/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Clinical Section!' });
		}
	});

	// DELETE /api/v1/clinical/sections:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteASection);
			if (validated.error === null) {
				const [data] = await sectionFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Clinical Section does not exist!', statusCode: 404, detail: 'Clinical Section does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/sections/:id' });
					res.status(404).json({ data: null, error: true, message: 'Clinical Section does not exist!' });
				} else {
					const data = await sectionFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'Clinical Section deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/sections/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Clinical Section!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/sections/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Clinical Section!' });
		}
	});

	// PUT /api/v1/clinical/sections:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateASection);
			if (validated.error === null) {
				const [data] = await sectionFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Clinical Section does not exist!', statusCode: 404, detail: 'Clinical Section does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/sections/:id' });
					res.status(404).json({ data: null, error: true, message: 'Clinical Section does not exist!' });
				} else {
					const [updated] = await sectionFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated, error: null, message: 'Clinical Section updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/sections/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Clinical Section!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/sections/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Clinical Section!' });
		}
	});

	return router;
};