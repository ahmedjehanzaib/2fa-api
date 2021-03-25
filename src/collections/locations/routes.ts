import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { locationsFacade } from './facade';

/**
 * Clients Router
 */
export function locationRouters(): Router {
	const router = Router();

	// POST /api/v1/practices/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeLocation);
			if (validated.error === null) {
                const client = await locationsFacade.createALocation({
                    id: uuidv4(),
					...req.body
                })

                res.status(200).json({ data: client, error: null, message: 'Practice location has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/locations/' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice location!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/locations/' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice location!' });
		}
	})

    // GET /api/v1/practices/:id
	router.get('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeLocation);
			if (validated.error === null) {
				const client = await locationsFacade.findLocationById(req.params.id);
				if (!client.length) {
					log.warn({ message: 'Practice location does not exist!', statusCode: 404, detail: 'Practice location does not exist!', repo: 'aquila-api', path: '/api/v1/locations/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice location does not exist!' });
				} else {
					res.status(200).json({ data: client, error: null, message: 'practice location fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/locations/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice location!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/locations/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice location!' });
		}
    });

	// DELETE /api/v1/practices/:id
	router.delete('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPractice);
			if (validated.error === null) {
				const client = await locationsFacade.findLocationById(req.params.id);
				if (!client.length) {
					log.warn({ message: 'Pracrice location does not exist!', statusCode: 404, detail: 'Pracrice location does not exist!', repo: 'aquila-api', path: '/api/v1/locations/:id' });
					res.status(404).json({ data: null, error: true, message: 'Pracrice location does not exist!' });
				} else {
					const deletedClient = await locationsFacade.deleteLocationById(req.params.id);
					res.status(200).json({ data: deletedClient, error: null, message: 'Practice location deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/locations/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice location!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/locations/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice location!' });
		}
    });

	// PUT /api/v1/practices/:id
	router.put('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeLocation);
			if (validated.error === null) {
				const practice = await locationsFacade.findLocationById(req.params.id);
				if (!practice.length) {
					log.warn({ message: 'Practice location does not exist!', statusCode: 404, detail: 'Practice location does not exist!', repo: 'aquila-api', path: '/api/v1/locations/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice location does not exist!' });
				} else {
					const updatedPracticeInfo = await locationsFacade.updateLocationById(req.params.id, req.body);
					res.status(200).json({ data: updatedPracticeInfo, error: null, message: 'practice location updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/locations/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice location!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/locations/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice location!' });
		}
	});

	return router;
};