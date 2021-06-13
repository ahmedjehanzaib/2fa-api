import { ILetterCategories } from './interfaces';
export declare const letterCategoriesFacade: {
    create: (data: ILetterCategories) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: ILetterCategories) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
