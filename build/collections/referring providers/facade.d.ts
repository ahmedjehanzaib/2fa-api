import { IReferringProvider, IReferringProviderUpdatedData } from './interfaces';
declare const referringProvidersFacade: {
    createAReferingProvider: (rpData: IReferringProvider) => Promise<any[]>;
    findReferingProviderById: (rpId: string) => Promise<any[]>;
    deleteReferingProviderById: (rpId: string) => Promise<any[]>;
    updateReferingProviderById: (rpId: string, rpData: IReferringProviderUpdatedData) => Promise<any[]>;
    findAllReferingProviders: () => Promise<any[]>;
};
export { referringProvidersFacade };
