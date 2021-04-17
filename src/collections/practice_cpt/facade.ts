import { practiceCPTQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeCPT } from './interfaces';


export const practiceCPTFacade = {

    create: async (data: IPracticeCPT) => {
        const { rows } = await PG_CLIENT.query(practiceCPTQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceCPTQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceCPTQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeCPT) => {
        const { rows } = await PG_CLIENT.query(practiceCPTQueries.updateById(Id, data));

        return rows;

    },

    findAll: async () => {
        const { rows } = await PG_CLIENT.query(practiceCPTQueries.findAll())

        return rows
    }
};