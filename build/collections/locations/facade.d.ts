import { ILocation, ILocationUpdatedData } from './interfaces';
declare const locationsFacade: {
    createALocation: (locationData: ILocation) => Promise<any[]>;
    findLocationById: (locationId: string) => Promise<any[]>;
    deleteLocationById: (locationId: string) => Promise<any[]>;
    updateLocationById: (locationId: string, clientData: ILocationUpdatedData) => Promise<any[]>;
};
export { locationsFacade };
