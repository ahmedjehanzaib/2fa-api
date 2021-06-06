import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { categoriesFacade } from './facade';

/**
 * Clients Router
 */
export function ICDFormCategoriesRouters(): Router {
	const router = Router();

	// POST /api/v1/clinical/icd_form_categories
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const validated = JOI.validate({ body: req.body }, validationSchema.createAOrderFormCategory);

			if (validated.error === null) {
				const [data] = await categoriesFacade.create({ id: uuidv4(), ...req.body })

				res.status(200).json({ data, error: null, message: 'ICD Form Category has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/icd_form_categories' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new ICD Form Category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/icd_form_categories' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new ICD Form Category!' });
		}
	});

	router.get('/bypractice/:practiceId', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await categoriesFacade.findByPractice(req.params.practiceId);

			res.status(200).json({ data, error: null, message: 'ICD Form Categories fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding ICD Form Categories!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/icd_form_categories' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding ICD Form Categories!' });
		}
	});

	// GET /api/v1/clinical/icd_form_categories:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAOrderFormCategory);
			if (validated.error === null) {
				const [data] = await categoriesFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'ICD Form Category does not exist!', statusCode: 404, detail: 'ICD Form Category does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/icd_form_categories/:id' });
					res.status(404).json({ data: null, error: true, message: 'ICD Form Category does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'ICD Form Category fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/icd_form_categories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a ICD Form Category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/icd_form_categories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a ICD Form Category!' });
		}
	});

	// DELETE /api/v1/clinical/icd_form_categories:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAOrderFormCategory);
			if (validated.error === null) {
				const [data] = await categoriesFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'ICD Form Category does not exist!', statusCode: 404, detail: 'ICD Form Category does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/icd_form_categories/:id' });
					res.status(404).json({ data: null, error: true, message: 'ICD Form Category does not exist!' });
				} else {
					const data = await categoriesFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'ICD Form Category deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/icd_form_categories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a ICD Form Category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/icd_form_categories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a ICD Form Category!' });
		}
	});

	// PUT /api/v1/clinical/icd_form_categories:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAOrderFormCategory);
			if (validated.error === null) {
				const [data] = await categoriesFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'ICD Form Category does not exist!', statusCode: 404, detail: 'ICD Form Category does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/icd_form_categories/:id' });
					res.status(404).json({ data: null, error: true, message: 'ICD Form Category does not exist!' });
				} else {
					const [updated] = await categoriesFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated, error: null, message: 'ICD Form Category updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/icd_form_categories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a ICD Form Category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/icd_form_categories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a ICD Form Category!' });
		}
	});

	return router;
};