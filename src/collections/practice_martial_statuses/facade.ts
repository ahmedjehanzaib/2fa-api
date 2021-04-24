import { practiceMartialStatusQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeMartialStatus } from './interfaces';


export const practiceMartialStatusFacade = {

    create: async (data: IPracticeMartialStatus) => {
        const { rows } = await PG_CLIENT.query(practiceMartialStatusQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceMartialStatusQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceMartialStatusQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeMartialStatus) => {
        const { rows } = await PG_CLIENT.query(practiceMartialStatusQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceMartialStatusQueries.findByPracticeId(practiceId))

        return rows
    }
};