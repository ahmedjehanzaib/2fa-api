import { IClinicalTemplateCPTOrderSetForm, IFormCategoriesCPTs, IFormToCategories } from './interfaces';
export declare const CPTOrderFormQueries: {
    create: (data: IClinicalTemplateCPTOrderSetForm) => {
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
    updateById: (Id: string, data: IClinicalTemplateCPTOrderSetForm) => {
        text: string;
        values: any[];
    };
    findAll: (Id: string) => {
        text: string;
        values: string[];
    };
};
export declare const cptOrderSetFormCategoriesCPTs: {
    create: (data: IFormCategoriesCPTs) => {
        text: string;
        values: any[];
    };
    findById: (Id: string) => {
        text: string;
        values: string[];
    };
    findByCategoryId: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteByFormId: (Id: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, data: IFormCategoriesCPTs) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export declare const cptOrderSetFormToCategories: {
    create: (data: IFormToCategories) => {
        text: string;
        values: any[];
    };
    findById: (Id: string) => {
        text: string;
        values: string[];
    };
    findByFormId: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteByFormId: (Id: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, data: IFormToCategories) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
