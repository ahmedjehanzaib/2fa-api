import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { planCategoriesFacade } from './facade';


export function planCategoriesRouters(): Router {
	const router = Router();

	// POST /api/v1/plan_categories/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPlanCategory);
			if (validated.error === null) {
				const category = await planCategoriesFacade.create({
					id: uuidv4(),
					...req.body
				})

				res.status(200).json({ data: category[0], error: null, message: 'Plan category has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/plan_categories' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new plan category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/plan_categories' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new plan category!' });
		}
	});

	router.get('/bypractice/:practiceId', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const data = await planCategoriesFacade.findAll(req.params.practiceId);
			res.status(200).json({ data, error: null, message: 'plan categories fetched successfully!' });
		} catch (err) {
			log.error({ message: 'Error in finding a plan categories!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/plan_categories' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a plan categories!' });
		}
	});

	// GET /api/v1/plan_categories/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPlanCategory);
			if (validated.error === null) {
				const category = await planCategoriesFacade.findById(req.params.id);
				if (!category.length) {
					log.warn({ message: 'plan category does not exist!', statusCode: 404, detail: 'Plan categories does not exist!', repo: 'aquila-api', path: '/api/v1/plan_categories/:id' });
					res.status(404).json({ data: null, error: true, message: 'Plan category does not exist!' });
				} else {
					res.status(200).json({ data: category[0], error: null, message: 'Plan category fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/plan_categories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a plan category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/plan_categories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Plan category!' });
		}
	});

	// DELETE /api/v1/plan_categories/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPlanCategory);
			if (validated.error === null) {
				const category = await planCategoriesFacade.findById(req.params.id);
				if (!category.length) {
					log.warn({ message: 'plan category does not exist!', statusCode: 404, detail: 'plan category does not exist!', repo: 'aquila-api', path: '/api/v1/plan_categories/:id' });
					res.status(404).json({ data: null, error: true, message: 'plan category does not exist!' });
				} else {
					const deletedcategory = await planCategoriesFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedcategory, error: null, message: 'Plan category deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dcategoryetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/plan_categories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a plan category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/plan_categories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Plan category!' });
		}
	});

	// PUT /api/v1/plan_categories/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPlanCategory);
			if (validated.error === null) {
				const category = await planCategoriesFacade.findById(req.params.id);
				if (!category.length) {
					log.warn({ message: 'plan category does not exist!', statusCode: 404, detail: 'Plan category does not exist!', repo: 'aquila-api', path: '/api/v1/plan_categories/:id' });
					res.status(404).json({ data: null, error: true, message: 'Plan category does not exist!' });
				} else {
					const updatedcategoryInfo = await planCategoriesFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedcategoryInfo[0], error: null, message: 'Plan categories updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/plan_categories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a plan category!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/plan_categories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a plan category!' });
		}
	});

	return router;
};