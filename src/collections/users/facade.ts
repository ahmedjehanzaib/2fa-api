import { userQueries, userRolesQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IInsertData, IUpdateData } from './interfaces';


export const usersFacade = {

    create: async (data: IInsertData) => {
        const { roles } = data

        delete data.roles

        try {
            await PG_CLIENT.query('BEGIN')
            const { rows } = await PG_CLIENT.query(userQueries.create(data));

            rows[0].roles = []

            // @ts-ignore

            for (const role of roles) {
                // @ts-ignore

                const { rows: inserted } = await PG_CLIENT.query(userRolesQueries.create({ user_id: rows[0].id, ...role }))
                rows[0].roles.push(inserted[0])
            }

            await PG_CLIENT.query('COMMIT')

            return rows;
        } catch (err) {
            console.error('Error while inserting user')
            await PG_CLIENT.query('ROLLBACK')

            throw err

        }

    },

    findById: async (id: string) => {
        const { rows } = await PG_CLIENT.query(userQueries.findById(id));

        if (!rows.length) return rows

        const { rows: roles } = await PG_CLIENT.query(userRolesQueries.findByUserId(id));
        rows[0].roles = roles

        return rows;
    },

    deleteById: async (id: string) => {

        try {
            await PG_CLIENT.query('BEGIN')
            await PG_CLIENT.query(userRolesQueries.deleteByUserId(id));
            const { rows } = await PG_CLIENT.query(userQueries.deleteById(id));
            await PG_CLIENT.query('COMMIT')

            return rows;
        } catch (err) {
            console.error('Error while deleting user')
            await PG_CLIENT.query('ROLLBACK')

            throw err
        }
    },

    updateById: async (id: string, data: IUpdateData) => {
        const { roles } = data

        delete data.roles

        try {
            await PG_CLIENT.query('BEGIN')
            const { rows } = await PG_CLIENT.query(userQueries.updateById(id, data));

            rows[0].roles = []

            // @ts-ignore

            for (const role of roles) {
                if (role.id) {
                    const { rows: updated } = await PG_CLIENT.query(userRolesQueries.updateById(role.id, role))
                    rows[0].roles.push(updated[0])
                } else {
                    // @ts-ignore
                    const { rows: inserted } = await PG_CLIENT.query(userRolesQueries.create({ user_id: id, ...role }))
                    rows[0].roles.push(inserted[0])

                }
            }

            await PG_CLIENT.query('COMMIT')

            return rows;
        } catch (err) {
            console.error('Error while updating user')
            await PG_CLIENT.query('ROLLBACK')

            throw err

        }


    },
    findAll: async () => {
        const { rows } = await PG_CLIENT.query(userQueries.findAll())

        return rows
    }
};