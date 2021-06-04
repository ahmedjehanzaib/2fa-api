import { IPracticeRXStatus } from './interfaces';
export declare const practiceRXStatusFacade: {
    create: (data: IPracticeRXStatus) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeRXStatus) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
