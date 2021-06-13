import { IPracticeMacros } from './interfaces';
export declare const practiceMacrosFacade: {
    create: (data: IPracticeMacros) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeMacros) => Promise<any[]>;
    findAll: (Id: string) => Promise<any[]>;
};
