import { InsertData, UpdateData } from './interfaces';
export declare const practicePlanFacade: {
    create: (data: InsertData) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: UpdateData) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
