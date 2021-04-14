import { planTypesQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPlanTypes, IPlanTypesUpdatedData } from './interfaces';


export const planTypesFacade = {

    create: async (data: IPlanTypes) => {
        const { rows } = await PG_CLIENT.query(planTypesQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(planTypesQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(planTypesQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPlanTypesUpdatedData) => {
        const { rows } = await PG_CLIENT.query(planTypesQueries.updateById(Id, data));

        return rows;

    },

    findAll: async () => {
        const { rows } = await PG_CLIENT.query(planTypesQueries.findAll())

        return rows
    }
};