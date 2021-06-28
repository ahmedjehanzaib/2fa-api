import { IPracticePlaceOfService } from './interfaces';

export const practicePlaceOfServiceQueries = {

    create: (data: IPracticePlaceOfService) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_place_of_service(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: ` SELECT ppos.*,
            p."name" AS practice_name
            FROM practice_place_of_service ppos
            LEFT JOIN practices p
            ON ppos.practice_id = p.id WHERE ppos.id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM practice_place_of_service WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IPracticePlaceOfService) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_place_of_service SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },

    findAll: (practiceId: string) => {
        return {
            text: `SELECT ppos.*,
            p."name" AS practice_name
            FROM practice_place_of_service ppos
            LEFT JOIN practices p
            ON ppos.practice_id = p.id
            WHERE ppos.practice_id = $1`,
            values: [practiceId]
        }
    },
}