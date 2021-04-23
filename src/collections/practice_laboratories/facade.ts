import { practiceLaboratoryQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeLaboratory } from './interfaces';


export const practiceLaboratoryFacade = {

    create: async (data: IPracticeLaboratory) => {
        const { rows } = await PG_CLIENT.query(practiceLaboratoryQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceLaboratoryQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceLaboratoryQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeLaboratory) => {
        const { rows } = await PG_CLIENT.query(practiceLaboratoryQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceLaboratoryQueries.findByPracticeId(practiceId))

        return rows
    }
};