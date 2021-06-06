import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { categoriesFacade } from './facade';

/**
 * Clients Router
 */
export function cptFormCategoriesRouters(): Router {
	const router = Router();

	// POST /api/v1/clinical/cpt_form_categories
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const validated = JOI.validate({ body: req.body }, validationSchema.createAOrderFormCategory);

			if (validated.error === null) {
				const [data] = await categoriesFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'CPT Form Category has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/cpt_form_categories' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new CPT Form Category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/cpt_form_categories' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new CPT Form Category!' });
		}
	});

	router.get('/bypractice/:practiceId', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await categoriesFacade.findByPractice(req.params.practiceId);

			res.status(200).json({ data, error: null, message: 'CPT Form Categories fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding CPT Form Categories!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/cpt_form_categories' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding CPT Form Categories!' });
		}
	});

	// GET /api/v1/clinical/cpt_form_categories:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAOrderFormCategory);
			if (validated.error === null) {
				const [data] = await categoriesFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'CPT Form Category does not exist!', statusCode: 404, detail: 'CPT Form Category does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/cpt_form_categories/:id' });
					res.status(404).json({ data: null, error: true, message: 'CPT Form Category does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'CPT Form Category fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/cpt_form_categories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a CPT Form Category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/cpt_form_categories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a CPT Form Category!' });
		}
	});

	// DELETE /api/v1/clinical/cpt_form_categories:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAOrderFormCategory);
			if (validated.error === null) {
				const [data] = await categoriesFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'CPT Form Category does not exist!', statusCode: 404, detail: 'CPT Form Category does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/cpt_form_categories/:id' });
					res.status(404).json({ data: null, error: true, message: 'CPT Form Category does not exist!' });
				} else {
					const data = await categoriesFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'CPT Form Category deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/cpt_form_categories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a CPT Form Category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/cpt_form_categories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a CPT Form Category!' });
		}
	});

	// PUT /api/v1/clinical/cpt_form_categories:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAOrderFormCategory);
			if (validated.error === null) {
				const [data] = await categoriesFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'CPT Form Category does not exist!', statusCode: 404, detail: 'CPT Form Category does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/cpt_form_categories/:id' });
					res.status(404).json({ data: null, error: true, message: 'CPT Form Category does not exist!' });
				} else {
					const [updated] = await categoriesFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated, error: null, message: 'CPT Form Category updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/cpt_form_categories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a CPT Form Category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/cpt_form_categories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a CPT Form Category!' });
		}
	});

	return router;
};