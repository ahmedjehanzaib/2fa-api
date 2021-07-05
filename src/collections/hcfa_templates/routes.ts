import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { hcfaTemplatesFacade } from './facade';


export function hcfaTemplatesRouters(): Router {
	const router = Router();

	// POST /api/v1/hcfa_templates/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAHCFATemplate);
			if (validated.error === null) {
				const role = await hcfaTemplatesFacade.create({
					id: uuidv4(),
					...req.body
				})

				res.status(200).json({ data: role[0], error: null, message: 'HCFA Template has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/hcfa_templates' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new HCFA Template!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/hcfa_templates' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new HCFA Template!' });
		}
	});

	router.get('/bypractice/:practiceId', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const data = await hcfaTemplatesFacade.findAll(req.params.practiceId);
			res.status(200).json({ data, error: null, message: 'HCFA Templates fetched successfully!' });
		} catch (err) {
			log.error({ message: 'Error in finding a HCFA Templates!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/hcfa_templates' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a HCFA Templates!' });
		}
	});

	// GET /api/v1/hcfa_templates/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAHCFATemplate);
			if (validated.error === null) {
				const location = await hcfaTemplatesFacade.findById(req.params.id);
				if (!location.length) {
					log.warn({ message: 'HCFA Template does not exist!', statusCode: 404, detail: 'HCFA Template does not exist!', repo: 'aquila-api', path: '/api/v1/hcfa_templates/:id' });
					res.status(404).json({ data: null, error: true, message: 'HCFA Template does not exist!' });
				} else {
					res.status(200).json({ data: location[0], error: null, message: 'HCFA Template fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/hcfa_templates/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a HCFA Template!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/hcfa_templates/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a HCFA Template!' });
		}
	});

	// DELETE /api/v1/hcfa_templates/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAHCFATemplate);
			if (validated.error === null) {
				const location = await hcfaTemplatesFacade.findById(req.params.id);
				if (!location.length) {
					log.warn({ message: 'HCFA Template does not exist!', statusCode: 404, detail: 'HCFA Template does not exist!', repo: 'aquila-api', path: '/api/v1/hcfa_templates/:id' });
					res.status(404).json({ data: null, error: true, message: 'HCFA Template does not exist!' });
				} else {
					const deletedLocation = await hcfaTemplatesFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedLocation, error: null, message: 'HCFA Template deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dlocationetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/hcfa_templates/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a HCFA Template!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/hcfa_templates/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a HCFA Template!' });
		}
	});

	// PUT /api/v1/hcfa_templates/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAHCFATemplate);
			if (validated.error === null) {
				const location = await hcfaTemplatesFacade.findById(req.params.id);
				if (!location.length) {
					log.warn({ message: 'HCFA Template does not exist!', statusCode: 404, detail: 'HCFA Template does not exist!', repo: 'aquila-api', path: '/api/v1/hcfa_templates/:id' });
					res.status(404).json({ data: null, error: true, message: 'HCFA Template does not exist!' });
				} else {
					const updatedLocationInfo = await hcfaTemplatesFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedLocationInfo[0], error: null, message: 'HCFA Template updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/hcfa_templates/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a HCFA Template!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/hcfa_templates/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a HCFA Template!' });
		}
	});

	return router;
};