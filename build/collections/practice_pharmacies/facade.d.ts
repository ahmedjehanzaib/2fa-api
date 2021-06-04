import { IPracticePharmacy } from './interfaces';
export declare const practicePharmacyFacade: {
    create: (data: IPracticePharmacy) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticePharmacy) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
