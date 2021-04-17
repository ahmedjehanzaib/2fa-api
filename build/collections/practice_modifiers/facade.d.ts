import { IPracticeModifier } from './interfaces';
export declare const practiceModifierFacade: {
    create: (data: IPracticeModifier) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeModifier) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
