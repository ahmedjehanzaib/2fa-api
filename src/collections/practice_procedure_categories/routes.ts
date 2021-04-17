import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceProcedureCategoryFacade } from './facade';


export function practiceProcedureCategoriesRouters(): Router {
	const router = Router();

	// TOST /api/v1/practice_procedure_categories/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeProcedureCategory);
			if (validated.error === null) {
				const TOS = await practiceProcedureCategoryFacade.create(req.body)

				res.status(200).json({ data: TOS[0], error: null, message: 'Practice Procedure Category has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_procedure_categories' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Practice Procedure Category !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_procedure_categories' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Practice Procedure Category !' });
		}
	});

	router.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
		try {

			const TOSs = await practiceProcedureCategoryFacade.findAll();
			if (!TOSs.length) {
				log.warn({ message: 'Practice Procedure Categories do not exist!', statusCode: 404, detail: 'Practice Procedure Categories do not exist!', repo: 'aquila-api', path: '/api/v1/practice_procedure_categories' });
				res.status(404).json({ data: null, error: true, message: 'Practice Procedure Categories do not exist!' });
			} else {
				res.status(200).json({ data: TOSs, error: null, message: 'Practice Procedure Categories fetched successfully!' });
			}

		} catch (err) {
			log.error({ message: 'Error in finding a Practice Procedure Categories!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_procedure_categories' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Practice Procedure Categories!' });
		}
	});

	// GET /api/v1/practice_procedure_categories/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeProcedureCategory);
			if (validated.error === null) {
				const TOS = await practiceProcedureCategoryFacade.findById(req.params.id);
				if (!TOS.length) {
					log.warn({ message: 'Practice Procedure Category  does not exist!', statusCode: 404, detail: 'Practice Procedure Category does not exist!', repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice Procedure Category does not exist!' });
				} else {
					res.status(200).json({ data: TOS[0], error: null, message: 'Practice Procedure Category fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Practice Procedure Category !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Practice Procedure Category !' });
		}
	});

	// DELETE /api/v1/practice_procedure_categories/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeProcedureCategory);
			if (validated.error === null) {
				const TOS = await practiceProcedureCategoryFacade.findById(req.params.id);
				if (!TOS.length) {
					log.warn({ message: 'Practice Procedure Category does not exist!', statusCode: 404, detail: 'Practice Procedure Category does not exist!', repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice Procedure Category does not exist!' });
				} else {
					const deletedtype = await practiceProcedureCategoryFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedtype, error: null, message: 'Practice Procedure Category deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Practice Procedure Category !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Practice Procedure Category !' });
		}
	});

	// PUT /api/v1/practice_procedure_categories/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeProcedureCategory);
			if (validated.error === null) {
				const TOS = await practiceProcedureCategoryFacade.findById(req.params.id);
				if (!TOS.length) {
					log.warn({ message: 'Practice Procedure Category does not exist!', statusCode: 404, detail: 'Practice Procedure Category does not exist!', repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice Procedure Category does not exist!' });
				} else {
					const updatedTOSInfo = await practiceProcedureCategoryFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedTOSInfo[0], error: null, message: 'Practice Procedure Category updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Practice Procedure Category !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Practice Procedure Category !' });
		}
	});

	return router;
};