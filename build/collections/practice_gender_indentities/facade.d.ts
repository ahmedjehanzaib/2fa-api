import { IPracticeGenderIndentity } from './interfaces';
export declare const practiceGenderIdentityFacade: {
    create: (data: IPracticeGenderIndentity) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeGenderIndentity) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
