import { practiceColorCodeQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeColorCode } from './interfaces';


export const practiceColorCodeFacade = {

    create: async (data: IPracticeColorCode) => {
        const { rows } = await PG_CLIENT.query(practiceColorCodeQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceColorCodeQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceColorCodeQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeColorCode) => {
        const { rows } = await PG_CLIENT.query(practiceColorCodeQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceColorCodeQueries.findByPracticeId(practiceId))

        return rows
    }
};