import { IPlanTypes, IPlanTypesUpdatedData  } from './interfaces';

export const planTypesQueries = {
    create: (data: IPlanTypes) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO plan_type(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: ` SELECT * FROM plan_type WHERE id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM plan_type WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IPlanTypesUpdatedData) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE plan_type SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT * FROM plan_type`,
            values: []
        }
    },
}