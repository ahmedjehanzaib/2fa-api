import { IPracticePatientReferralSource } from './interfaces';
export declare const practicePatientReferralSourceFacade: {
    create: (data: IPracticePatientReferralSource) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticePatientReferralSource) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
