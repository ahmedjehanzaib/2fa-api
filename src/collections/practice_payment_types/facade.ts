import { practiceClassQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticePaymentType } from './interfaces';


export const practicePaymentTypeFacade = {

    create: async (data: IPracticePaymentType) => {
        const { rows } = await PG_CLIENT.query(practiceClassQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceClassQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceClassQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticePaymentType) => {
        const { rows } = await PG_CLIENT.query(practiceClassQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceClassQueries.findByPracticeId(practiceId))

        return rows
    }
};