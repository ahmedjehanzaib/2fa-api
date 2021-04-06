import { IInsertData, IUpdateData } from './interfaces';
declare const providersFacade: {
    createAProvider: (data: IInsertData) => Promise<any[]>;
    findProviderById: (Id: string) => Promise<any[]>;
    deleteProviderById: (Id: string) => Promise<any[]>;
    updateProviderById: (Id: string, data: IUpdateData) => Promise<any[]>;
    findAllProviders: () => Promise<any[]>;
};
export { providersFacade };
