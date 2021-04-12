import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceRoleFacade } from './facade';

/**
 * Clients Router
 */
export function practiceRoleRouters(): Router {
	const router = Router();

	// POST /api/v1/practices/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeRole);
			if (validated.error === null) {
                const role = await practiceRoleFacade.create({
                    id: uuidv4(),
					...req.body
                })

                res.status(200).json({ data: role[0], error: null, message: 'Practice role has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/roles' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new practice role!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/roles' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new practice role!' });
		}
	});

	router.get('/',  async (_req: Request, res: Response, _next: NextFunction) => {
		try {
			
				const locations = await practiceRoleFacade.findAll();
				if (!locations.length) {
					log.warn({ message: 'Practice roles do not exist!', statusCode: 404, detail: 'Practice roles do not exist!', repo: 'aquila-api', path: '/api/v1/roles' });
					res.status(404).json({ data: null, error: true, message: 'Practice roles do not exist!' });
				} else {
					res.status(200).json({ data: locations, error: null, message: 'practice roles fetched successfully!' });
				}
	
		} catch (err) {
			log.error({ message: 'Error in finding a practice locations!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/locations' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice locations!' });
		}
    });

    // GET /api/v1/practices/:id
	router.get('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findPracticeRole);
			if (validated.error === null) {
				const location = await practiceRoleFacade.findById(req.params.id);
				if (!location.length) {
					log.warn({ message: 'Practice role does not exist!', statusCode: 404, detail: 'Practice role does not exist!', repo: 'aquila-api', path: '/api/v1/roles/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice role does not exist!' });
				} else {
					res.status(200).json({ data: location[0], error: null, message: 'practice role fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/locations/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a practice role!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/roles/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a practice role!' });
		}
    });

	// DELETE /api/v1/practices/:id
	router.delete('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeRole);
			if (validated.error === null) {
				const location = await practiceRoleFacade.findById(req.params.id);
				if (!location.length) {
					log.warn({ message: 'Pracrice role does not exist!', statusCode: 404, detail: 'Pracrice role does not exist!', repo: 'aquila-api', path: '/api/v1/roles/:id' });
					res.status(404).json({ data: null, error: true, message: 'Pracrice role does not exist!' });
				} else {
					const deletedLocation = await practiceRoleFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedLocation, error: null, message: 'Practice role deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dlocationetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/roles/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a practice role!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/roles/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a practice role!' });
		}
    });

	// PUT /api/v1/practices/:id
	router.put('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeRole);
			if (validated.error === null) {
				const location = await practiceRoleFacade.findById(req.params.id);
				if (!location.length) {
					log.warn({ message: 'Practice role does not exist!', statusCode: 404, detail: 'Practice role does not exist!', repo: 'aquila-api', path: '/api/v1/roles/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice location does not exist!' });
				} else {
					const updatedLocationInfo = await practiceRoleFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedLocationInfo[0], error: null, message: 'practice role updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/roles/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a practice role!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/roles/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a practice role!' });
		}
	});

	return router;
};