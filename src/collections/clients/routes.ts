import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import { v4 as uuidv4 } from 'uuid';

import { log } from '../../log';
import { validationSchema } from '../../config/validation';
import { clientsFacade } from './facade';

/**
 * Clients Router
 */
export function clientsRouter(): Router {
	const router = Router();

	// POST /api/v1/clients/
	router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ body: req.body }, validationSchema.createAClient);
			if (validated.error === null) {
                const client = await clientsFacade.createAClient({
                    id: uuidv4(),
                    name: req.body.name,
                    organization_name: req.body.organization_name,
                    tax_id: req.body.tax_id,
                    address_line_1: req.body.address_line_1 ? req.body.address_line_1 : null,
                    address_line_2: req.body.address_line_2 ? req.body.address_line_2 : null,
                    city: req.body.city ? req.body.city : null,
                    state: req.body.state ? req.body.state : null,
                    zipcode: req.body.zipcode ? req.body.zipcode : null,
                    phone_number: req.body.phone_number ? req.body.phone_number : null,
                    email: req.body.email ? req.body.email : null,
                    contact_person: req.body.contact_person ? req.body.contact_person : null,
					fax: req.body.fax ? req.body.fax : null
                });
                res.status(200).json({ data: client, error: null, message: 'Client has been created successfully!' });
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clients/' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in creating a new client!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clients/' });
			res.status(500).json({ data: null, error: err, message: 'Error in creating a new client!' });
		}
	})

    // GET /api/v1/clients/:id
	router.get('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.findAClient);
			if (validated.error === null) {
				const client = await clientsFacade.findClientById(req.params.id);
				if (!client.length) {
					log.warn({ message: 'Client not exist!', statusCode: 404, detail: 'Client not exist!', repo: 'aquila-api', path: '/api/v1/clients/:id' });
					res.status(404).json({ data: null, error: true, message: 'Client not exist!' });
				} else {
					res.status(200).json({ data: client, error: null, message: 'Client fetched successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clients/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in finding a client!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clients/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding a client!' });
		}
    });

	// DELETE /api/v1/clients/:id
	router.delete('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params }, validationSchema.deleteAClient);
			if (validated.error === null) {
				const client = await clientsFacade.findClientById(req.params.id);
				if (!client.length) {
					log.warn({ message: 'Client not exist!', statusCode: 404, detail: 'Client not exist!', repo: 'aquila-api', path: '/api/v1/clients/:id' });
					res.status(404).json({ data: null, error: true, message: 'Client not exist!' });
				} else {
					const deletedClient = await clientsFacade.deleteClientById(req.params.id);
					res.status(200).json({ data: deletedClient, error: null, message: 'Client deleted successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clients/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in deleting a client!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clients/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in deleting a client!' });
		}
    });

	// PUT /api/v1/clients/:id
	router.put('/:id',  async (req: Request, res: Response, _next: NextFunction) => {
		try {
			const validated = JOI.validate({ params: req.params, body: req.body }, validationSchema.updateAClient);
			if (validated.error === null) {
				const client = await clientsFacade.findClientById(req.params.id);
				if (!client.length) {
					log.warn({ message: 'Client not exist!', statusCode: 404, detail: 'Client not exist!', repo: 'aquila-api', path: '/api/v1/clients/:id' });
					res.status(404).json({ data: null, error: true, message: 'Client not exist!' });
				} else {
					const updatedClientInfo = await clientsFacade.updateClientById(req.params.id, req.body);
					res.status(200).json({ data: updatedClientInfo, error: null, message: 'Client updated successfully!' });
				}
			} else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clients/:id' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in updating a client!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clients/:id' });
			res.status(500).json({ data: null, error: err, message: 'Error in updating a client!' });
		}
	});

	// GET /api/v1/clients/
	router.get('/',  async (_req: Request, res: Response, _next: NextFunction) => {
		try {
			const clients = await clientsFacade.findAllClients();
			res.status(200).json({ data: clients, error: null, message: 'All Clients fetched successfully!' });
		} catch (err) {
			log.error({ message: 'Error in finding all client!', statusCode: 500, detail: err, repo: 'aquila-api', path: '/api/v1/clients/' });
			res.status(500).json({ data: null, error: err, message: 'Error in finding all client!' });
		}
    });

	return router;
};