import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceRoomFacade } from './facade';


export function practiceRoomRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_rooms/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const status = await practiceRoomFacade.create(req.body)

				res.status(200).json({ data: status[0], error: null, message: 'practice room has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rooms' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice room!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_rooms' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice room!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {
				const statuss = await practiceRoomFacade.findByPracticeId(req.params.practice_id);
				res.status(200).json({ data: statuss, error: null, message: 'practice rooms fetched successfully!' });
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice rooms!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice rooms!' });
		}
	});

	// GET /api/v1/practice_rooms/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const status = await practiceRoomFacade.findById(req.params.id);
				if (!status.length) {
					log.warn({ message: 'practice room does not exist!', statusCode: 404, detail: 'practice room does not exist!', repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice room does not exist!' });
				} else {
					res.status(200).json({ data: status[0], error: null, message: 'practice room fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice room!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice room!' });
		}
	});

	// DELETE /api/v1/practice_rooms/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const status = await practiceRoomFacade.findById(req.params.id);
				if (!status.length) {
					log.warn({ message: 'practice room does not exist!', statusCode: 404, detail: 'practice room does not exist!', repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice room does not exist!' });
				} else {
					const deletedtype = await practiceRoomFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedtype, error: null, message: 'practice room deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice room!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice room!' });
		}
	});

	// PUT /api/v1/practice_rooms/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const status = await practiceRoomFacade.findById(req.params.id);
				if (!status.length) {
					log.warn({ message: 'practice room does not exist!', statusCode: 404, detail: 'practice room does not exist!', repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice room does not exist!' });
				} else {
					const updatedstatusInfo = await practiceRoomFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedstatusInfo[0], error: null, message: 'practice room updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice room!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice room!' });
		}
	});

	return router;
};