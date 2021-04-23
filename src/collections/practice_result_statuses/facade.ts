import { practiceResultStatusQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeResultStatus } from './interfaces';


export const practiceResultStatusFacade = {

    create: async (data: IPracticeResultStatus) => {
        const { rows } = await PG_CLIENT.query(practiceResultStatusQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceResultStatusQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceResultStatusQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeResultStatus) => {
        const { rows } = await PG_CLIENT.query(practiceResultStatusQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceResultStatusQueries.findByPracticeId(practiceId))

        return rows
    }
};