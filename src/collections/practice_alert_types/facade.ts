import { practiceAlertTypeQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IAlertType } from './interfaces';


export const practiceAlertTypeFacade = {

    create: async (data: IAlertType) => {
        const { rows } = await PG_CLIENT.query(practiceAlertTypeQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceAlertTypeQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceAlertTypeQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IAlertType) => {
        const { rows } = await PG_CLIENT.query(practiceAlertTypeQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceAlertTypeQueries.findByPracticeId(practiceId))

        return rows
    }
};