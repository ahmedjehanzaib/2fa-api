import { practicesQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPractice, IPracticeUpdatedData } from './interfaces';


const practicesFacade = {
    createAPractice: async (clientData: IPractice) => {
        const { rows } = await PG_CLIENT.query(practicesQueries.createAPractice(clientData));
        return rows;
    },

    findPracticeById: async (clientId: string) => {
        const { rows } = await PG_CLIENT.query(practicesQueries.findPracticeById(clientId));
        return rows;
    },

    deletePracticeById: async (clientId: string) => {
        const { rows } = await PG_CLIENT.query(practicesQueries.deletePracticesById(clientId));
        return rows;
    },

    updatePracticeById: async (clientId: string, clientData: IPracticeUpdatedData) => {
        const { rows } = await PG_CLIENT.query(practicesQueries.updatePracticeById(clientId, clientData));
        return rows;
    }
};

export { practicesFacade };