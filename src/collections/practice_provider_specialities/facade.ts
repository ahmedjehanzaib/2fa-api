import { practiceProviderSpecialityQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeProviderSpeciality } from './interfaces';


export const practiceProviderSpecialityFacade = {

    create: async (data: IPracticeProviderSpeciality) => {
        const { rows } = await PG_CLIENT.query(practiceProviderSpecialityQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceProviderSpecialityQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceProviderSpecialityQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeProviderSpeciality) => {
        const { rows } = await PG_CLIENT.query(practiceProviderSpecialityQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceProviderSpecialityQueries.findByPracticeId(practiceId))

        return rows
    }
};