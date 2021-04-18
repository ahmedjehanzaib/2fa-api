import { INDCUnitOfMeasurement } from './interfaces';
export declare const NDCUnitOfMeasurementQueries: {
    create: (data: INDCUnitOfMeasurement) => {
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
    updateById: (Id: string, data: INDCUnitOfMeasurement) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
