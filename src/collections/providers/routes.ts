import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { providersFacade } from './facade';

/**
 * Clients Router
 */
export function providersRouter(): Router {
	const router = Router();

	// POST /api/v1/clients/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAProvider);
			if (validated.error === null) {
                const client = await providersFacade.createAProvider({
                    id: uuidv4(),
                    ...req.body
                });
                res.status(200).json({ data: client, error: null, message: ' Provider has been created successfully!' });
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/providers/' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new  provider!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/providers/' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a  provider!' });
		}
	})

    // GET /api/v1/clients/:id
	router.get('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAProvider);
			if (validated.error === null) {
				const rp = await providersFacade.findProviderById(req.params.id);
				if (!rp.length) {
					log.warn({ message: ' provider not exist!', statusCode: 404, detail: ' provider not exist!', repo: 'aquila-api', path: '/api/v1/providers/:id' });
					res.status(404).json({ data: null, error: true, message: ' provider not exist!' });
				} else {
					res.status(200).json({ data: rp[0], error: null, message: ' provider fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/providers/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a  provider!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/providers/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a  provider!' });
		}
    });

	// DELETE /api/v1/clients/:id
	router.delete('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAProvider);
			if (validated.error === null) {
				const data = await providersFacade.findProviderById(req.params.id);
				if (!data.length) {
					log.warn({ message: ' provider not exist!', statusCode: 404, detail: ' provider not exist!', repo: 'aquila-api', path: '/api/v1/providers/:id' });
					res.status(404).json({ data: null, error: true, message: ' provider not exist!' });
				} else {
					const deletedClient = await providersFacade.deleteProviderById(req.params.id);
					res.status(200).json({ data: deletedClient, error: null, message: 'Client deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/providers/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a  provider!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/providers/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a  provider!' });
		}
    });

	// PUT /api/v1/clients/:id
	router.put('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAProvider);
			if (validated.error === null) {
				const client = await providersFacade.findProviderById(req.params.id);
			
				if (!client.length) {
					log.warn({ message: ' provider not exist!', statusCode: 404, detail: ' provider not exist!', repo: 'aquila-api', path: '/api/v1/providers/:id' });
					res.status(404).json({ data: null, error: true, message: ' provider not exist!' });
				} else {
					const updated = await providersFacade.updateProviderById(req.params.id, req.body);
					res.status(200).json({ data: updated, error: null, message: ' provider updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/providers/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a  provider!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/providers/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a  provider!' });
		}
	});

	// GET /api/v1/clients/
	router.get('/',  async (_req: Request, res: Response, _next: NextFunction) => {
		try {
			const clients = await providersFacade.findAllProviders();
			res.status(200).json({ data: clients, error: null, message: 'All  providers fetched successfully!' });
		} catch (err) {
			log.error({ message: 'Error in finding all  provider!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/providers/' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding all  providers!' });
		}
    });

	return router;
};