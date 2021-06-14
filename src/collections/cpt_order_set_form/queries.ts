import { IClinicalTemplateCPTOrderSetForm, IFormCategoriesCPTs, IFormToCategories } from './interfaces';

export const CPTOrderFormQueries = {

    create: (data: IClinicalTemplateCPTOrderSetForm) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO clinical_template_cpt_order_set_form(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT * FROM clinical_template_cpt_order_set_form WHERE id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM clinical_template_cpt_order_set_form WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IClinicalTemplateCPTOrderSetForm) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE clinical_template_cpt_order_set_form SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: (Id: string) => {
        return {
            text: `SELECT * FROM clinical_template_cpt_order_set_form WHERE practice_id = $1`,
            values: [Id]
        }
    },
}

export const cptOrderSetFormCategoriesCPTs = {

    create: (data: IFormCategoriesCPTs) => {

        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            // @ts-ignore
            return data[k]

        })

        return {
            text: `INSERT INTO cpt_order_set_form_categories_cpts(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT * FROM cpt_order_set_form_categories_cpts WHERE id = $1`,
            values: [Id]
        }
    },

    findByCategoryId: (Id: string) => {
        return {
            text: `SELECT * FROM cpt_order_set_form_categories_cpts WHERE cpt_order_set_form_category_id = $1`,
            values: [Id]
        }
    },

    findByCategoryAndFormId: (categoryId: string, formId: string) => {
        return {
            text: `SELECT * FROM cpt_order_set_form_categories_cpts WHERE cpt_order_set_form_category_id = $1 and cpt_order_set_form_id = $2`,
            values: [categoryId, formId]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM cpt_order_set_form_categories_cpts WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    deleteByFormId: (Id: string) => {
        return {
            text: `DELETE FROM cpt_order_set_form_categories_cpts WHERE template_cpt_order_set_form_id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IFormCategoriesCPTs) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE cpt_order_set_form_categories_cpts SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            // @ts-ignore
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT * FROM cpt_order_set_form_categories_cpts`,
            values: []
        }
    },
}

export const cptOrderSetFormToCategories = {

    create: (data: IFormToCategories) => {

        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            // @ts-ignore
            return data[k]

        })

        return {
            text: `INSERT INTO cpt_order_set_form_to_categories(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT * FROM cpt_order_set_form_to_categories WHERE id = $1`,
            values: [Id]
        }
    },

    findByFormId: (Id: string) => {
        return {
            text: `SELECT * FROM cpt_order_set_form_to_categories WHERE template_cpt_order_set_form_id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM cpt_order_set_form_to_categories WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    deleteByFormId: (Id: string) => {
        return {
            text: `DELETE FROM cpt_order_set_form_to_categories WHERE template_cpt_order_set_form_id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IFormToCategories) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE cpt_order_set_form_to_categories SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            // @ts-ignore
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT * FROM cpt_order_set_form_to_categories`,
            values: []
        }
    },
}