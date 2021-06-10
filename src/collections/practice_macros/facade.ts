import { practiceMacrosQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeMacros } from './interfaces';


export const practiceMacrosFacade = {

    create: async (data: IPracticeMacros) => {
            const { rows } = await PG_CLIENT.query(practiceMacrosQueries.create(data))

            return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceMacrosQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {

            const { rows } = await PG_CLIENT.query(practiceMacrosQueries.deleteById(Id));

            return rows;
       
    },

    updateById: async (Id: string, data: IPracticeMacros) => {

            const { rows } = await PG_CLIENT.query(practiceMacrosQueries.updateById(Id, data));

            return rows;

    },
    findAll: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceMacrosQueries.findByPracticeId(Id))

        return rows
    }
};