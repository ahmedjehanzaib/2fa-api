import { IPracticeClass } from './interfaces';
export declare const practiceClassFacade: {
    create: (data: IPracticeClass) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeClass) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
