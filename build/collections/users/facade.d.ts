import { IInsertData, IUpdateData } from './interfaces';
export declare const usersFacade: {
    create: (data: IInsertData) => Promise<any[]>;
    findById: (id: string) => Promise<any[]>;
    deleteById: (id: string) => Promise<any[]>;
    updateById: (id: string, data: IUpdateData) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
