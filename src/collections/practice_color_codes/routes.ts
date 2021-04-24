import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceColorCodeFacade } from './facade';


export function practiceColorCodeRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_color_codes/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeGeneralItem);

			if (validated.error === null) {

				const [data] = await practiceColorCodeFacade.create(req.body)

				res.status(200).json({ data, error: null, message: 'practice color code has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_color_codes' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice color code!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_color_codes' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice color code!' });
		}
	});

	router.get('/bypractice/:practice_id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeGeneralItems);

			if (validated.error === null) {

				const data = await practiceColorCodeFacade.findByPracticeId(req.params.practice_id);

				if (!data.length) {

					log.warn({ message: 'practice codes do not exist!', statusCode: 404, detail: 'practice codes do not exist!', repo: 'aquila-api', path: '/api/v1/practice_color_codes/:practice_id' });
					res.status(404).json({ data: null, error: true, message: 'practice codes do not exist!' });

				} else {
					res.status(200).json({ data, error: null, message: 'practice codes fetched successfully!' });
				}
			} else {

				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_color_codes/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice codes!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_color_codes/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice codes!' });
		}
	});

	// GET /api/v1/practice_color_codes/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeGeneralItem);
			if (validated.error === null) {
				const [data] = await practiceColorCodeFacade.findById(req.params.id);

				if (!data) {
					log.warn({ message: 'practice color code does not exist!', statusCode: 404, detail: 'practice color code does not exist!', repo: 'aquila-api', path: '/api/v1/practice_color_codes/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice color code does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'practice color code fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_color_codes/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice color code!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_color_codes/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice color code!' });
		}
	});

	// DELETE /api/v1/practice_color_codes/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceColorCodeFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice color code does not exist!', statusCode: 404, detail: 'practice color code does not exist!', repo: 'aquila-api', path: '/api/v1/practice_color_codes/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice color code does not exist!' });
				} else {
					const [data] = await practiceColorCodeFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'practice color code deleted successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_color_codes/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice color code!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_color_codes/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice color code!' });
		}
	});

	// PUT /api/v1/practice_color_codes/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeGeneralItem);
			if (validated.error === null) {
				const [found] = await practiceColorCodeFacade.findById(req.params.id);

				if (!found) {
					log.warn({ message: 'practice color code does not exist!', statusCode: 404, detail: 'practice color code does not exist!', repo: 'aquila-api', path: '/api/v1/practice_color_codes/:id' });
					res.status(404).json({ data: null, error: true, message: 'practice color code does not exist!' });
				} else {
					const data = await practiceColorCodeFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data, error: null, message: 'practice color code updated successfully!' });
				}

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_color_codes/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice color code!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_color_codes/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice color code!' });
		}
	});

	return router;
};