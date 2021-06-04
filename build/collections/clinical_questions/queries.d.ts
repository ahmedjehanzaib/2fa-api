import { IQuestion, IQuestionOption } from './interfaces';
export declare const questionQueries: {
    create: (data: IQuestion) => {
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
    updateById: (Id: string, data: IQuestion) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export declare const questionOptionsQueries: {
    create: (data: IQuestionOption) => {
        text: string;
        values: any[];
    };
    findById: (Id: string) => {
        text: string;
        values: string[];
    };
    findByQuestionId: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteByQuestionId: (Id: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, data: IQuestionOption) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
