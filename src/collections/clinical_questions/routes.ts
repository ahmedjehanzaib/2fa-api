import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { questionFacade } from './facade';

/**
 * Clients Router
 */
export function questionRouters(): Router {
	const router = Router();

	// POST /api/v1/questions
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAQuestion);

			if (validated.error === null) {
				const role = await questionFacade.create({ id: uuidv4(), ...req.body })

				res.status(200).json({ data: role[0], error: null, message: 'Question  has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/questions' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Question !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/questions' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Question !' });
		}
	});

	router.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await questionFacade.findAll();

			res.status(200).json({ data, error: null, message: 'Question s fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding a question !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/questions' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a question !' });
		}
	});

	// GET /api/v1/questions:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAQuestion);
			if (validated.error === null) {
				const [data] = await questionFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Question  does not exist!', statusCode: 404, detail: 'Question  does not exist!', repo: 'aquila-api', path: '/api/v1/questions/:id' });
					res.status(404).json({ data: null, error: true, message: 'Question  does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'Question  fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/questions/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Question !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/questions/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Question !' });
		}
	});

	// DELETE /api/v1/questions:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAQuestion);
			if (validated.error === null) {
				const [data] = await questionFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'question  does not exist!', statusCode: 404, detail: 'question  does not exist!', repo: 'aquila-api', path: '/api/v1/questions/:id' });
					res.status(404).json({ data: null, error: true, message: 'question  does not exist!' });
				} else {
					const data = await questionFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'Question  deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/questions/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Question !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/questions/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Question !' });
		}
	});

	// PUT /api/v1/questions:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAQuestion);
			if (validated.error === null) {
				const [data] = await questionFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Question  does not exist!', statusCode: 404, detail: 'Question  does not exist!', repo: 'aquila-api', path: '/api/v1/questions/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice location does not exist!' });
				} else {
					const [updated] = await questionFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated, error: null, message: 'Question  updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/questions/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Question !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/questions/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Question !' });
		}
	});

	return router;
};