import { practicePreferredCommunicationQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticePreferredCommunication } from './interfaces';


export const practicePreferredCommunicationFacade = {

    create: async (data: IPracticePreferredCommunication) => {
        const { rows } = await PG_CLIENT.query(practicePreferredCommunicationQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practicePreferredCommunicationQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practicePreferredCommunicationQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticePreferredCommunication) => {
        const { rows } = await PG_CLIENT.query(practicePreferredCommunicationQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practicePreferredCommunicationQueries.findByPracticeId(practiceId))

        return rows
    }
};