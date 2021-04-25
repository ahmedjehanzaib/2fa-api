import { practiceSexualOrientationQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeSexualOrientation } from './interfaces';


export const practiceSexualOrientationFacade = {

    create: async (data: IPracticeSexualOrientation) => {
        const { rows } = await PG_CLIENT.query(practiceSexualOrientationQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceSexualOrientationQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceSexualOrientationQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeSexualOrientation) => {
        const { rows } = await PG_CLIENT.query(practiceSexualOrientationQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceSexualOrientationQueries.findByPracticeId(practiceId))

        return rows
    }
};