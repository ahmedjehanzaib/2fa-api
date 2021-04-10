import { ILocation, ILocationUpdatedData, ILocationPaymentAddress } from './interfaces';
export declare const locationQueries: {
    create: (data: ILocation) => {
        text: string;
        values: any[];
    };
    findById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteById: (Id: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, locationData: ILocationUpdatedData) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export declare const locationPaymentAddressQueries: {
    create: (data: ILocationPaymentAddress) => {
        text: string;
        values: any[];
    };
    findByLocationId: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteLocationById: (Id: string) => {
        text: string;
        values: string[];
    };
    updateByLocationId: (Id: string, locationData: ILocationPaymentAddress) => {
        text: string;
        values: any[];
    };
};
