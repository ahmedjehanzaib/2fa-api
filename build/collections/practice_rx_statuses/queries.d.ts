import { IPracticeRXStatus } from './interfaces';
export declare const practiceRXStatusQueries: {
    create: (data: IPracticeRXStatus) => {
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
    updateById: (Id: string, data: IPracticeRXStatus) => {
        text: string;
        values: any[];
    };
    findByPracticeId: (practiceId: string) => {
        text: string;
        values: string[];
    };
};
