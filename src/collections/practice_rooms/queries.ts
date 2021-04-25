import { IPracticeRoom } from './interfaces';

export const practiceRoomQueries = {
    
    create: (data: IPracticeRoom) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO practice_rooms(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findById: (Id: string) => {
        return {
            text: `SELECT par.*, p.name as practice_name
            FROM practice_rooms par 
            left join practices p 
            on par.practice_id = p.id WHERE par.id = $1`,
            values: [Id]
        }
    },

    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM practice_rooms WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateById: (Id: string, data: IPracticeRoom) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE practice_rooms SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    
    findByPracticeId: (practiceId: string) => {
        return {
            text: `SELECT par.*, p.name as practice_name
            FROM practice_rooms par 
            left join practices p 
            on par.practice_id = p.id WHERE par.practice_id = $1`,
            values: [practiceId]
        }
    },
}