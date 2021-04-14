import { IPlanTypes, IPlanTypesUpdatedData } from './interfaces';
export declare const planTypesQueries: {
    create: (data: IPlanTypes) => {
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
    updateById: (Id: string, data: IPlanTypesUpdatedData) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
