import { ISection } from './interfaces';
export declare const sectionFacade: {
    create: (data: ISection) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: ISection) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
