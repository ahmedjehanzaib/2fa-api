export interface IClinicalTemplateCPTOrderSetForm {
    [index: string]: any;
    practice_id: string;
    practice_clinical_template_id: string;
    name: string;
    description?: string;
    category_cpt?: {
        categoryId: string;
        cpts: number[];
    }[];
}
export interface IFormCategoriesCPTs {
    id: string;
    cpt_order_set_form_category_id: string;
    practice_cpt_id: number;
    cpt_order_set_form_id: number;
}
export interface IFormToCategories {
    template_cpt_order_set_form_id: string;
    cpt_order_set_form_category_id: string;
}
