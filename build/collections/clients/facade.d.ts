import { IClient, IClientUpdatedData } from './interfaces';
declare const clientsFacade: {
    createAClient: (clientData: IClient) => Promise<any[]>;
    findClientById: (clientId: string) => Promise<any[]>;
    deleteClientById: (clientId: string) => Promise<any[]>;
    updateClientById: (clientId: string, clientData: IClientUpdatedData) => Promise<any[]>;
    findAllClients: () => Promise<any[]>;
};
export { clientsFacade };
