import { IPracticehealthEducation } from './interfaces';
export declare const healthEducationFacade: {
    create: (data: IPracticehealthEducation) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticehealthEducation) => Promise<any[]>;
    findAll: (Id: string) => Promise<any[]>;
};
