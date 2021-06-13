export interface ITemplateCPTPanelGroup {
    [index: string]: any;
    practice_id: string;
    name: string;
    description?: string;
    cpt_groups?: {
        cpt: string;
        icds: number[];
        modifiers: number[];
    }[];
}
export interface IPanelGroupCPTs {
    id: string;
    template_cpt_panel_group_id: string;
    practice_cpt_id: string;
}
export interface IPanelGroupCPTsModifier {
    id: string;
    template_cpt_panel_groups_cpt_id: string;
    practice_modifier_id: number;
}
export interface IPanelGroupCPTsICD {
    id: string;
    template_cpt_panel_groups_cpt_id: string;
    practice_icd_id: number;
}
