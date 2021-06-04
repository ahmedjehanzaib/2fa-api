import { IQuestion } from './interfaces';
export declare const questionFacade: {
    create: (data: IQuestion) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IQuestion) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
