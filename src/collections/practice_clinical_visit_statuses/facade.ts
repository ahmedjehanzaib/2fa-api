import { practiceClinicalVisitStatusQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeClinicalVisitStatus } from './interfaces';


export const practiceClinicalVisitStatusFacade = {

    create: async (data: IPracticeClinicalVisitStatus) => {
        const { rows } = await PG_CLIENT.query(practiceClinicalVisitStatusQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceClinicalVisitStatusQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceClinicalVisitStatusQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeClinicalVisitStatus) => {
        const { rows } = await PG_CLIENT.query(practiceClinicalVisitStatusQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceClinicalVisitStatusQueries.findByPracticeId(practiceId))

        return rows
    }
};