import { practiceResultAlertQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeResultAlert } from './interfaces';


export const practiceResultAlertFacade = {

    create: async (data: IPracticeResultAlert) => {
        const { rows } = await PG_CLIENT.query(practiceResultAlertQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceResultAlertQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceResultAlertQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeResultAlert) => {
        const { rows } = await PG_CLIENT.query(practiceResultAlertQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceResultAlertQueries.findByPracticeId(practiceId))

        return rows
    }
};