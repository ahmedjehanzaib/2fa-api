import { practiceTypeOfServiceQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticetypeOfService } from './interfaces';


export const practiceTypeOfServiceFacade = {

    create: async (data: IPracticetypeOfService) => {
        const { rows } = await PG_CLIENT.query(practiceTypeOfServiceQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceTypeOfServiceQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceTypeOfServiceQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticetypeOfService) => {
        const { rows } = await PG_CLIENT.query(practiceTypeOfServiceQueries.updateById(Id, data));

        return rows;

    },

    findAll: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceTypeOfServiceQueries.findAll(practiceId))

        return rows
    }
};