import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { NDCUnitOfMeasurementFacade } from './facade';


export function NDCUnitOfMeasurementRouters(): Router {
	const router = Router();

	// UOMT /api/v1/ndc_unit_of_measurements/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createANDCUnitOfMeasurement);
			if (validated.error === null) {
				const UOM = await NDCUnitOfMeasurementFacade.create(req.body)

				res.status(200).json({ data: UOM[0], error: null, message: 'NDC Unit of Measurement has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new NDC Unit of Measurement !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new NDC Unit of Measurement !' });
		}
	});

	router.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
		try {

			const UOMs = await NDCUnitOfMeasurementFacade.findAll();
			if (!UOMs.length) {
				log.warn({ message: 'NDC Unit of Measurements do not exist!', statusCode: 404, detail: 'NDC Unit of Measurements do not exist!', repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements' });
				res.status(404).json({ data: null, error: true, message: 'NDC Unit of Measurements do not exist!' });
			} else {
				res.status(200).json({ data: UOMs, error: null, message: 'NDC Unit of Measurements fetched successfully!' });
			}

		} catch (err) {
			log.error({ message: 'Error in finding a NDC Unit of Measurements!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a NDC Unit of Measurements!' });
		}
	});

	// GET /api/v1/ndc_unit_of_measurements/:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findANDCUnitOfMeasurement);
			if (validated.error === null) {
				const UOM = await NDCUnitOfMeasurementFacade.findById(req.params.id);
				if (!UOM.length) {
					log.warn({ message: 'NDC Unit of Measurement does not exist!', statusCode: 404, detail: 'NDC Unit of Measurement does not exist!', repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
					res.status(404).json({ data: null, error: true, message: 'NDC Unit of Measurement does not exist!' });
				} else {
					res.status(200).json({ data: UOM[0], error: null, message: 'NDC Unit of Measurement fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a NDC Unit of Measurement !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a NDC Unit of Measurement !' });
		}
	});

	// DELETE /api/v1/ndc_unit_of_measurements/:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteANDCUnitOfMeasurement);
			if (validated.error === null) {
				const UOM = await NDCUnitOfMeasurementFacade.findById(req.params.id);
				if (!UOM.length) {
					log.warn({ message: 'NDC Unit of Measurement does not exist!', statusCode: 404, detail: 'NDC Unit of Measurement does not exist!', repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
					res.status(404).json({ data: null, error: true, message: 'NDC Unit of Measurement does not exist!' });
				} else {
					const deletedtype = await NDCUnitOfMeasurementFacade.deleteById(req.params.id);
					res.status(200).json({ data: deletedtype, error: null, message: 'NDC Unit of Measurement deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a NDC Unit of Measurement !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a NDC Unit of Measurement !' });
		}
	});

	// PUT /api/v1/ndc_unit_of_measurements/:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateANDCUnitOfMeasurement);
			if (validated.error === null) {
				const UOM = await NDCUnitOfMeasurementFacade.findById(req.params.id);
				if (!UOM.length) {
					log.warn({ message: 'NDC Unit of Measurement does not exist!', statusCode: 404, detail: 'NDC Unit of Measurement does not exist!', repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
					res.status(404).json({ data: null, error: true, message: 'NDC Unit of Measurement does not exist!' });
				} else {
					const updatedUOMInfo = await NDCUnitOfMeasurementFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updatedUOMInfo[0], error: null, message: 'NDC Unit of Measurement updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a NDC Unit of Measurement !', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a NDC Unit of Measurement !' });
		}
	});

	return router;
};