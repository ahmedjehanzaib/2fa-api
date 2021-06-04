import { IPracticeLabTest } from './interfaces';
export declare const practiceLabTestFacade: {
    create: (data: IPracticeLabTest) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeLabTest) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
