import { IPracticeCPT } from './interfaces';

export const practiceCPTQueries = {
    create: (data: IPracticeCPT) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_cpt(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: ` SELECT
            pc.*,
            To_json(p2.*) AS practice,
            To_json(ppos.*) AS place_of_service,
            To_json(ptos.*) AS type_of_service,
            To_json(ppc.*) AS procedure_category,
            To_json(nuom.*) AS ndc_unit_of_measurements 
         FROM
            practice_cpt pc 
            LEFT JOIN
               practices p2 
               ON p2.id = pc.practice_id 
            LEFT JOIN
               practice_place_of_service ppos 
               ON ppos.id = pc.place_of_service 
            LEFT JOIN
               practice_type_of_service ptos 
               ON ptos.id = pc.type_of_service 
            LEFT JOIN
               practice_procedure_category ppc 
               ON ppc.id = pc.procedure_category 
            LEFT JOIN
               ndc_unit_of_measurement nuom 
               ON nuom.id = pc.ndc_unit_of_measurements 
         WHERE
            pc.id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM practice_cpt WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IPracticeCPT) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_cpt SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT
            pc.*,
            To_json(p2.*) AS practice,
            To_json(ppos.*) AS place_of_service,
            To_json(ptos.*) AS type_of_service,
            To_json(ppc.*) AS procedure_category,
            To_json(nuom.*) AS ndc_unit_of_measurements 
         FROM
            practice_cpt pc 
            LEFT JOIN
               practices p2 
               ON p2.id = pc.practice_id 
            LEFT JOIN
               practice_place_of_service ppos 
               ON ppos.id = pc.place_of_service 
            LEFT JOIN
               practice_type_of_service ptos 
               ON ptos.id = pc.type_of_service 
            LEFT JOIN
               practice_procedure_category ppc 
               ON ppc.id = pc.procedure_category 
            LEFT JOIN
               ndc_unit_of_measurement nuom 
               ON nuom.id = pc.ndc_unit_of_measurements`,
            values: []
        }
    },
}