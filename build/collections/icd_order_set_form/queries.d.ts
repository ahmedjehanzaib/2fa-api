import { IClinicalTemplateICDOrderSetForm, IFormCategoriesICDs, IFormToCategories } from './interfaces';
export declare const ICDOrderFormQueries: {
    create: (data: IClinicalTemplateICDOrderSetForm) => {
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
    updateById: (Id: string, data: IClinicalTemplateICDOrderSetForm) => {
        text: string;
        values: any[];
    };
    findAll: (Id: string) => {
        text: string;
        values: string[];
    };
};
export declare const ICDOrderSetFormCategoriesICDs: {
    create: (data: IFormCategoriesICDs) => {
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
    findByCategoryAndFormId: (categoryId: any, formId: any) => {
        text: string;
        values: any[];
    };
    deleteById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteByFormId: (Id: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, data: IFormCategoriesICDs) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export declare const ICDOrderSetFormToCategories: {
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
