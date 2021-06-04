import { IPracticeCaseType } from './interfaces';
export declare const practiceCaseTypeFacade: {
    create: (data: IPracticeCaseType) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeCaseType) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
