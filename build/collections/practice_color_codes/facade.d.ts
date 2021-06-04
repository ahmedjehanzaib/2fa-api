import { IPracticeColorCode } from './interfaces';
export declare const practiceColorCodeFacade: {
    create: (data: IPracticeColorCode) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeColorCode) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
