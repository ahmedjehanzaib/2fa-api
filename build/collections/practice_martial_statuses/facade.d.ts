import { IPracticeMartialStatus } from './interfaces';
export declare const practiceMartialStatusFacade: {
    create: (data: IPracticeMartialStatus) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeMartialStatus) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
