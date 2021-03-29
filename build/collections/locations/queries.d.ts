import { ILocation } from './interfaces';
declare const locationQueries: {
    createALocation: (locationData: ILocation) => {
        text: string;
        values: (string | number | boolean | null | undefined)[];
    };
    findLocationById: (locationId: string) => {
        text: string;
        values: string[];
    };
    deleteLocationById: (locationId: string) => {
        text: string;
        values: string[];
    };
    updateLocationById: (locationId: string, locationData: any) => {
        text: string;
        values: any[];
    };
};
export { locationQueries };
