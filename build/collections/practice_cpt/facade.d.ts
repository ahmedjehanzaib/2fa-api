import { IPracticeCPT } from './interfaces';
export declare const practiceCPTFacade: {
    create: (data: IPracticeCPT) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeCPT) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
