import { IQuestion, IQuestionOption } from './interfaces';

export const questionQueries = {
    create: (data: IQuestion) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO clinical_questions(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT cq.*, json_agg(row_to_json(cqo.*)) as options  FROM clinical_questions cq 
            left join clinical_question_options cqo 
            on cq.id = cqo.clinical_question_id WHERE cq.id = $1 group by cq.id`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM clinical_questions WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IQuestion) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE clinical_questions SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT cq.*, json_agg(row_to_json(cqo.*)) as options  FROM clinical_questions cq 
            left join clinical_question_options cqo 
            on cq.id = cqo.clinical_question_id group by cq.id`,
            values: []
        }
    },
}

export const questionOptionsQueries = {
    create: (data: IQuestionOption) => {
        console.log(data)
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO clinical_question_options(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT * FROM clinical_question_options WHERE id = $1`,
            values: [Id]
        }
    },

    findByQuestionId: (Id: string) => {
        return {
            text: `SELECT * FROM clinical_question_options WHERE clinical_question_id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM clinical_question_options WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    deleteByQuestionId: (Id: string) => {
        return {
            text: `DELETE FROM clinical_question_options WHERE clinical_question_id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IQuestionOption) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE clinical_question_options SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT * FROM clinical_question_options`,
            values: []
        }
    },
}
