import { IQuestionGroup } from './interfaces';
export declare const questionGroupFacade: {
    create: (data: IQuestionGroup) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IQuestionGroup) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
