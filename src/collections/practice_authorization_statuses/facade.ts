import { practiceAuthorizationStatusQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeAuthorizationStatuses } from './interfaces';


export const practiceAuthorizationStatusFacade = {

    create: async (data: IPracticeAuthorizationStatuses) => {
        const { rows } = await PG_CLIENT.query(practiceAuthorizationStatusQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceAuthorizationStatusQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceAuthorizationStatusQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeAuthorizationStatuses) => {
        const { rows } = await PG_CLIENT.query(practiceAuthorizationStatusQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceAuthorizationStatusQueries.findByPracticeId(practiceId))

        return rows
    }
};