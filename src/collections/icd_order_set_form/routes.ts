import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { ICDOrderFormFacade } from './facade';

/**
 * Clients Router
 */
export function ICDOrderFormRouters(): Router {
	const router = Router();

	// POST /api/v1/clinical/icd_order_forms
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {

		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAICDOrderForm);

			if (validated.error === null) {
				const role = await ICDOrderFormFacade.create(req.body)

				res.status(200).json({ data: role[0], error: null, message: 'ICD Order Form has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/icd_order_forms' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new ICD Order Form!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/icd_order_forms' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new ICD Order Form!' });
		}
	});

	router.get('/bypractice/:practiceId', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await ICDOrderFormFacade.findAll(req.params.practiceId);

			res.status(200).json({ data, error: null, message: 'ICD Order Forms fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding a ICD Order Form!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/icd_order_forms' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a ICD Order Form!' });
		}
	});

	// GET /api/v1/clinical/icd_order_forms:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAICDOrderForm);
			if (validated.error === null) {
				const [data] = await ICDOrderFormFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'ICD Order Form does not exist!', statusCode: 404, detail: 'ICD Order Form does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/icd_order_forms/:id' });
					res.status(404).json({ data: null, error: true, message: 'ICD Order Form does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'ICD Order Form fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/icd_order_forms/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a ICD Order Form!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/icd_order_forms/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a ICD Order Form!' });
		}
	});

	// DELETE /api/v1/clinical/icd_order_forms:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAICDOrderForm);
			if (validated.error === null) {
				const [data] = await ICDOrderFormFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'ICD Order Form does not exist!', statusCode: 404, detail: 'ICD Order Form does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/icd_order_forms/:id' });
					res.status(404).json({ data: null, error: true, message: 'ICD Order Form does not exist!' });
				} else {
					const data = await ICDOrderFormFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'ICD Order Form deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/icd_order_forms/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a ICD Order Form!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/icd_order_forms/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a ICD Order Form!' });
		}
	});

	// PUT /api/v1/clinical/icd_order_forms:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAICDOrderForm);
			if (validated.error === null) {
				const [data] = await ICDOrderFormFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'ICD Order Form does not exist!', statusCode: 404, detail: 'ICD Order Form does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/icd_order_forms/:id' });
					res.status(404).json({ data: null, error: true, message: 'ICD Order Form does not exist!' });
				} else {
					const [updated] = await ICDOrderFormFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated, error: null, message: 'ICD Order Form updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/icd_order_forms/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a ICD Order Form!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/icd_order_forms/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a ICD Order Form!' });
		}
	});

	return router;
};