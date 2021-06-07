import { ITemplate, ITemplateToSection } from './interfaces';
export declare const templateQueries: {
    create: (data: ITemplate) => {
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
    updateById: (Id: string, data: ITemplate) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export declare const templateToSectionQueries: {
    create: (data: ITemplateToSection) => {
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
    deleteByTemplateId: (Id: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, data: ITemplateToSection) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
