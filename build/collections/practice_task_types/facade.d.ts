import { IPracticeTaskType } from './interfaces';
export declare const practiceTaskTypeFacade: {
    create: (data: IPracticeTaskType) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeTaskType) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
