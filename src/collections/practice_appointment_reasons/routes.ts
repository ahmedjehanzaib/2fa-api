import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceAppointmentReasonsFacade } from './facade';


export function practiceAppointmentReasonsRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_appointment_reasons/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeAppointmentReason);

			if (validated.error === null) {

				const reason = await practiceAppointmentReasonsFacade.create(req.body)

				res.status(200).json({ data: reason[0], error: null, message: 'practice appointment reason has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_appointment_reasons' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice appointment reason!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_appointment_reasons' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice appointment reason!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeAppointmentReasonsByPracticeId);

			if (validated.error === null) {
				const reasons = await practiceAppointmentReasonsFacade.findByPracticeId(req.params.practice_id);
				res.status(200).json({ data: reasons, error: null, message: 'practice appointment reasons fetched successfully!' });
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_appointment_reasons/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice appointment reason!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_appointment_reasons/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice appointment reason!' });
		}
	});

	// GET /api/v1/practice_appointment_reasons/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeAppointmentReason);
			if (validated.error === null) {
				const reason = await practiceAppointmentReasonsFacade.findById(req.params.id);
				if (!reason.length) {
					log.warn({ message: 'practice appointment reason does not exist!', statusCode: 404, detail: 'practice appointment reason does not exist!', repo: 'aquila-api', path: '/api/v1/practice_appointment_reasons/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice appointment reason does not exist!' });
				} else {
					res.status(200).json({ data: reason[0], error: null, message: 'practice appointment reason fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_appointment_reasons/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice appointment reason!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_appointment_reasons/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice appointment reason!' });
		}
	});

	// DELETE /api/v1/practice_appointment_reasons/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeAppointmentReason);
			if (validated.error === null) {
				const reason = await practiceAppointmentReasonsFacade.findById(req.params.id);
				if (!reason.length) {
					log.warn({ message: 'practice appointment reason does not exist!', statusCode: 404, detail: 'practice appointment reason does not exist!', repo: 'aquila-api', path: '/api/v1/practice_appointment_reasons/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice appointment reason does not exist!' });
				} else {
					const deletedtype = await practiceAppointmentReasonsFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedtype, error: null, message: 'practice appointment reason deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_appointment_reasons/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice appointment reason!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_appointment_reasons/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice appointment reason!' });
		}
	});

	// PUT /api/v1/practice_appointment_reasons/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeAppointmentReason);
			if (validated.error === null) {
				const reason = await practiceAppointmentReasonsFacade.findById(req.params.id);
				if (!reason.length) {
					log.warn({ message: 'practice appointment reason does not exist!', statusCode: 404, detail: 'practice appointment reason does not exist!', repo: 'aquila-api', path: '/api/v1/practice_appointment_reasons/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice appointment reason does not exist!' });
				} else {
					const updatedreasonInfo = await practiceAppointmentReasonsFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedreasonInfo[0], error: null, message: 'practice appointment reason updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_appointment_reasons/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice appointment reason!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_appointment_reasons/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice appointment reason!' });
		}
	});

	return router;
};