import { IPracticeProcedureCategory } from './interfaces';
export declare const practiceProcedureCategoryFacade: {
    create: (data: IPracticeProcedureCategory) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeProcedureCategory) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
