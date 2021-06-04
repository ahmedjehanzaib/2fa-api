import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { questionGroupFacade } from './facade';

/**
 * Clients Router
 */
export function questionGroupRouters(): Router {
	const router = Router();

	// POST /api/v1/question_groups
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {

		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAQuestionGroup);
			if (validated.error === null) {
				const role = await questionGroupFacade.create({ id: uuidv4(), ...req.body })

				res.status(200).json({ data: role[0], error: null, message: 'Question Group has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/question_groups' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Question Group!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/question_groups' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Question Group!' });
		}
	});

	router.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await questionGroupFacade.findAll();

			res.status(200).json({ data, error: null, message: 'Question Groups fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding a Question Group!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/question_groups' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Question Group!' });
		}
	});

	// GET /api/v1/question_groups:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAQuestionGroup);
			if (validated.error === null) {
				const [data] = await questionGroupFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Question Group does not exist!', statusCode: 404, detail: 'Question Group does not exist!', repo: 'aquila-api', path: '/api/v1/question_groups/:id' });
					res.status(404).json({ data: null, error: true, message: 'Question Group does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'Question Group fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/question_groups/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Question Group!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/question_groups/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Question Group!' });
		}
	});

	// DELETE /api/v1/question_groups:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAQuestionGroup);
			if (validated.error === null) {
				const [data] = await questionGroupFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Question Group does not exist!', statusCode: 404, detail: 'Question Group does not exist!', repo: 'aquila-api', path: '/api/v1/question_groups/:id' });
					res.status(404).json({ data: null, error: true, message: 'Question Group does not exist!' });
				} else {
					const data = await questionGroupFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'Question Group deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/question_groups/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Question Group!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/question_groups/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Question Group!' });
		}
	});

	// PUT /api/v1/question_groups:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAQuestionGroup);
			if (validated.error === null) {
				const [data] = await questionGroupFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Question Group does not exist!', statusCode: 404, detail: 'Question Group does not exist!', repo: 'aquila-api', path: '/api/v1/question_groups/:id' });
					res.status(404).json({ data: null, error: true, message: 'Question Group does not exist!' });
				} else {
					const [updated] = await questionGroupFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated, error: null, message: 'Question Group updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/question_groups/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Question Group!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/question_groups/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Question Group!' });
		}
	});

	return router;
};