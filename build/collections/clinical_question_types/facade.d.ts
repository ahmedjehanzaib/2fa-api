import { IQuestionType } from './interfaces';
export declare const questionTypeFacade: {
    create: (data: IQuestionType) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IQuestionType) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
