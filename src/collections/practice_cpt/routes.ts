import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceCPTFacade } from './facade';


export function practiceCPTRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_cpt/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeCPT);
			if (validated.error === null) {
				const CPT = await practiceCPTFacade.create(req.body)

				res.status(200).json({ data: CPT[0], error: null, message: 'Practice CPT has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_cpt' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Practice CPT!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_cpt' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Practice CPT!' });
		}
	});

	router.get('/bypractice/:practiceId', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await practiceCPTFacade.findAll(req.params.practiceId);

			res.status(200).json({ data, error: null, message: 'Practice CPTs fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding a Practice CPTs!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_cpt' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Practice CPTs!' });
		}
	});

	// GET /api/v1/practice_cpt/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeCPT);
			if (validated.error === null) {
				const CPT = await practiceCPTFacade.findById(req.params.id);
				if (!CPT.length) {
					log.warn({ message: 'Practice CPT does not exist!', statusCode: 404, detail: 'Practice CPTs does not exist!', repo: 'aquila-api', path: '/api/v1/practice_cpt/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice CPT does not exist!' });
				} else {
					res.status(200).json({ data: CPT[0], error: null, message: 'Practice CPT fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_cpt/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Practice CPT!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_cpt/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Practice CPT!' });
		}
	});

	// DELETE /api/v1/practice_cpt/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeCPT);
			if (validated.error === null) {
				const CPT = await practiceCPTFacade.findById(req.params.id);
				if (!CPT.length) {
					log.warn({ message: 'Practice CPT does not exist!', statusCode: 404, detail: 'Practice CPT does not exist!', repo: 'aquila-api', path: '/api/v1/practice_cpt/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice CPT does not exist!' });
				} else {
					const deletedtype = await practiceCPTFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedtype, error: null, message: 'Practice CPT deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_cpt/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Practice CPT!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_cpt/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Practice CPT!' });
		}
	});

	// PUT /api/v1/practice_cpt/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeCPT);
			if (validated.error === null) {
				const CPT = await practiceCPTFacade.findById(req.params.id);
				if (!CPT.length) {
					log.warn({ message: 'Practice CPT does not exist!', statusCode: 404, detail: 'Practice CPT does not exist!', repo: 'aquila-api', path: '/api/v1/practice_cpt/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice CPT does not exist!' });
				} else {
					const updatedCPTInfo = await practiceCPTFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedCPTInfo[0], error: null, message: 'Practice CPTs updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_cpt/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Practice CPT!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_cpt/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Practice CPT!' });
		}
	});

	return router;
};