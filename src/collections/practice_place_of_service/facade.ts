import { practicePlaceOfServiceQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticePlaceOfService } from './interfaces';


export const practicePlaceOfServiceFacade = {

    create: async (data: IPracticePlaceOfService) => {
        const { rows } = await PG_CLIENT.query(practicePlaceOfServiceQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practicePlaceOfServiceQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practicePlaceOfServiceQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticePlaceOfService) => {
        const { rows } = await PG_CLIENT.query(practicePlaceOfServiceQueries.updateById(Id, data));

        return rows;

    },

    findAll: async () => {
        const { rows } = await PG_CLIENT.query(practicePlaceOfServiceQueries.findAll())

        return rows
    }
};