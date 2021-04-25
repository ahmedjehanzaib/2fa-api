import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceSexualOrientationFacade } from './facade';


export function practiceSexualOrientationRouters(): Router {
	const router = Router();

	// POST /api/v1practice_sexual_orientations/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practiceSexualOrientationFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice sexual orientation has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1practice_sexual_orientations' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice sexual orientation!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1practice_sexual_orientations' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice sexual orientation!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {

				const data = await practiceSexualOrientationFacade.findByPracticeId(req.params.practice_id);

				if (!data.length) {

					log.warn({ message: 'practice sexual orientations do not exist!', statusCode: 404, detail: 'practice sexual orientations do not exist!', repo: 'aquila-api', path: '/api/v1practice_sexual_orientations/:practice_id' });
					res.status(404).json({ data: null, error: true, message: 'practice sexual orientations do not exist!' });

				} else {
					res.status(200).json({ data, error: null, message: 'practice sexual orientations fetched successfully!' });
				}
			} else {

				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1practice_sexual_orientations/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice sexual orientations!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1practice_sexual_orientations/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice sexual orientations!' });
		}
	});

	// GET /api/v1practice_sexual_orientations/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practiceSexualOrientationFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice sexual orientation does not exist!', statusCode: 404, detail: 'practice sexual orientation does not exist!', repo: 'aquila-api', path: '/api/v1practice_sexual_orientations/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice sexual orientation does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice sexual orientation fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1practice_sexual_orientations/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice sexual orientation!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1practice_sexual_orientations/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice sexual orientation!' });
		}
	});

	// DELETE /api/v1practice_sexual_orientations/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceSexualOrientationFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice sexual orientation does not exist!', statusCode: 404, detail: 'practice sexual orientation does not exist!', repo: 'aquila-api', path: '/api/v1practice_sexual_orientations/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice sexual orientation does not exist!' });
				} else {
					const [data] = await practiceSexualOrientationFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice sexual orientation deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1practice_sexual_orientations/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice sexual orientation!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1practice_sexual_orientations/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice sexual orientation!' });
		}
	});

	// PUT /api/v1practice_sexual_orientations/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceSexualOrientationFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice sexual orientation does not exist!', statusCode: 404, detail: 'practice sexual orientation does not exist!', repo: 'aquila-api', path: '/api/v1practice_sexual_orientations/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice sexual orientation does not exist!' });
				} else {
					const data = await practiceSexualOrientationFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice sexual orientation updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1practice_sexual_orientations/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice sexual orientation!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1practice_sexual_orientations/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice sexual orientation!' });
		}
	});

	return router;
};