import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceICDFacade } from './facade';


export function practiceICDRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_icd/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeICD);
			if (validated.error === null) {
				const icd = await practiceICDFacade.create(req.body)

				res.status(200).json({ data: icd[0], error: null, message: 'Practice ICD has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_icd' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Practice ICD!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_icd' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Practice ICD!' });
		}
	});

	router.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
		try {

			const icds = await practiceICDFacade.findAll();
			if (!icds.length) {
				log.warn({ message: 'Practice ICDs do not exist!', statusCode: 404, detail: 'Practice ICDs do not exist!', repo: 'aquila-api', path: '/api/v1/practice_icd' });
				res.status(404).json({ data: null, error: true, message: 'Practice ICDs do not exist!' });
			} else {
				res.status(200).json({ data: icds, error: null, message: 'Practice ICDs fetched successfully!' });
			}

		} catch (err) {
			log.error({ message: 'Error in finding a Practice ICDs!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_icd' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Practice ICDs!' });
		}
	});

	// GET /api/v1/practice_icd/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeICD);
			if (validated.error === null) {
				const icd = await practiceICDFacade.findById(req.params.id);
				if (!icd.length) {
					log.warn({ message: 'Practice ICD does not exist!', statusCode: 404, detail: 'Practice ICDs does not exist!', repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice ICD does not exist!' });
				} else {
					res.status(200).json({ data: icd[0], error: null, message: 'Practice ICD fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Practice ICD!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Practice ICD!' });
		}
	});

	// DELETE /api/v1/practice_icd/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeICD);
			if (validated.error === null) {
				const icd = await practiceICDFacade.findById(req.params.id);
				if (!icd.length) {
					log.warn({ message: 'Practice ICD does not exist!', statusCode: 404, detail: 'Practice ICD does not exist!', repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice ICD does not exist!' });
				} else {
					const deletedtype = await practiceICDFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedtype, error: null, message: 'Practice ICD deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Practice ICD!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Practice ICD!' });
		}
	});

	// PUT /api/v1/practice_icd/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeICD);
			if (validated.error === null) {
				const icd = await practiceICDFacade.findById(req.params.id);
				if (!icd.length) {
					log.warn({ message: 'Practice ICD does not exist!', statusCode: 404, detail: 'Practice ICD does not exist!', repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice ICD does not exist!' });
				} else {
					const updatedICDInfo = await practiceICDFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedICDInfo[0], error: null, message: 'Practice ICDs updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Practice ICD!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Practice ICD!' });
		}
	});

	return router;
};