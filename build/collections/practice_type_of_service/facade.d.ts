import { IPracticetypeOfService } from './interfaces';
export declare const practiceTypeOfServiceFacade: {
    create: (data: IPracticetypeOfService) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticetypeOfService) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
