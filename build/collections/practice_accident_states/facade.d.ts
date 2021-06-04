import { IPracticeAccidentState } from './interfaces';
export declare const practiceAccidentStateFacade: {
    create: (data: IPracticeAccidentState) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeAccidentState) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
