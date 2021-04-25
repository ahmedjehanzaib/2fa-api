import { practiceCaseTypeQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeCaseType } from './interfaces';


export const practiceCaseTypeFacade = {

    create: async (data: IPracticeCaseType) => {
        const { rows } = await PG_CLIENT.query(practiceCaseTypeQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceCaseTypeQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceCaseTypeQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeCaseType) => {
        const { rows } = await PG_CLIENT.query(practiceCaseTypeQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceCaseTypeQueries.findByPracticeId(practiceId))

        return rows
    }
};