import { planAppointmentReasonsQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeAppointmentReasons } from './interfaces';


export const practiceAppointmentReasonsFacade = {

    create: async (data: IPracticeAppointmentReasons) => {
        const { rows } = await PG_CLIENT.query(planAppointmentReasonsQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(planAppointmentReasonsQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(planAppointmentReasonsQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeAppointmentReasons) => {
        const { rows } = await PG_CLIENT.query(planAppointmentReasonsQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(planAppointmentReasonsQueries.findByPracticeId(practiceId))

        return rows
    }
};