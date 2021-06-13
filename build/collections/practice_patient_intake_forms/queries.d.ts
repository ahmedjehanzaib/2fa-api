import { IPracticePatientIntakeForm } from './interfaces';
export declare const patientIntakeFormQueries: {
    create: (data: IPracticePatientIntakeForm) => {
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
    updateById: (Id: string, data: IPracticePatientIntakeForm) => {
        text: string;
        values: any[];
    };
    findByPracticeId: (Id: string) => {
        text: string;
        values: string[];
    };
};
