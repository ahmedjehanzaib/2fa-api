import { IPatientLetter } from './interfaces';
export declare const patientLetterFacade: {
    create: (data: IPatientLetter) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPatientLetter) => Promise<any[]>;
    findAll: (Id: string) => Promise<any[]>;
};
