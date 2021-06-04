import { IPracticeQualifier } from './interfaces';
export declare const practiceQualifierFacade: {
    create: (data: IPracticeQualifier) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeQualifier) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
