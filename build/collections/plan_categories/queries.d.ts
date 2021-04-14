import { IPlanCategories, IPlanCategoriesUpdatedData } from './interfaces';
export declare const planCategoriesQueries: {
    create: (data: IPlanCategories) => {
        text: string;
        values: any[];
    };
    findById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteById: (Id: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, data: IPlanCategoriesUpdatedData) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
