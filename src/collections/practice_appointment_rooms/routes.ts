import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceRoomsFacade } from './facade';


export function practiceAppointmentStatusRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_rooms/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeAppointmentStatus);

			if (validated.error === null) {

				const status = await practiceRoomsFacade.create(req.body)

				res.status(200).json({ data: status[0], error: null, message: 'practice appointment status has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rooms' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice appointment status!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_rooms' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice appointment status!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeAppointmentStatusesByPracticeId);

			if (validated.error === null) {

				const statuss = await practiceRoomsFacade.findByPracticeId(req.params.practice_id);

				if (!statuss.length) {

					log.warn({ message: 'practice appointment statuses do not exist!', statusCode: 404, detail: 'practice appointment statuses do not exist!', repo: 'aquila-api', path: '/api/v1/practice_rooms/:practice_id' });
					res.status(404).json({ data: null, error: true, message: 'practice appointment statuses do not exist!' });

				} else {
					res.status(200).json({ data: statuss, error: null, message: 'practice appointment statuses fetched successfully!' });
				}
			} else {
				
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice appointment status!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice appointment status!' });
		}
	});

	// GET /api/v1/practice_rooms/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeAppointmentStatus);
			if (validated.error === null) {
				const status = await practiceRoomsFacade.findById(req.params.id);
				if (!status.length) {
					log.warn({ message: 'practice appointment status does not exist!', statusCode: 404, detail: 'practice appointment status does not exist!', repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice appointment status does not exist!' });
				} else {
					res.status(200).json({ data: status[0], error: null, message: 'practice appointment status fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice appointment status!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice appointment status!' });
		}
	});

	// DELETE /api/v1/practice_rooms/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeAppointmentStatus);
			if (validated.error === null) {
				const status = await practiceRoomsFacade.findById(req.params.id);
				if (!status.length) {
					log.warn({ message: 'practice appointment status does not exist!', statusCode: 404, detail: 'practice appointment status does not exist!', repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice appointment status does not exist!' });
				} else {
					const deletedtype = await practiceRoomsFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedtype, error: null, message: 'practice appointment status deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice appointment status!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice appointment status!' });
		}
	});

	// PUT /api/v1/practice_rooms/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeAppointmentStatus);
			if (validated.error === null) {
				const status = await practiceRoomsFacade.findById(req.params.id);
				if (!status.length) {
					log.warn({ message: 'practice appointment status does not exist!', statusCode: 404, detail: 'practice appointment status does not exist!', repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice appointment status does not exist!' });
				} else {
					const updatedstatusInfo = await practiceRoomsFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedstatusInfo[0], error: null, message: 'practice appointment status updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice appointment status!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice appointment status!' });
		}
	});

	return router;
};