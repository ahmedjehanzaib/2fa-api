import { practiceTaskTypeQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeTaskType } from './interfaces';


export const practiceTaskTypeFacade = {

    create: async (data: IPracticeTaskType) => {
        const { rows } = await PG_CLIENT.query(practiceTaskTypeQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceTaskTypeQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceTaskTypeQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeTaskType) => {
        const { rows } = await PG_CLIENT.query(practiceTaskTypeQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceTaskTypeQueries.findByPracticeId(practiceId))

        return rows
    }
};