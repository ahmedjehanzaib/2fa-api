import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { letterCategoriesFacade } from './facade';

/**
 * Clients Router
 */
export function letterCategoriesRouters(): Router {
	const router = Router();

	// POST /api/v1/clinical/letter_categories
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const validated = JOI.validate({ body: req.body }, validationSchema.createALetterCategory);

			if (validated.error === null) {
				const [data] = await letterCategoriesFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'Letter Category has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/letter_categories' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Letter Category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/letter_categories' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Letter Category!' });
		}
	});

	router.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await letterCategoriesFacade.findAll();

			res.status(200).json({ data, error: null, message: 'Letter Categories fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding Letter Categories!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/letter_categories' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding Letter Categories!' });
		}
	});

	// GET /api/v1/clinical/letter_categories:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findALetterCategory);
			if (validated.error === null) {
				const [data] = await letterCategoriesFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Letter Category does not exist!', statusCode: 404, detail: 'Letter Category does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/letter_categories/:id' });
					res.status(404).json({ data: null, error: true, message: 'Letter Category does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'Letter Category fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/letter_categories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Letter Category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/letter_categories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Letter Category!' });
		}
	});

	// DELETE /api/v1/clinical/letter_categories:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteALetterCategory);
			if (validated.error === null) {
				const [data] = await letterCategoriesFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Letter Category does not exist!', statusCode: 404, detail: 'Letter Category does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/letter_categories/:id' });
					res.status(404).json({ data: null, error: true, message: 'Letter Category does not exist!' });
				} else {
					const data = await letterCategoriesFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'Letter Category deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/letter_categories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Letter Category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/letter_categories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Letter Category!' });
		}
	});

	// PUT /api/v1/clinical/letter_categories:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateALetterCategory);
			if (validated.error === null) {
				const [data] = await letterCategoriesFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Letter Category does not exist!', statusCode: 404, detail: 'Letter Category does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/letter_categories/:id' });
					res.status(404).json({ data: null, error: true, message: 'Letter Category does not exist!' });
				} else {
					const [updated] = await letterCategoriesFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated, error: null, message: 'Letter Category updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/letter_categories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Letter Category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/letter_categories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Letter Category!' });
		}
	});

	return router;
};