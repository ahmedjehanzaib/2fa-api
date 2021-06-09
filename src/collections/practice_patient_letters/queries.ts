import { ident } from 'pg-format';
import { IPatientFields, IPatientLetter } from './interfaces';

export const patientLetterQueries = {
    create: (data: IPatientLetter) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_patient_letters(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT cq.*, json_agg(cqo.*) as user_fields  FROM practice_patient_letters cq 
            left join practice_patient_letter_fields cqo 
            on cq.id = cqo.practice_patient_letter_id WHERE cq.id = $1 group by cq.id`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM practice_patient_letters WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IPatientLetter) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_patient_letters SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },

    findAll: (Id: string) => {
        return {
            text: `SELECT cq.*, json_agg(cqo.*) as user_fields  FROM practice_patient_letters cq 
            left join practice_patient_letter_fields cqo 
            on cq.id = cqo.practice_patient_letter_id WHERE cq.practice_id = $1 group by cq.id`,
            values: [Id]
        }
    },
}

export const letterFieldsQueries = {
    create: (data: IPatientFields) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_patient_letter_fields(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT *  FROM practice_patient_letter_fields WHERE id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM practice_patient_letter_fields WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    deleteByLetterId: (Id: string) => {
        return {
            text: `DELETE FROM practice_patient_letter_fields WHERE practice_patient_letter_id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IPatientFields) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_patient_letter_fields SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT *  FROM practice_patient_letter_fields`,
            values: []
        }
    },
}