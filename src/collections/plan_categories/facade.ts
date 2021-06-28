import { planCategoriesQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPlanCategories, IPlanCategoriesUpdatedData } from './interfaces';


export const planCategoriesFacade = {

    create: async (data: IPlanCategories) => {
        const { rows } = await PG_CLIENT.query(planCategoriesQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(planCategoriesQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(planCategoriesQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPlanCategoriesUpdatedData) => {
        const { rows } = await PG_CLIENT.query(planCategoriesQueries.updateById(Id, data));

        return rows;

    },

    findAll: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(planCategoriesQueries.findAll(Id))

        return rows
    }
};