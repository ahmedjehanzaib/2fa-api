import { IPracticePatientIntakeForm } from './interfaces';
export declare const patientIntakeFormFacade: {
    create: (data: IPracticePatientIntakeForm) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticePatientIntakeForm) => Promise<any[]>;
    findAll: (Id: string) => Promise<any[]>;
};
