import { IPracticeResultAlert } from './interfaces';
export declare const practiceResultAlertFacade: {
    create: (data: IPracticeResultAlert) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeResultAlert) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
