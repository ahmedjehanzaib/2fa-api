import { locationQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { ILocation, ILocationUpdatedData } from './interfaces';


const locationsFacade = {
    createALocation: async (locationData: ILocation) => {
        const { rows } = await PG_CLIENT.query(locationQueries.createALocation(locationData));
        return rows;
    },

    findLocationById: async (locationId: string) => {
        const { rows } = await PG_CLIENT.query(locationQueries.findLocationById(locationId));
        return rows;
    },

    deleteLocationById: async (locationId: string) => {
        const { rows } = await PG_CLIENT.query(locationQueries.deleteLocationById(locationId));
        return rows;
    },

    updateLocationById: async (locationId: string, clientData: ILocationUpdatedData) => {
        const { rows } = await PG_CLIENT.query(locationQueries.updateLocationById(locationId, clientData));
        return rows;
    }
};

export { locationsFacade };