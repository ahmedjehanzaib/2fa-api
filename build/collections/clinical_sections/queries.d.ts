import { ISection, ISectionToQuestionGroup } from './interfaces';
export declare const sectionQueries: {
    create: (data: ISection) => {
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
    updateById: (Id: string, data: ISection) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export declare const sectionToQuestionGroupQueries: {
    create: (data: ISectionToQuestionGroup) => {
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
    deleteBySectionId: (Id: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, data: ISectionToQuestionGroup) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
