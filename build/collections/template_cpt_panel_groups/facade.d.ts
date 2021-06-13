import { ITemplateCPTPanelGroup } from './interfaces';
export declare const CPTPanelGroupFacade: {
    create: (data: ITemplateCPTPanelGroup) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: ITemplateCPTPanelGroup) => Promise<any[]>;
    findAll: (Id: string) => Promise<any[]>;
};
