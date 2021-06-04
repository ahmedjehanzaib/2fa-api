import { IPracticeResultStatus } from './interfaces';
export declare const practiceResultStatusFacade: {
    create: (data: IPracticeResultStatus) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeResultStatus) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
