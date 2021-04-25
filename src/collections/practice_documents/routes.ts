import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceDocumentFacade } from './facade';


export function practiceDocumentRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_documents/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practiceDocumentFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice document has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_documents' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice document!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_documents' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice document!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {

				const data = await practiceDocumentFacade.findByPracticeId(req.params.practice_id);

				if (!data.length) {

					log.warn({ message: 'practice documents do not exist!', statusCode: 404, detail: 'practice documents do not exist!', repo: 'aquila-api', path: '/api/v1/practice_documents/:practice_id' });
					res.status(404).json({ data: null, error: true, message: 'practice documents do not exist!' });

				} else {
					res.status(200).json({ data, error: null, message: 'practice documents fetched successfully!' });
				}
			} else {

				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_documents/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice documents!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_documents/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice documents!' });
		}
	});

	// GET /api/v1/practice_documents/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practiceDocumentFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice document does not exist!', statusCode: 404, detail: 'practice document does not exist!', repo: 'aquila-api', path: '/api/v1/practice_documents/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice document does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice document fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_documents/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice document!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_documents/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice document!' });
		}
	});

	// DELETE /api/v1/practice_documents/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceDocumentFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice document does not exist!', statusCode: 404, detail: 'practice document does not exist!', repo: 'aquila-api', path: '/api/v1/practice_documents/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice document does not exist!' });
				} else {
					const [data] = await practiceDocumentFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice document deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_documents/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice document!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_documents/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice document!' });
		}
	});

	// PUT /api/v1/practice_documents/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceDocumentFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice document does not exist!', statusCode: 404, detail: 'practice document does not exist!', repo: 'aquila-api', path: '/api/v1/practice_documents/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice document does not exist!' });
				} else {
					const data = await practiceDocumentFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice document updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_documents/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice document!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_documents/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice document!' });
		}
	});

	return router;
};