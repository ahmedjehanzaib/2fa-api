import { practiceICDQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeICD } from './interfaces';


export const practiceICDFacade = {

    create: async (data: IPracticeICD) => {
        const { rows } = await PG_CLIENT.query(practiceICDQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceICDQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceICDQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeICD) => {
        const { rows } = await PG_CLIENT.query(practiceICDQueries.updateById(Id, data));

        return rows;

    },

    findAll: async () => {
        const { rows } = await PG_CLIENT.query(practiceICDQueries.findAll())

        return rows
    }
};