import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practiceTypeOfServiceFacade } from './facade';


export function practiceTypeOfServiceRouters(): Router {
	const router = Router();

	// TOST /api/v1/practice_type_of_service/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticeTypeOfService);
			if (validated.error === null) {
				const TOS = await practiceTypeOfServiceFacade.create(req.body)

				res.status(200).json({ data: TOS[0], error: null, message: 'Practice Type of Service has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_type_of_service' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Practice Type of Service !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_type_of_service' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Practice Type of Service !' });
		}
	});

	router.get('/bypractice/:practiceId', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await practiceTypeOfServiceFacade.findAll(req.params.practiceId);

			res.status(200).json({ data, error: null, message: 'Practice Types of Service fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding a Practice Type of Service s!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_type_of_service' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Practice Types of Service!' });
		}
	});

	// GET /api/v1/practice_type_of_service/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticeTypeOfService);
			if (validated.error === null) {
				const TOS = await practiceTypeOfServiceFacade.findById(req.params.id);
				if (!TOS.length) {
					log.warn({ message: 'Practice Type of Service  does not exist!', statusCode: 404, detail: 'Practice Type of Service s does not exist!', repo: 'aquila-api', path: '/api/v1/practice_type_of_service/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice Type of Service  does not exist!' });
				} else {
					res.status(200).json({ data: TOS[0], error: null, message: 'Practice Type of Service  fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_type_of_service/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Practice Type of Service !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_type_of_service/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Practice Type of Service !' });
		}
	});

	// DELETE /api/v1/practice_type_of_service/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticeTypeOfService);
			if (validated.error === null) {
				const TOS = await practiceTypeOfServiceFacade.findById(req.params.id);
				if (!TOS.length) {
					log.warn({ message: 'Practice Type of Service  does not exist!', statusCode: 404, detail: 'Practice Type of Service  does not exist!', repo: 'aquila-api', path: '/api/v1/practice_type_of_service/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice Type of Service  does not exist!' });
				} else {
					const deletedtype = await practiceTypeOfServiceFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedtype, error: null, message: 'Practice Type of Service  deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_type_of_service/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Practice Type of Service !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_type_of_service/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Practice Type of Service !' });
		}
	});

	// PUT /api/v1/practice_type_of_service/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticeTypeOfService);
			if (validated.error === null) {
				const TOS = await practiceTypeOfServiceFacade.findById(req.params.id);
				if (!TOS.length) {
					log.warn({ message: 'Practice Type of Service does not exist!', statusCode: 404, detail: 'Practice Type of Service does not exist!', repo: 'aquila-api', path: '/api/v1/practice_type_of_service/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice Type of Service  does not exist!' });
				} else {
					const updatedTOSInfo = await practiceTypeOfServiceFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedTOSInfo[0], error: null, message: 'Practice Type of Service updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_type_of_service/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Practice Type of Service !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_type_of_service/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Practice Type of Service !' });
		}
	});

	return router;
};