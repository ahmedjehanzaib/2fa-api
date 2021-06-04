import { IQuestionGroup, IQuestionGroupToQuestion } from './interfaces';
export declare const questionGroupQueries: {
    create: (data: IQuestionGroup) => {
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
    updateById: (Id: string, data: IQuestionGroup) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export declare const questionGroupToQuestionQueries: {
    create: (data: IQuestionGroupToQuestion) => {
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
    deleteByGroupId: (Id: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, data: IQuestionGroupToQuestion) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
