import { IFormCategories } from './interfaces';
export declare const categoriesFacade: {
    create: (data: IFormCategories) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IFormCategories) => Promise<any[]>;
    findByPractice: (Id: string) => Promise<any[]>;
};
