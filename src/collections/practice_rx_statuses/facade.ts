import { practiceRXStatusQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeRXStatus } from './interfaces';


export const practiceRXStatusFacade = {

    create: async (data: IPracticeRXStatus) => {
        const { rows } = await PG_CLIENT.query(practiceRXStatusQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceRXStatusQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceRXStatusQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeRXStatus) => {
        const { rows } = await PG_CLIENT.query(practiceRXStatusQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceRXStatusQueries.findByPracticeId(practiceId))

        return rows
    }
};