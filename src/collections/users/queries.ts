import { IUser, IUpdateData, IUserRole } from './interfaces';

export const userQueries = {
    create: (data: IUser) => {
        const columns = Object.keys(data)

        
        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]
            
        })
        
        return {
            text: `INSERT INTO users(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },
    
    findById: (Id: string) => {
        return {
            text: ` SELECT * FROM users WHERE id = $1`,
            values: [Id]
        }
    },
    
    deleteById: (Id: string) => {
        return {
            text: `DELETE FROM users WHERE id = $1 RETURNING *`,
            values: [Id]
        };
    },
    
    updateById: (Id: string, data: IUpdateData) => {
    
        let setQueryPart = ``
        
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });
        return {
            text: `UPDATE users SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };
    },
    findAll: () => {
        return {
            text: `SELECT * FROM users`,
            values: []
        }
    },
}

export const userRolesQueries = {
    create: (data: IUserRole) => {
        const columns = Object.keys(data)

        const indices: any = []
        const values = columns.map((k, i) => {
            indices.push(`$${i + 1}`)
            return data[k]

        })

        return {
            text: `INSERT INTO user_roles(${columns})  VALUES (${indices}) RETURNING *`,
            values
        }
    },

    findByUserId: (Id: string) => {
        return {
            text: ` SELECT * FROM user_roles WHERE user_id = $1`,
            values: [Id]
        }
    },

    deleteByUserId: (Id: string) => {
        return {
            text: `DELETE FROM user_roles WHERE user_id = $1 RETURNING *`,
            values: [Id]
        };
    },

    updateByUserId: (Id: string, data: IUserRole) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });

        return {
            text: `UPDATE user_roles SET ${setQueryPart} WHERE user_id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };

    },
    updateById: (Id: string, data: IUserRole) => {
        let setQueryPart = ``
        Object.keys(data).forEach((key, index) => {
            setQueryPart += ` ${key}=$${index + 1}`
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += `,`
            }
        });

        return {
            text: `UPDATE user_roles SET ${setQueryPart} WHERE id = '${Id}' RETURNING *`,
            values: Object.keys(data).map((key) => data[key])
        };

    },
}