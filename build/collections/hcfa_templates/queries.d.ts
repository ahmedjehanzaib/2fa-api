import { IHcfaTemplates, IHcfaTemplatesUpdatedData } from './interfaces';
export declare const hcfaTemplatesQueries: {
    create: (data: IHcfaTemplates) => {
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
    updateById: (Id: string, data: IHcfaTemplatesUpdatedData) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
