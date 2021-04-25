import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceClinicalVisitStatusFacade } from './facade';


export function practiceClinicalVisitStatusRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_clinical_visit_statuses/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practiceClinicalVisitStatusFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice clinical visit status has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_clinical_visit_statuses' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice clinical visit status!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_clinical_visit_statuses' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice clinical visit status!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {

				const data = await practiceClinicalVisitStatusFacade.findByPracticeId(req.params.practice_id);

				if (!data.length) {

					log.warn({ message: 'practice clinical visit statuses do not exist!', statusCode: 404, detail: 'practice clinical visit statuses do not exist!', repo: 'aquila-api', path: '/api/v1/practice_clinical_visit_statuses/:practice_id' });
					res.status(404).json({ data: null, error: true, message: 'practice clinical visit statuses do not exist!' });

				} else {
					res.status(200).json({ data, error: null, message: 'practice clinical visit statuses fetched successfully!' });
				}
			} else {

				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_clinical_visit_statuses/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice clinical visit statuses!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_clinical_visit_statuses/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice clinical visit statuses!' });
		}
	});

	// GET /api/v1/practice_clinical_visit_statuses/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practiceClinicalVisitStatusFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice clinical visit status does not exist!', statusCode: 404, detail: 'practice clinical visit status does not exist!', repo: 'aquila-api', path: '/api/v1/practice_clinical_visit_statuses/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice clinical visit status does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice clinical visit status fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_clinical_visit_statuses/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice clinical visit status!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_clinical_visit_statuses/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice clinical visit status!' });
		}
	});

	// DELETE /api/v1/practice_clinical_visit_statuses/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceClinicalVisitStatusFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice clinical visit status does not exist!', statusCode: 404, detail: 'practice clinical visit status does not exist!', repo: 'aquila-api', path: '/api/v1/practice_clinical_visit_statuses/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice clinical visit status does not exist!' });
				} else {
					const [data] = await practiceClinicalVisitStatusFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice clinical visit status deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_clinical_visit_statuses/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice clinical visit status!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_clinical_visit_statuses/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice clinical visit status!' });
		}
	});

	// PUT /api/v1/practice_clinical_visit_statuses/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceClinicalVisitStatusFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice clinical visit status does not exist!', statusCode: 404, detail: 'practice clinical visit status does not exist!', repo: 'aquila-api', path: '/api/v1/practice_clinical_visit_statuses/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice clinical visit status does not exist!' });
				} else {
					const data = await practiceClinicalVisitStatusFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice clinical visit status updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_clinical_visit_statuses/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice clinical visit status!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_clinical_visit_statuses/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice clinical visit status!' });
		}
	});

	return router;
};