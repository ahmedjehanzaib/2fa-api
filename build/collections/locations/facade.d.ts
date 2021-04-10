import { IInsertData, IUpdateData } from './interfaces';
declare const locationsFacade: {
    createALocation: (locationData: IInsertData) => Promise<any[]>;
    findLocationById: (locationId: string) => Promise<any[]>;
    deleteLocationById: (locationId: string) => Promise<any[]>;
    updateLocationById: (locationId: string, data: IUpdateData) => Promise<any[]>;
};
export { locationsFacade };
