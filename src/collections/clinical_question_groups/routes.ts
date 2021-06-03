import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { questionTypeFacade } from './facade';

/**
 * Clients Router
 */
export function questionTypeRouters(): Router {
	const router = Router();

	// POST /api/v1/question_types
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAQuestionType);
			if (validated.error === null) {
				const role = await questionTypeFacade.create(req.body)

				res.status(200).json({ data: role[0], error: null, message: 'Question type has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/question_types' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Question type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/question_types' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Question type!' });
		}
	});

	router.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await questionTypeFacade.findAll();

			res.status(200).json({ data, error: null, message: 'Question types fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding a question type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/question_types' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a question type!' });
		}
	});

	// GET /api/v1/question_types:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAQuestionType);
			if (validated.error === null) {
				const [data] = await questionTypeFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Question type does not exist!', statusCode: 404, detail: 'Question type does not exist!', repo: 'aquila-api', path: '/api/v1/question_types/:id' });
					res.status(404).json({ data: null, error: true, message: 'Question type does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'Question type fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/question_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Question type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/question_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Question type!' });
		}
	});

	// DELETE /api/v1/question_types:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAQuestionType);
			if (validated.error === null) {
				const [data] = await questionTypeFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'question type does not exist!', statusCode: 404, detail: 'question type does not exist!', repo: 'aquila-api', path: '/api/v1/question_types/:id' });
					res.status(404).json({ data: null, error: true, message: 'question type does not exist!' });
				} else {
					const data = await questionTypeFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'Question type deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/question_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Question type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/question_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Question type!' });
		}
	});

	// PUT /api/v1/question_types:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAQuestionType);
			if (validated.error === null) {
				const [data] = await questionTypeFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Question type does not exist!', statusCode: 404, detail: 'Question type does not exist!', repo: 'aquila-api', path: '/api/v1/question_types/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice location does not exist!' });
				} else {
					const [updated] = await questionTypeFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated, error: null, message: 'Question type updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/question_types/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Question type!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/question_types/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Question type!' });
		}
	});

	return router;
};