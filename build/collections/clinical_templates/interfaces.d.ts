export interface ITemplate {
    [index: string]: any;
    general_item_template_type_id: number;
    general_item_practice_provider_speciality: number;
    name: number;
    letter_head_picture: string;
    sections?: any[];
}
export interface ITemplateToSection {
    [index: string]: any;
    practice_clinical_template_id: string;
    clinical_section_id: string;
}
