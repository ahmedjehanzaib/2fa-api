import { practiceAccidentStateQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeAccidentState } from './interfaces';


export const practiceAccidentStateFacade = {

    create: async (data: IPracticeAccidentState) => {
        const { rows } = await PG_CLIENT.query(practiceAccidentStateQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceAccidentStateQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceAccidentStateQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeAccidentState) => {
        const { rows } = await PG_CLIENT.query(practiceAccidentStateQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceAccidentStateQueries.findByPracticeId(practiceId))

        return rows
    }
};