import { IPracticeProcedureCategory } from './interfaces';
export declare const practiceProcedureCategoryQueries: {
    create: (data: IPracticeProcedureCategory) => {
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
    updateById: (Id: string, data: IPracticeProcedureCategory) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
