import { practiceAccidentTypeQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeAccidentType } from './interfaces';


export const practiceAccidentTypeFacade = {

    create: async (data: IPracticeAccidentType) => {
        const { rows } = await PG_CLIENT.query(practiceAccidentTypeQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceAccidentTypeQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceAccidentTypeQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeAccidentType) => {
        const { rows } = await PG_CLIENT.query(practiceAccidentTypeQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceAccidentTypeQueries.findByPracticeId(practiceId))

        return rows
    }
};