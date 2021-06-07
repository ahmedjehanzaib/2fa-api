export interface IClinicalTemplateICDOrderSetForm {
    [index: string]: any,
    practice_id: string,
    practice_clinical_template_id: string,
    name: string,
    description?: string,
    category_icds?: {
        categoryId: string,
        icds: number[]
    }[]
}

export interface IFormCategoriesICDs {
    id: string,
    template_icd_order_set_form_id: string
    practice_icd_id: number
}

export interface IFormToCategories {
    template_icd_order_set_form_id: string
    icd_order_set_form_categories_id: string
}