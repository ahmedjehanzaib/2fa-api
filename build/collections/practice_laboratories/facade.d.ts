import { IPracticeLaboratory } from './interfaces';
export declare const practiceLaboratoryFacade: {
    create: (data: IPracticeLaboratory) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeLaboratory) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
