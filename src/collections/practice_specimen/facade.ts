import { practiceSpecimenQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeSpecimen } from './interfaces';


export const practiceSpecimenFacade = {

    create: async (data: IPracticeSpecimen) => {
        const { rows } = await PG_CLIENT.query(practiceSpecimenQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceSpecimenQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceSpecimenQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeSpecimen) => {
        const { rows } = await PG_CLIENT.query(practiceSpecimenQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceSpecimenQueries.findByPracticeId(practiceId))

        return rows
    }
};