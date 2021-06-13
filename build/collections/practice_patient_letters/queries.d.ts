import { IPatientFields, IPatientLetter } from './interfaces';
export declare const patientLetterQueries: {
    create: (data: IPatientLetter) => {
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
    updateById: (Id: string, data: IPatientLetter) => {
        text: string;
        values: any[];
    };
    findAll: (Id: string) => {
        text: string;
        values: string[];
    };
};
export declare const letterFieldsQueries: {
    create: (data: IPatientFields) => {
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
    deleteByLetterId: (Id: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, data: IPatientFields) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
