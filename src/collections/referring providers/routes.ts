import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import * as uuidv4 from 'uuid/v4';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { referringProvidersFacade } from './facade';

/**
 * Clients Router
 */
export function referringProvidersRouter(): Router {
	const router = Router();

	// POST /api/v1/clients/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAReferringProvider);
			if (validated.error === null) {
                const client = await referringProvidersFacade.createAReferingProvider({
                    id: uuidv4(),
                    ...req.body
                });
                res.status(200).json({ data: client, error: null, message: 'Referring Provider has been created successfully!' });
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/referring_providers/' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new referring provider!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/referring_providers/' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a referring provider!' });
		}
	})

    // GET /api/v1/clients/:id
	router.get('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAReferringProvider);
			if (validated.error === null) {
				const client = await referringProvidersFacade.findReferingProviderById(req.params.id);
				if (!client.length) {
					log.warn({ message: 'Referring provider not exist!', statusCode: 404, detail: 'Referring provider not exist!', repo: 'aquila-api', path: '/api/v1/referring_providers/:id' });
					res.status(404).json({ data: null, error: true, message: 'Referring provider not exist!' });
				} else {
					res.status(200).json({ data: client, error: null, message: 'Referring provider fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/referring_providers/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a referring provider!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/referring_providers/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a referring provider!' });
		}
    });

	// DELETE /api/v1/clients/:id
	router.delete('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAReferringProvider);
			if (validated.error === null) {
				const client = await referringProvidersFacade.findReferingProviderById(req.params.id);
				if (!client.length) {
					log.warn({ message: 'Referring provider not exist!', statusCode: 404, detail: 'Referring provider not exist!', repo: 'aquila-api', path: '/api/v1/referring_providers/:id' });
					res.status(404).json({ data: null, error: true, message: 'Referring provider not exist!' });
				} else {
					const deletedClient = await referringProvidersFacade.deleteReferingProviderById(req.params.id);
					res.status(200).json({ data: deletedClient, error: null, message: 'Client deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/referring_providers/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a referring provider!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/referring_providers/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a referring provider!' });
		}
    });

	// PUT /api/v1/clients/:id
	router.put('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAReferringProvider);
			if (validated.error === null) {
				const client = await referringProvidersFacade.findReferingProviderById(req.params.id);
				if (!client.length) {
					log.warn({ message: 'Referring provider not exist!', statusCode: 404, detail: 'Referring provider not exist!', repo: 'aquila-api', path: '/api/v1/referring_providers/:id' });
					res.status(404).json({ data: null, error: true, message: 'Referring provider not exist!' });
				} else {
					const updatedClientInfo = await referringProvidersFacade.updateReferingProviderById(req.params.id, req.body);
					res.status(200).json({ data: updatedClientInfo, error: null, message: 'Referring provider updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/referring_providers/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a referring provider!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/referring_providers/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a Referring provider!' });
		}
	});

	// GET /api/v1/clients/
	router.get('/',  async (_req: Request, res: Response, _next: NextFunction) => {
		try {
			const clients = await referringProvidersFacade.findAllReferingProviders();
			res.status(200).json({ data: clients, error: null, message: 'All referring providers fetched successfully!' });
		} catch (err) {
			log.error({ message: 'Error in finding all referring provider!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/referring_providers/' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding all referring providers!' });
		}
    });

	return router;
};