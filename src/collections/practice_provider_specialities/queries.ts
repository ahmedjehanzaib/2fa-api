import { IPracticeProviderSpeciality } from './interfaces';

export const practiceProviderSpecialityQueries = {
    
    create: (data: IPracticeProviderSpeciality) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_provider_specialities(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT par.*, to_json(p.*) as practice
            FROM practice_provider_specialities par 
            left join practices p 
            on par.practice_id = p.id WHERE par.id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM practice_provider_specialities WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IPracticeProviderSpeciality) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_provider_specialities SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    
    findByPracticeId: (practiceId: string) => {
        return {
            text: `SELECT par.*, to_json(p.*) as practice
            FROM practice_provider_specialities par 
            left join practices p 
            on par.practice_id = p.id WHERE par.practice_id = $1`,
            values: [practiceId]
        }
    },
}