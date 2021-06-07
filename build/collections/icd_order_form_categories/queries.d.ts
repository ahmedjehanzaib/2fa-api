import { IFormCategories } from './interfaces';
export declare const categoriesQueries: {
    create: (data: IFormCategories) => {
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
    updateById: (Id: string, data: IFormCategories) => {
        text: string;
        values: any[];
    };
    findByPractice: (Id: string) => {
        text: string;
        values: string[];
    };
};
