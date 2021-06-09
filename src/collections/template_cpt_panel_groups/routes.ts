import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import { v4 as uuidv4 } from 'uuid';


import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { CPTPanelGroupFacade } from './facade';

/**
 * Clients Router
 */
export function CPTPanelGroupRouters(): Router {
	const router = Router();

	// POST /api/v1/clinical/cpt_panel_groups
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {

		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createACPTPanelGroup);

			if (validated.error === null) {
				const role = await CPTPanelGroupFacade.create({ id: uuidv4(), ...req.body })

				res.status(200).json({ data: role[0], error: null, message: 'CPT Panel Group has been created successfully!' })

			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/cpt_panel_groups' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new CPT Panel Group!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/cpt_panel_groups' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new CPT Panel Group!' });
		}
	});

	router.get('/bypractice/:practiceId', async (req: Request, res: Response, _next: NextFunction) => {
		try {

			const data = await CPTPanelGroupFacade.findAll(req.params.practiceId);

			res.status(200).json({ data, error: null, message: 'CPT Panel Groups fetched successfully!' });


		} catch (err) {
			log.error({ message: 'Error in finding a CPT Panel Group!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/cpt_panel_groups' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a CPT Panel Group!' });
		}
	});

	// GET /api/v1/clinical/cpt_panel_groups:id
	router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findACPTPanelGroup);
			if (validated.error === null) {
				const [data] = await CPTPanelGroupFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'CPT Panel Group does not exist!', statusCode: 404, detail: 'CPT Panel Group does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/cpt_panel_groups/:id' });
					res.status(404).json({ data: null, error: true, message: 'CPT Panel Group does not exist!' });
				} else {
					res.status(200).json({ data, error: null, message: 'CPT Panel Group fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/cpt_panel_groups/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a CPT Panel Group!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/cpt_panel_groups/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a CPT Panel Group!' });
		}
	});

	// DELETE /api/v1/clinical/cpt_panel_groups:id
	router.delete('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteACPTPanelGroup);
			if (validated.error === null) {
				const [data] = await CPTPanelGroupFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'CPT Panel Group does not exist!', statusCode: 404, detail: 'CPT Panel Group does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/cpt_panel_groups/:id' });
					res.status(404).json({ data: null, error: true, message: 'CPT Panel Group does not exist!' });
				} else {
					const data = await CPTPanelGroupFacade.deleteById(req.params.id);
					res.status(200).json({ data, error: null, message: 'CPT Panel Group deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/cpt_panel_groups/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a CPT Panel Group!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/cpt_panel_groups/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a CPT Panel Group!' });
		}
	});

	// PUT /api/v1/clinical/cpt_panel_groups:id
	router.put('/:id', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateACPTPanelGroup);
			if (validated.error === null) {
				const [data] = await CPTPanelGroupFacade.findById(req.params.id);
				if (!data) {
					log.warn({ message: 'CPT Panel Group does not exist!', statusCode: 404, detail: 'CPT Panel Group does not exist!', repo: 'aquila-api', path: '/api/v1/clinical/cpt_panel_groups/:id' });
					res.status(404).json({ data: null, error: true, message: 'CPT Panel Group does not exist!' });
				} else {
					const [updated] = await CPTPanelGroupFacade.updateById(req.params.id, req.body);
					res.status(200).json({ data: updated, error: null, message: 'CPT Panel Group updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clinical/cpt_panel_groups/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a CPT Panel Group!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clinical/cpt_panel_groups/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a CPT Panel Group!' });
		}
	});

	return router;
};