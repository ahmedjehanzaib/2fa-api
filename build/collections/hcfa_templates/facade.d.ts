import { IHcfaTemplates, IHcfaTemplatesUpdatedData } from './interfaces';
export declare const hcfaTemplatesFacade: {
    create: (data: IHcfaTemplates) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IHcfaTemplatesUpdatedData) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
