import { IPracticePlaceOfService } from './interfaces';
export declare const practicePlaceOfServiceFacade: {
    create: (data: IPracticePlaceOfService) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticePlaceOfService) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
