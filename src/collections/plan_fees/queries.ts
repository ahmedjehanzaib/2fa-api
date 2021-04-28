import { IPlanFees, IPlanFeesUpdatedData  } from './interfaces';

export const planFeesQueries = {
    create: (data: IPlanFees) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO plan_fees(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT pf.*, to_json(pp.*) as plan FROM plan_fees pf 
            LEFT join practice_plan pp 
            on pf.plan_id = pp.id  WHERE pf.id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM plan_fees WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IPlanFeesUpdatedData) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE plan_fees SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT pf.*, to_json(pp.*) as plan FROM plan_fees pf 
            LEFT join practice_plan pp 
            on pf.plan_id = pp.id `,
            values: []
        }
    },
}