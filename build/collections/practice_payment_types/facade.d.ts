import { IPracticePaymentType } from './interfaces';
export declare const practicePaymentTypeFacade: {
    create: (data: IPracticePaymentType) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticePaymentType) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
