import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practicePatientReferralSourceFacade } from './facade';


export function practicePatientReferralSourceRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_patient_referral_sources/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practicePatientReferralSourceFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice patient referral source has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_patient_referral_sources' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice patient referral source!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_patient_referral_sources' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice patient referral source!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {
				const data = await practicePatientReferralSourceFacade.findByPracticeId(req.params.practice_id);
				res.status(200).json({ data, error: null, message: 'practice patient referral sources fetched successfully!' });
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_patient_referral_sources/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice patient referral sources!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_patient_referral_sources/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice patient referral sources!' });
		}
	});

	// GET /api/v1/practice_patient_referral_sources/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practicePatientReferralSourceFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice patient referral source does not exist!', statusCode: 404, detail: 'practice patient referral source does not exist!', repo: 'aquila-api', path: '/api/v1/practice_patient_referral_sources/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice patient referral source does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice patient referral source fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_patient_referral_sources/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice patient referral source!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_patient_referral_sources/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice patient referral source!' });
		}
	});

	// DELETE /api/v1/practice_patient_referral_sources/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practicePatientReferralSourceFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice patient referral source does not exist!', statusCode: 404, detail: 'practice patient referral source does not exist!', repo: 'aquila-api', path: '/api/v1/practice_patient_referral_sources/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice patient referral source does not exist!' });
				} else {
					const [data] = await practicePatientReferralSourceFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice patient referral source deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_patient_referral_sources/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice patient referral source!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_patient_referral_sources/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice patient referral source!' });
		}
	});

	// PUT /api/v1/practice_patient_referral_sources/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practicePatientReferralSourceFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice patient referral source does not exist!', statusCode: 404, detail: 'practice patient referral source does not exist!', repo: 'aquila-api', path: '/api/v1/practice_patient_referral_sources/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice patient referral source does not exist!' });
				} else {
					const data = await practicePatientReferralSourceFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice patient referral source updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_patient_referral_sources/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice patient referral source!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_patient_referral_sources/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice patient referral source!' });
		}
	});

	return router;
};