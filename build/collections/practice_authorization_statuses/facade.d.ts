import { IPracticeAuthorizationStatuses } from './interfaces';
export declare const practiceAuthorizationStatusFacade: {
    create: (data: IPracticeAuthorizationStatuses) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeAuthorizationStatuses) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
