import { practiceQualifierQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeQualifier } from './interfaces';


export const practiceQualifierFacade = {

    create: async (data: IPracticeQualifier) => {
        const { rows } = await PG_CLIENT.query(practiceQualifierQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceQualifierQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceQualifierQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeQualifier) => {
        const { rows } = await PG_CLIENT.query(practiceQualifierQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceQualifierQueries.findByPracticeId(practiceId))

        return rows
    }
};