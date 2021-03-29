import { IReferringProvider, IReferringProviderUpdatedData } from './interfaces';
declare const referringProvidersQueries: {
    createAReferingProvider: (rpData: IReferringProvider) => {
        text: string;
        values: (string | null | undefined)[];
    };
    findReferingProviderById: (rpId: string) => {
        text: string;
        values: string[];
    };
    deleteReferingProviderById: (rpId: string) => {
        text: string;
        values: string[];
    };
    updateReferingProviderById: (rpId: string, rpData: IReferringProviderUpdatedData) => {
        text: string;
        values: (string | null | undefined)[];
    };
    findAllReferingProviders: () => {
        text: string;
        values: never[];
    };
};
export { referringProvidersQueries };
