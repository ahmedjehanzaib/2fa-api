import { practicepatientReferralSourceQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticePatientReferralSource } from './interfaces';


export const practicePatientReferralSourceFacade = {

    create: async (data: IPracticePatientReferralSource) => {
        const { rows } = await PG_CLIENT.query(practicepatientReferralSourceQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practicepatientReferralSourceQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practicepatientReferralSourceQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticePatientReferralSource) => {
        const { rows } = await PG_CLIENT.query(practicepatientReferralSourceQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practicepatientReferralSourceQueries.findByPracticeId(practiceId))

        return rows
    }
};