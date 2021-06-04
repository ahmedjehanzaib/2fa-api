import { IAlertType } from './interfaces';
export declare const practiceAlertTypeFacade: {
    create: (data: IAlertType) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IAlertType) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
