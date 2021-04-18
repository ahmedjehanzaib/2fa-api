import { IPracticeRole } from './interfaces';

export const practiceRolesQueries = {
    create: (data: IPracticeRole) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_roles(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT pr.*,
            p."name" AS practice_name
            FROM  practice_roles pr
            LEFT JOIN practices p
                   ON pr.practice_id = p.id  WHERE pr.id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM practice_roles WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, locationData: IPracticeRole) => {
        let setQueryPart = ``
        Object.keys(locationData).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(locationData).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_roles SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(locationData).map((key) => locationData[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT pr.*,
            p."name" AS practice_name
            FROM  practice_roles pr
            LEFT JOIN practices p
            ON pr.practice_id = p.id`,
            values: []
        }
    },
}