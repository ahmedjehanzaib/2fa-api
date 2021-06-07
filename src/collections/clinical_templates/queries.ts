import { ITemplate, ITemplateToSection } from './interfaces';

export const templateQueries = {
    create: (data: ITemplate) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_clinical_templates(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT cq.*, json_agg(cqo.clinical_section_id) as sections  FROM practice_clinical_templates cq 
            left join clinical_templates_to_clinical_sections cqo 
            on cq.id = cqo.practice_clinical_template_id WHERE cq.id = $1 group by cq.id`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM practice_clinical_templates WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: ITemplate) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_clinical_templates SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT cq.*, json_agg(cqo.clinical_section_id) as sections  FROM practice_clinical_templates cq 
            left join clinical_templates_to_clinical_sections cqo 
            on cq.id = cqo.practice_clinical_template_id group by cq.id`,
            values: []
        }
    },
}

export const templateToSectionQueries = {
    create: (data: ITemplateToSection) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO clinical_templates_to_clinical_sections(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT *  FROM clinical_templates_to_clinical_sections WHERE id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM clinical_templates_to_clinical_sections WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    deleteByTemplateId: (Id: string) => {
        return {
            text: `DELETE FROM clinical_templates_to_clinical_sections WHERE practice_clinical_template_id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: ITemplateToSection) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE clinical_templates_to_clinical_sections SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT *  FROM clinical_templates_to_clinical_sections`,
            values: []
        }
    },
}