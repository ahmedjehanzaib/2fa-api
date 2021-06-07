import { ITemplate } from './interfaces';
export declare const templateFacade: {
    create: (data: ITemplate) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: ITemplate) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
