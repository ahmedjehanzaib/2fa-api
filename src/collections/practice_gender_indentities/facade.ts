import { practiceGenderIdentityQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeGenderIndentity } from './interfaces';


export const practiceGenderIdentityFacade = {

    create: async (data: IPracticeGenderIndentity) => {
        const { rows } = await PG_CLIENT.query(practiceGenderIdentityQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceGenderIdentityQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceGenderIdentityQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeGenderIndentity) => {
        const { rows } = await PG_CLIENT.query(practiceGenderIdentityQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceGenderIdentityQueries.findByPracticeId(practiceId))

        return rows
    }
};