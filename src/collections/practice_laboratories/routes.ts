import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceLaboratoryFacade } from './facade';


export function practiceLaboratoryRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_laboratories/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const status = await practiceLaboratoryFacade.create(req.body)

				res.status(200).json({ data: status[0], error: null, message: 'practice laboratory has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_laboratories' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice laboratory!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_laboratories' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice laboratory!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {

				const laboratory = await practiceLaboratoryFacade.findByPracticeId(req.params.practice_id);

				if (!laboratory.length) {

					log.warn({ message: 'practice laboratorys do not exist!', statusCode: 404, detail: 'practice laboratorys do not exist!', repo: 'aquila-api', path: '/api/v1/practice_laboratories/:practice_id' });
					res.status(404).json({ data: null, error: true, message: 'practice laboratoryes do not exist!' });

				} else {
					res.status(200).json({ data: laboratory, error: null, message: 'practice laboratorys fetched successfully!' });
				}
			} else {
				
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice laboratorys!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice laboratorys!' });
		}
	});

	// GET /api/v1/practice_laboratories/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const laboratory = await practiceLaboratoryFacade.findById(req.params.id);
				if (!laboratory.length) {
					log.warn({ message: 'practice laboratory does not exist!', statusCode: 404, detail: 'practice laboratory does not exist!', repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice laboratory does not exist!' });
				} else {
					res.status(200).json({ data: laboratory[0], error: null, message: 'practice laboratory fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice laboratory!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice laboratory!' });
		}
	});

	// DELETE /api/v1/practice_laboratories/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const laboratory = await practiceLaboratoryFacade.findById(req.params.id);

				if (!laboratory.length) {
					log.warn({ message: 'practice laboratory does not exist!', statusCode: 404, detail: 'practice laboratory does not exist!', repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice laboratory does not exist!' });
				} else {
					const deleted = await practiceLaboratoryFacade.deleteById(req.params.id);
					res.status(200).json({ data: deleted[0], error: null, message: 'practice laboratory deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice laboratory!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice laboratory!' });
		}
	});

	// PUT /api/v1/practice_laboratories/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const laboratory = await practiceLaboratoryFacade.findById(req.params.id);

				if (!laboratory.length) {
					log.warn({ message: 'practice laboratory does not exist!', statusCode: 404, detail: 'practice laboratory does not exist!', repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice laboratory does not exist!' });
				} else {
					const updated = await practiceLaboratoryFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated[0], error: null, message: 'practice laboratory updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice laboratory!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice laboratory!' });
		}
	});

	return router;
};