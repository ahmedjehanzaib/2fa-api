import { NDCUnitOfMeasurementQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { INDCUnitOfMeasurement } from './interfaces';


export const NDCUnitOfMeasurementFacade = {

    create: async (data: INDCUnitOfMeasurement) => {
        const { rows } = await PG_CLIENT.query(NDCUnitOfMeasurementQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(NDCUnitOfMeasurementQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(NDCUnitOfMeasurementQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: INDCUnitOfMeasurement) => {
        const { rows } = await PG_CLIENT.query(NDCUnitOfMeasurementQueries.updateById(Id, data));

        return rows;

    },

    findAll: async () => {
        const { rows } = await PG_CLIENT.query(NDCUnitOfMeasurementQueries.findAll())

        return rows
    }
};