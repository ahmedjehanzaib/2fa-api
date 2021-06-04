import { IPracticeResultAlert } from './interfaces';
export declare const practiceResultAlertQueries: {
    create: (data: IPracticeResultAlert) => {
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
    updateById: (Id: string, data: IPracticeResultAlert) => {
        text: string;
        values: any[];
    };
    findByPracticeId: (practiceId: string) => {
        text: string;
        values: string[];
    };
};
