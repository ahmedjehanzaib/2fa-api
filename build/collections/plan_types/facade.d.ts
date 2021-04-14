import { IPlanTypes, IPlanTypesUpdatedData } from './interfaces';
export declare const planTypesFacade: {
    create: (data: IPlanTypes) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPlanTypesUpdatedData) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
