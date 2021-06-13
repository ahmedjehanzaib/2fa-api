import { IPracticehealthEducation } from './interfaces';
export declare const healthEducationQueries: {
    create: (data: IPracticehealthEducation) => {
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
    updateById: (Id: string, data: IPracticehealthEducation) => {
        text: string;
        values: any[];
    };
    findByPracticeId: (Id: string) => {
        text: string;
        values: string[];
    };
};
