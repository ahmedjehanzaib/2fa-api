import { IPracticeCaseType } from './interfaces';
export declare const practiceCaseTypeQueries: {
    create: (data: IPracticeCaseType) => {
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
    updateById: (Id: string, data: IPracticeCaseType) => {
        text: string;
        values: any[];
    };
    findByPracticeId: (practiceId: string) => {
        text: string;
        values: string[];
    };
};