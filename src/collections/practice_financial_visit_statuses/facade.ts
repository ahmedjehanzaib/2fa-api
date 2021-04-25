import { practiceFinancialVisitStatusQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeFinancialVisitStatus } from './interfaces';


export const practiceFinancialVisitStatusFacade = {

    create: async (data: IPracticeFinancialVisitStatus) => {
        const { rows } = await PG_CLIENT.query(practiceFinancialVisitStatusQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceFinancialVisitStatusQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceFinancialVisitStatusQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeFinancialVisitStatus) => {
        const { rows } = await PG_CLIENT.query(practiceFinancialVisitStatusQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceFinancialVisitStatusQueries.findByPracticeId(practiceId))

        return rows
    }
};