import { IClinicalTemplateICDOrderSetForm, IFormCategoriesICDs, IFormToCategories } from './interfaces';

export const ICDOrderFormQueries = {
    
    create: (data: IClinicalTemplateICDOrderSetForm) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO template_icd_order_set_form(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT * FROM template_icd_order_set_form WHERE id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM template_icd_order_set_form WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IClinicalTemplateICDOrderSetForm) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE template_icd_order_set_form SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: (Id: string) => {
        return {
            text: `SELECT * FROM template_icd_order_set_form WHERE practice_id = $1`,
            values: [Id]
        }
    },
}

export const ICDOrderSetFormCategoriesICDs = {

    create: (data: IFormCategoriesICDs) => {

        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            // @ts-ignore
            return data[k]

        })

        return {
            text: `INSERT INTO icd_order_set_form_categories_icds(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT * FROM icd_order_set_form_categories_icds WHERE id = $1`,
            values: [Id]
        }
    },

    findByCategoryId: (Id: string) => {
        return {
            text: `SELECT * FROM icd_order_set_form_categories_icds WHERE cpt_order_set_form_category_id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM icd_order_set_form_categories_icds WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    deleteByFormId: (Id: string) => {
        return {
            text: `DELETE FROM icd_order_set_form_categories_icds WHERE template_icd_order_set_form_id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IFormCategoriesICDs) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE icd_order_set_form_categories_icds SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            // @ts-ignore
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT * FROM icd_order_set_form_categories_icds`,
            values: []
        }
    },
}

export const ICDOrderSetFormToCategories = {

    create: (data: IFormToCategories) => {

        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            // @ts-ignore
            return data[k]

        })

        return {
            text: `INSERT INTO icd_order_set_form_to_categories(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT * FROM icd_order_set_form_to_categories WHERE id = $1`,
            values: [Id]
        }
    },

    findByFormId: (Id: string) => {
        return {
            text: `SELECT * FROM icd_order_set_form_to_categories WHERE template_icd_order_set_form_id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM icd_order_set_form_to_categories WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    deleteByFormId: (Id: string) => {
        return {
            text: `DELETE FROM icd_order_set_form_to_categories WHERE template_icd_order_set_form_id = $1 RETURNING *`,
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
            text: `UPDATE icd_order_set_form_to_categories SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            // @ts-ignore
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT * FROM icd_order_set_form_to_categories`,
            values: []
        }
    },
}