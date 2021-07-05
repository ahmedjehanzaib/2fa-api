import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceLabTestFacade } from './facade';


export function practiceLabTestRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_lab_tests/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const status = await practiceLabTestFacade.create(req.body)

				res.status(200).json({ data: status[0], error: null, message: 'practice lab test has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_lab_tests' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice lab test!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_lab_tests' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice lab test!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {

				const labTest = await practiceLabTestFacade.findByPracticeId(req.params.practice_id);
				res.status(200).json({ data: labTest, error: null, message: 'practice lab tests fetched successfully!' });
			} else {
				
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_lab_tests/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice lab tests!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_lab_tests/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice lab tests!' });
		}
	});

	// GET /api/v1/practice_lab_tests/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const labTest = await practiceLabTestFacade.findById(req.params.id);
				if (!labTest.length) {
					log.warn({ message: 'practice lab test does not exist!', statusCode: 404, detail: 'practice lab test does not exist!', repo: 'aquila-api', path: '/api/v1/practice_lab_tests/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice lab test does not exist!' });
				} else {
					res.status(200).json({ data: labTest[0], error: null, message: 'practice lab test fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_lab_tests/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice lab test!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_lab_tests/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice lab test!' });
		}
	});

	// DELETE /api/v1/practice_lab_tests/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const labTest = await practiceLabTestFacade.findById(req.params.id);

				if (!labTest.length) {
					log.warn({ message: 'practice lab test does not exist!', statusCode: 404, detail: 'practice lab test does not exist!', repo: 'aquila-api', path: '/api/v1/practice_lab_tests/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice lab test does not exist!' });
				} else {
					const deleted = await practiceLabTestFacade.deleteById(req.params.id);
					res.status(200).json({ data: deleted[0], error: null, message: 'practice lab test deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_lab_tests/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice lab test!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_lab_tests/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice lab test!' });
		}
	});

	// PUT /api/v1/practice_lab_tests/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const labTest = await practiceLabTestFacade.findById(req.params.id);

				if (!labTest.length) {
					log.warn({ message: 'practice lab test does not exist!', statusCode: 404, detail: 'practice lab test does not exist!', repo: 'aquila-api', path: '/api/v1/practice_lab_tests/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice lab test does not exist!' });
				} else {
					const updated = await practiceLabTestFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated[0], error: null, message: 'practice lab test updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_lab_tests/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice lab test!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_lab_tests/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice lab test!' });
		}
	});

	return router;
};