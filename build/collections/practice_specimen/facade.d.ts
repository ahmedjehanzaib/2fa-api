import { IPracticeSpecimen } from './interfaces';
export declare const practiceSpecimenFacade: {
    create: (data: IPracticeSpecimen) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeSpecimen) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
