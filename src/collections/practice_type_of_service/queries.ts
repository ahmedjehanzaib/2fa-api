import { IPracticetypeOfService } from './interfaces';

export const practiceTypeOfServiceQueries = {

    create: (data: IPracticetypeOfService) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_type_of_service(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT ptos.*,
            p."name" AS practice_name
            FROM practice_type_of_service ptos
            LEFT JOIN practices p
            ON ptos.practice_id = p.id WHERE ptos.id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM practice_type_of_service WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IPracticetypeOfService) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_type_of_service SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },

    findAll: (practiceId: string) => {
        return {
            text: `SELECT ptos.*,
            p."name" AS practice_name
            FROM practice_type_of_service ptos
            LEFT JOIN practices p
            ON ptos.practice_id = p.id
            WHERE ptos.practice_id = $1`,
            values: [practiceId]
        }
    },
}