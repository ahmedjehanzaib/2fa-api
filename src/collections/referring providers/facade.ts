import { referringProvidersQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IReferringProvider, IReferringProviderUpdatedData } from './interfaces';


const referringProvidersFacade = {
    createAReferingProvider: async (rpData: IReferringProvider) => {
        const { rows } = await PG_CLIENT.query(referringProvidersQueries.createAReferingProvider(rpData));
        return rows;
    },

    findReferingProviderById: async (rpId: string) => {
        const { rows } = await PG_CLIENT.query(referringProvidersQueries.findReferingProviderById(rpId));
        return rows;
    },

    deleteReferingProviderById: async (rpId: string) => {
        const { rows } = await PG_CLIENT.query(referringProvidersQueries.deleteReferingProviderById(rpId));
        return rows;
    },

    updateReferingProviderById: async (rpId: string, rpData: IReferringProviderUpdatedData) => {
        const { rows } = await PG_CLIENT.query(referringProvidersQueries.updateReferingProviderById(rpId, rpData));
        return rows;
    },

    findAllReferingProviders: async () => {
        const { rows } = await PG_CLIENT.query(referringProvidersQueries.findAllReferingProviders());
        return rows;
    },
};

export { referringProvidersFacade };