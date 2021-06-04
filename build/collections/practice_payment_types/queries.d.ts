import { IPracticePaymentType } from './interfaces';
export declare const practiceClassQueries: {
    create: (data: IPracticePaymentType) => {
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
    updateById: (Id: string, data: IPracticePaymentType) => {
        text: string;
        values: any[];
    };
    findByPracticeId: (practiceId: string) => {
        text: string;
        values: string[];
    };
};
