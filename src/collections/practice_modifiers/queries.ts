import { IPracticeModifier } from './interfaces';

export const practiceModifierQueries = {

    create: (data: IPracticeModifier) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_modifier(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT pm.*,
            p."name" AS practice_name
            FROM practice_modifier pm
            LEFT JOIN practices p
            ON pm.practice_id = p.id WHERE pm.id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM practice_modifier WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IPracticeModifier) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_modifier SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },

    findAll: (Id: string) => {
        return {
            text: `SELECT pm.*,
            p."name" AS practice_name
            FROM practice_modifier pm
            LEFT JOIN practices p
            ON pm.practice_id = p.id
            WHERE pm.practice_id = $1`,
            values: [Id]
        }
    },
}