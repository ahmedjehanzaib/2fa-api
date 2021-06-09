import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { patientLetterFacade } from './facade';

/**
 * Clients Router
 */
export function patientLetterRouters(): Router {
	const router = Router();

	// POST /api/v1/practice/patient_letters
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAPatientLetter);

			if (validated.error === null) {
				const role = await patientLetterFacade.create({ id: uuidv4(), ...req.body })

				res.status(200).json({ data: role[0], error: null, message: 'Patient Letter has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/patient_letters' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Patient Letter!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/patient_letters' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Patient Letter!' });
		}
	});

	router.get('/bypractice/:practiceId', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await patientLetterFacade.findAll(req.params.practiceId);

			res.status(200).json({ data, error: null, message: 'Patient Letters fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding a Patient Letter!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/patient_letters' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Patient Letter!' });
		}
	});

	// GET /api/v1/practice/patient_letters:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPatientLetter);
			if (validated.error === null) {
				const [data] = await patientLetterFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Patient Letter does not exist!', statusCode: 404, detail: 'Patient Letter does not exist!', repo: 'aquila-api', path: '/api/v1/practice/patient_letters/:id' });
					res.status(404).json({ data: null, error: true, message: 'Patient Letter does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'Patient Letter fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/patient_letters/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Patient Letter!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/patient_letters/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Patient Letter!' });
		}
	});

	// DELETE /api/v1/practice/patient_letters:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPatientLetter);
			if (validated.error === null) {
				const [data] = await patientLetterFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Patient Letter does not exist!', statusCode: 404, detail: 'Patient Letter does not exist!', repo: 'aquila-api', path: '/api/v1/practice/patient_letters/:id' });
					res.status(404).json({ data: null, error: true, message: 'Patient Letter does not exist!' });
				} else {
					const data = await patientLetterFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'Patient Letter deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/patient_letters/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Patient Letter!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/patient_letters/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Patient Letter!' });
		}
	});

	// PUT /api/v1/practice/patient_letters:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPatientLetter);
			if (validated.error === null) {
				const [data] = await patientLetterFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Patient Letter does not exist!', statusCode: 404, detail: 'Patient Letter does not exist!', repo: 'aquila-api', path: '/api/v1/practice/patient_letters/:id' });
					res.status(404).json({ data: null, error: true, message: 'Patient Letter does not exist!' });
				} else {
					const [updated] = await patientLetterFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated, error: null, message: 'Patient Letter updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/patient_letters/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Patient Letter!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/patient_letters/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Patient Letter!' });
		}
	});

	return router;
};