import { IHcfaTemplates, IHcfaTemplatesUpdatedData  } from './interfaces';

export const hcfaTemplatesQueries = {
    create: (data: IHcfaTemplates) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO hcfa_templates(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: ` SELECT ht.*, 
            p."name" AS practice_name
            FROM hcfa_templates ht
            LEFT JOIN practices p
                   ON ht.practice_id = p.id
            WHERE ht.id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM hcfa_templates WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IHcfaTemplatesUpdatedData) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE hcfa_templates SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT ht.*, 
            p."name" AS practice_name
            FROM hcfa_templates ht
            LEFT JOIN practices p
            ON ht.practice_id = p.id`,
            values: []
        }
    },
}