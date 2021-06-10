import { Request, Response, NextFunction, Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { patientIntakeFormFacade } from './facade';

/**
 * Clients Router
 */
export function patientIntakeFormRouters(): Router {
	const router = Router();

	// POST /api/v1/practice/patient_intake_form
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const validated = JOI.validate({ body: req.body }, validationSchema.createAPatientIntakeForm);

			if (validated.error === null) {
				const [data] = await patientIntakeFormFacade.create({ id: uuidv4(), ...req.body })

				res.status(200).json({ data, error: null, message: 'Patient Intake Form has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/patient_intake_form' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new Patient Intake Form!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/patient_intake_form' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new Patient Intake Form!' });
		}
	});

	router.get('/bypractice/:practiceId', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await patientIntakeFormFacade.findAll(req.params.practiceId);

			res.status(200).json({ data, error: null, message: 'Patient Intake Form fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding Patient Intake Form!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/patient_intake_form' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding Patient Intake Form!' });
		}
	});

	// GET /api/v1/practice/patient_intake_form:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAPatientIntakeForm);
			if (validated.error === null) {
				const [data] = await patientIntakeFormFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Patient Intake Form does not exist!', statusCode: 404, detail: 'Patient Intake Form does not exist!', repo: 'aquila-api', path: '/api/v1/practice/patient_intake_form/:id' });
					res.status(404).json({ data: null, error: true, message: 'Patient Intake Form does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'Patient Intake Form fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/patient_intake_form/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a Patient Intake Form!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/patient_intake_form/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a Patient Intake Form!' });
		}
	});

	// DELETE /api/v1/practice/patient_intake_form:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAPatientIntakeForm);
			if (validated.error === null) {
				const [data] = await patientIntakeFormFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Patient Intake Form does not exist!', statusCode: 404, detail: 'Patient Intake Form does not exist!', repo: 'aquila-api', path: '/api/v1/practice/patient_intake_form/:id' });
					res.status(404).json({ data: null, error: true, message: 'Patient Intake Form does not exist!' });
				} else {
					const data = await patientIntakeFormFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'Patient Intake Form deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/patient_intake_form/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a Patient Intake Form!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/patient_intake_form/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a Patient Intake Form!' });
		}
	});

	// PUT /api/v1/practice/patient_intake_form:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAPatientIntakeForm);
			if (validated.error === null) {
				const [data] = await patientIntakeFormFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'Patient Intake Form does not exist!', statusCode: 404, detail: 'Patient Intake Form does not exist!', repo: 'aquila-api', path: '/api/v1/practice/patient_intake_form/:id' });
					res.status(404).json({ data: null, error: true, message: 'Patient Intake Form does not exist!' });
				} else {
					const [updated] = await patientIntakeFormFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated, error: null, message: 'Patient Intake Form updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice/patient_intake_form/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a Patient Intake Form!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/practice/patient_intake_form/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Patient Intake Form!' });
		}
	});

	return router;
};