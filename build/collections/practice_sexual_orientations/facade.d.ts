import { IPracticeSexualOrientation } from './interfaces';
export declare const practiceSexualOrientationFacade: {
    create: (data: IPracticeSexualOrientation) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeSexualOrientation) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
