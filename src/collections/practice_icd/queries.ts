import { IPracticeICD  } from './interfaces';

export const practiceICDQueries = {
    create: (data: IPracticeICD) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_icd(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT pi.*,
            p."name" AS practice_name
            FROM practice_icd pi
            LEFT JOIN practices p
            ON pi.practice_id = p.id WHERE pi.id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM practice_icd WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IPracticeICD) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_icd SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT pi.*,
            p."name" AS practice_name
            FROM practice_icd pi
            LEFT JOIN practices p
            ON pi.practice_id = p.id`,
            values: []
        }
    },
}