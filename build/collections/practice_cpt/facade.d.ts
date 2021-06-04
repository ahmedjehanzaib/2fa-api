import { IRequestData } from './interfaces';
export declare const practiceCPTFacade: {
    create: (data: IRequestData) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IRequestData) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
