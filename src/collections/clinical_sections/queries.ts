import { ISection, ISectionToQuestionGroup } from './interfaces';

export const sectionQueries = {
    
    create: (data: ISection) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO clinical_sections(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT cq.*, json_agg(cqo.clinical_question_group_id) as questions  FROM clinical_sections cq 
            left join clinical_sections_to_clinical_question_groups cqo 
            on cq.id = cqo.clinical_section_id WHERE cq.id = $1 group by cq.id`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM clinical_sections WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: ISection) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE clinical_sections SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT cq.*, json_agg(cqo.clinical_question_group_id) as questions  FROM clinical_sections cq 
            left join clinical_sections_to_clinical_question_groups cqo 
            on cq.id = cqo.clinical_section_id group by cq.id
            `,
            values: []
        }
    },
}

export const sectionToQuestionGroupQueries = {

    create: (data: ISectionToQuestionGroup) => {

        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            // @ts-ignore
            return data[k]

        })

        return {
            text: `INSERT INTO clinical_sections_to_clinical_question_groups(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT * FROM clinical_sections_to_clinical_question_groups WHERE id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM clinical_sections_to_clinical_question_groups WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    deleteBySectionId: (Id: string) => {
        return {
            text: `DELETE FROM clinical_sections_to_clinical_question_groups WHERE clinical_section_id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: ISectionToQuestionGroup) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE clinical_sections_to_clinical_question_groups SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            // @ts-ignore
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT * FROM clinical_sections_to_clinical_question_groups`,
            values: []
        }
    },
}