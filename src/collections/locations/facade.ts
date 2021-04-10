import { locationQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IInsertData, IUpdateData } from './interfaces';


const locationsFacade = {
    createALocation: async (locationData: IInsertData) => {
        const { rows } = await PG_CLIENT.query(locationQueries.create(locationData));
        return rows;
    },

    findLocationById: async (locationId: string) => {
        const { rows } = await PG_CLIENT.query(locationQueries.findById(locationId));
        return rows;
    },

    deleteLocationById: async (locationId: string) => {
        const { rows } = await PG_CLIENT.query(locationQueries.deleteById(locationId));
        return rows;
    },

    updateLocationById: async (locationId: string, data: IUpdateData) => {
        const { rows } = await PG_CLIENT.query(locationQueries.updateById(locationId, data));
        return rows;
    }
};

export { locationsFacade };