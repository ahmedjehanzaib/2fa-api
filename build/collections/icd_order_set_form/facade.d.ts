import { IClinicalTemplateICDOrderSetForm } from './interfaces';
export declare const ICDOrderFormFacade: {
    create: (data: IClinicalTemplateICDOrderSetForm) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IClinicalTemplateICDOrderSetForm) => Promise<any[]>;
    findAll: (Id: string) => Promise<any[]>;
};
