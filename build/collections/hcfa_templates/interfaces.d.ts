export interface IHcfaTemplates extends IHcfaTemplatesUpdatedData {
    id: string;
}
export interface IHcfaTemplatesUpdatedData {
    [index: string]: any;
    name: string;
    practice_id: string;
    path: string;
}
