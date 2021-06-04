import { IPracticeProviderSpeciality } from './interfaces';
export declare const practiceProviderSpecialityFacade: {
    create: (data: IPracticeProviderSpeciality) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeProviderSpeciality) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
