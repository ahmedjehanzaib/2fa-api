import { IClient } from './interfaces';
declare const clientsQueries: {
    createAClient: (clientData: IClient) => {
        text: string;
        values: (string | null | undefined)[];
    };
    findClientById: (clientId: string) => {
        text: string;
        values: string[];
    };
    deleteClientById: (clientId: string) => {
        text: string;
        values: string[];
    };
    updateClientById: (clientId: string, clientData: any) => {
        text: string;
        values: any[];
    };
    findAllClients: () => {
        text: string;
        values: never[];
    };
};
export { clientsQueries };
