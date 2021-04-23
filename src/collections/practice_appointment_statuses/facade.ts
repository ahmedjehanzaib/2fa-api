import { planAppointmentStatusQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeAppointmentStatus } from './interfaces';


export const practiceAppointmentStatusFacade = {

    create: async (data: IPracticeAppointmentStatus) => {
        const { rows } = await PG_CLIENT.query(planAppointmentStatusQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(planAppointmentStatusQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(planAppointmentStatusQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeAppointmentStatus) => {
        const { rows } = await PG_CLIENT.query(planAppointmentStatusQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(planAppointmentStatusQueries.findByPracticeId(practiceId))

        return rows
    }
};