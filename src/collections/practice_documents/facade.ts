import { practiceDocumentQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeDocument } from './interfaces';


export const practiceDocumentFacade = {

    create: async (data: IPracticeDocument) => {
        const { rows } = await PG_CLIENT.query(practiceDocumentQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceDocumentQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceDocumentQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeDocument) => {
        const { rows } = await PG_CLIENT.query(practiceDocumentQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceDocumentQueries.findByPracticeId(practiceId))

        return rows
    }
};