import { INDCUnitOfMeasurement } from './interfaces';
export declare const NDCUnitOfMeasurementFacade: {
    create: (data: INDCUnitOfMeasurement) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: INDCUnitOfMeasurement) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
