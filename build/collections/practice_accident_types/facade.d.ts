import { IPracticeAccidentType } from './interfaces';
export declare const practiceAccidentTypeFacade: {
    create: (data: IPracticeAccidentType) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeAccidentType) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
