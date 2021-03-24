import { clientsQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IClient, IClientUpdatedData } from './interfaces';


const clientsFacade = {
	createAClient: async (clientData: IClient) => {
        const { rows } = await PG_CLIENT.query(clientsQueries.createAClient(clientData));
        return rows;
	},

    findClientById: async (clientId: string) => {
        const { rows } = await PG_CLIENT.query(clientsQueries.findClientById(clientId));
        return rows;
    },

    deleteClientById: async (clientId: string) => {
        const { rows } = await PG_CLIENT.query(clientsQueries.deleteClientById(clientId));
        return rows;
    },

    updateClientById: async (clientId: string, clientData: IClientUpdatedData) => {
		const { rows } = await PG_CLIENT.query(clientsQueries.updateClientById(clientId, clientData));
		return rows;
    },

    findAllClients: async () => {
        const { rows } = await PG_CLIENT.query(clientsQueries.findAllClients());
        return rows;
    },
};

export { clientsFacade };