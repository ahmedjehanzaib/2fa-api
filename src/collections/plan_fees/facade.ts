import { planFeesQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPlanFees, IPlanFeesUpdatedData } from './interfaces';


export const planFeesFacade = {

    create: async (data: IPlanFees) => {
        const { rows } = await PG_CLIENT.query(planFeesQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(planFeesQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(planFeesQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPlanFeesUpdatedData) => {
        const { rows } = await PG_CLIENT.query(planFeesQueries.updateById(Id, data));

        return rows;

    },

    findAll: async () => {
        const { rows } = await PG_CLIENT.query(planFeesQueries.findAll())

        return rows
    }
};