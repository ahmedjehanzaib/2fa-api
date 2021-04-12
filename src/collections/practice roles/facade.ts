import { practiceRolesQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeRole, IPracticeRoleUpdatedData } from './interfaces';


export const practiceRoleFacade = {

    create: async (data: IPracticeRole) => {
        const { rows } = await PG_CLIENT.query(practiceRolesQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceRolesQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceRolesQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeRoleUpdatedData) => {
        const { rows } = await PG_CLIENT.query(practiceRolesQueries.updateById(Id, data));

        return rows;

    },
    findAll: async () => {
        const { rows } = await PG_CLIENT.query(practiceRolesQueries.findAll())

        return rows
    }
};

// export { locationsFacade };