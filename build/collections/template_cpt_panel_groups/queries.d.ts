import { ITemplateCPTPanelGroup, IPanelGroupCPTs, IPanelGroupCPTsModifier, IPanelGroupCPTsICD } from './interfaces';
export declare const CPTPanelGroupQueries: {
    create: (data: ITemplateCPTPanelGroup) => {
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
    updateById: (Id: string, data: ITemplateCPTPanelGroup) => {
        text: string;
        values: any[];
    };
    findByPractice: (Id: string) => {
        text: string;
        values: string[];
    };
};
export declare const panelGroupCPTsQueries: {
    create: (data: IPanelGroupCPTs) => {
        text: string;
        values: any[];
    };
    findById: (Id: string) => {
        text: string;
        values: string[];
    };
    findByGroupId: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteByGroupId: (Id: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, data: IPanelGroupCPTs) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export declare const panelGroupCPTsModifiers: {
    create: (data: IPanelGroupCPTsModifier) => {
        text: string;
        values: any[];
    };
    findById: (Id: string) => {
        text: string;
        values: string[];
    };
    findBygroupCPTId: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteBygroupCPTIds: (Ids: any) => {
        text: string;
        values: any[];
    };
    updateById: (Id: string, data: IPanelGroupCPTsModifier) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export declare const panelGroupCPTsICDs: {
    create: (data: IPanelGroupCPTsICD) => {
        text: string;
        values: any[];
    };
    findById: (Id: string) => {
        text: string;
        values: string[];
    };
    findBygroupCPTId: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteBygroupCPTIds: (Ids: any) => {
        text: string;
        values: any[];
    };
    updateById: (Id: string, data: IPanelGroupCPTsICD) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
