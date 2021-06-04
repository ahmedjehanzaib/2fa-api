import { IPracticeTemplateType } from './interfaces';
export declare const practiceTemplateTypeFacade: {
    create: (data: IPracticeTemplateType) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeTemplateType) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
