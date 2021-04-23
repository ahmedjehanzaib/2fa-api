import { practiceLabTestQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeLabTest } from './interfaces';


export const practiceLabTestFacade = {

    create: async (data: IPracticeLabTest) => {
        const { rows } = await PG_CLIENT.query(practiceLabTestQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceLabTestQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceLabTestQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeLabTest) => {
        const { rows } = await PG_CLIENT.query(practiceLabTestQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceLabTestQueries.findByPracticeId(practiceId))

        return rows
    }
};