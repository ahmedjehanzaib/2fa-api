import { IPlanCategories, IPlanCategoriesUpdatedData } from './interfaces';
export declare const planCategoriesFacade: {
    create: (data: IPlanCategories) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPlanCategoriesUpdatedData) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
