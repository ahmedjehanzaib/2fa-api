import { practiceProcedureCategoryQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeProcedureCategory } from './interfaces';


export const practiceProcedureCategoryFacade = {

    create: async (data: IPracticeProcedureCategory) => {
        const { rows } = await PG_CLIENT.query(practiceProcedureCategoryQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceProcedureCategoryQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceProcedureCategoryQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeProcedureCategory) => {
        const { rows } = await PG_CLIENT.query(practiceProcedureCategoryQueries.updateById(Id, data));

        return rows;

    },

    findAll: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceProcedureCategoryQueries.findAll(practiceId))

        return rows
    }
};