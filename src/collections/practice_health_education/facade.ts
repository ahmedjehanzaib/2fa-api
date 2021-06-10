import { healthEducationQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticehealthEducation } from './interfaces';


export const healthEducationFacade = {

    create: async (data: IPracticehealthEducation) => {
            const { rows } = await PG_CLIENT.query(healthEducationQueries.create(data))

            return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(healthEducationQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {

            const { rows } = await PG_CLIENT.query(healthEducationQueries.deleteById(Id));

            return rows;
       
    },

    updateById: async (Id: string, data: IPracticehealthEducation) => {

            const { rows } = await PG_CLIENT.query(healthEducationQueries.updateById(Id, data));

            return rows;

    },
    findAll: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(healthEducationQueries.findByPracticeId(Id))

        return rows
    }
};