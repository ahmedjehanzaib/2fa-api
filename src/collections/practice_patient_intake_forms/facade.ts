import { patientIntakeFormQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticePatientIntakeForm } from './interfaces';


export const patientIntakeFormFacade = {

    create: async (data: IPracticePatientIntakeForm) => {
            const { rows } = await PG_CLIENT.query(patientIntakeFormQueries.create(data))

            return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(patientIntakeFormQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {

            const { rows } = await PG_CLIENT.query(patientIntakeFormQueries.deleteById(Id));

            return rows;
       
    },

    updateById: async (Id: string, data: IPracticePatientIntakeForm) => {

            const { rows } = await PG_CLIENT.query(patientIntakeFormQueries.updateById(Id, data));

            return rows;

    },
    findAll: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(patientIntakeFormQueries.findByPracticeId(Id))

        return rows
    }
};