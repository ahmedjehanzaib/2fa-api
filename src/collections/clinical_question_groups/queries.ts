import { IQuestionGroup, IQuestionGroupToQuestion } from './interfaces';

export const questionGroupQueries = {
    create: (data: IQuestionGroup) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO clinical_question_groups(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT cq.*, json_agg(cqo.clinical_question_id) as questions  FROM clinical_question_groups cq 
            left join clinical_question_group_to_clinical_question cqo 
            on cq.id = cqo.clinical_question_group_id WHERE cq.id = $1 group by cq.id`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM clinical_question_groups WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IQuestionGroup) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE clinical_question_groups SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT cq.*, json_agg(cqo.clinical_question_id) as questions  FROM clinical_question_groups cq 
            left join clinical_question_group_to_clinical_question cqo 
            on cq.id = cqo.clinical_question_group_id group by cq.id
            `,
            values: []
        }
    },
}

export const questionGroupToQuestionQueries = {
    create: (data: IQuestionGroupToQuestion) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO clinical_question_group_to_clinical_question(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT * FROM clinical_question_group_to_clinical_question WHERE id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM clinical_question_group_to_clinical_question WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    deleteByGroupId: (Id: string) => {
        return {
            text: `DELETE FROM clinical_question_group_to_clinical_question WHERE clinical_question_group_id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IQuestionGroupToQuestion) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE clinical_question_group_to_clinical_question SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT * FROM clinical_question_group_to_clinical_question`,
            values: []
        }
    },
}