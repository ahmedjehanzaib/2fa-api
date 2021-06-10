import { IPracticeMacros } from './interfaces';

export const practiceMacrosQueries = {
    create: (data: IPracticeMacros) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_macros(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT *  FROM practice_macros WHERE id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM practice_macros WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IPracticeMacros) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_macros SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findByPracticeId: (Id: string) => {
        return {
            text: `SELECT *  FROM practice_macros WHERE practice_id = $1`,
            values: [Id]
        }
    },
}