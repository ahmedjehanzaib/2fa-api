import { IClinicalTemplateCPTOrderSetForm } from './interfaces';
export declare const CPTOrderFormFacade: {
    create: (data: IClinicalTemplateCPTOrderSetForm) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IClinicalTemplateCPTOrderSetForm) => Promise<any[]>;
    findAll: (Id: string) => Promise<any[]>;
};
