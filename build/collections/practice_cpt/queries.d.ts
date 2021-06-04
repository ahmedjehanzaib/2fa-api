import { IPracticeCPT, ICPTToModifier, ICPTToICD } from './interfaces';
export declare const practiceCPTQueries: {
    create: (data: IPracticeCPT) => {
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
    updateById: (Id: string, data: IPracticeCPT) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export declare const CPTToModifierQueries: {
    create: (data: ICPTToModifier) => {
        text: string;
        values: any[];
    };
    findById: (Id: string) => {
        text: string;
        values: string[];
    };
    findByCPTId: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteByCPTId: (CPTId: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, data: ICPTToModifier) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export declare const CPTToICDQueries: {
    create: (data: ICPTToICD) => {
        text: string;
        values: any[];
    };
    findById: (Id: string) => {
        text: string;
        values: string[];
    };
    findByCPTId: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteByCPTId: (CPTId: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, data: ICPTToICD) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
