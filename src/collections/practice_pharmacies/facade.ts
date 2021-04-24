import { practicePharmacyQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticePharmacy } from './interfaces';


export const practicePharmacyFacade = {

    create: async (data: IPracticePharmacy) => {
        const { rows } = await PG_CLIENT.query(practicePharmacyQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practicePharmacyQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practicePharmacyQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticePharmacy) => {
        const { rows } = await PG_CLIENT.query(practicePharmacyQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practicePharmacyQueries.findByPracticeId(practiceId))

        return rows
    }
};