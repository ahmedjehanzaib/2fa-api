import { IPracticeClinicalVisitStatus } from './interfaces';
export declare const practiceClinicalVisitStatusFacade: {
    create: (data: IPracticeClinicalVisitStatus) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeClinicalVisitStatus) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
