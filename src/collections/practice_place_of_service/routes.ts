import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { practicePlaceOfServiceFacade } from './facade';


export function practicePlaceOfServiceRouters(): Router {
	const router = Router();

	// POST /api/v1/practice_place_of_service/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPracticePlaceOfService);
			if (validated.error === null) {
				const POS = await practicePlaceOfServiceFacade.create(req.body)

				res.status(200).json({ data: POS[0], error: null, message: 'Practice Place of Service has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_place_of_service' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Practice Place of Service !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_place_of_service' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Practice Place of Service !' });
		}
	});

	router.get('/bypractice/:practiceId', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const POSs = await practicePlaceOfServiceFacade.findAll(req.params.practiceId);

			res.status(200).json({ data: POSs, error: null, message: 'Practice Places of Service fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding a Practice Place of Service s!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_place_of_service' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Practice Places of Service!' });
		}
	});

	// GET /api/v1/practice_place_of_service/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPracticePlaceOfService);
			if (validated.error === null) {
				const POS = await practicePlaceOfServiceFacade.findById(req.params.id);
				if (!POS.length) {
					log.warn({ message: 'Practice Place of Service  does not exist!', statusCode: 404, detail: 'Practice Place of Service s does not exist!', repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice Place of Service  does not exist!' });
				} else {
					res.status(200).json({ data: POS[0], error: null, message: 'Practice Place of Service  fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Practice Place of Service !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Practice Place of Service !' });
		}
	});

	// DELETE /api/v1/practice_place_of_service/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPracticePlaceOfService);
			if (validated.error === null) {
				const POS = await practicePlaceOfServiceFacade.findById(req.params.id);
				if (!POS.length) {
					log.warn({ message: 'Practice Place of Service  does not exist!', statusCode: 404, detail: 'Practice Place of Service  does not exist!', repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice Place of Service  does not exist!' });
				} else {
					const deletedtype = await practicePlaceOfServiceFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedtype, error: null, message: 'Practice Place of Service  deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Practice Place of Service !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Practice Place of Service !' });
		}
	});

	// PUT /api/v1/practice_place_of_service/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPracticePlaceOfService);
			if (validated.error === null) {
				const POS = await practicePlaceOfServiceFacade.findById(req.params.id);
				if (!POS.length) {
					log.warn({ message: 'Practice Place of Service  does not exist!', statusCode: 404, detail: 'Practice Place of Service  does not exist!', repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
					res.status(404).json({ data: null, error: true, message: 'Practice Place of Service  does not exist!' });
				} else {
					const updatedPOSInfo = await practicePlaceOfServiceFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedPOSInfo[0], error: null, message: 'Practice Place of Service s updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Practice Place of Service !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Practice Place of Service !' });
		}
	});

	return router;
};