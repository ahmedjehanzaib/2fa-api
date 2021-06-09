import { v4 as uuidv4 } from 'uuid';

import { patientLetterQueries, letterFieldsQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPatientLetter } from './interfaces';


export const patientLetterFacade = {

    create: async (data: IPatientLetter) => {

        const { user_fields } = data

        delete data.user_fields

        try {

            await PG_CLIENT.query('BEGIN')

            const { rows } = await PG_CLIENT.query(patientLetterQueries.create(data))

            rows[0].user_fields = []
            // @ts-ignore
            for (const { new_user_field, insert_user_field } of user_fields) {

                const { rows: inserted } = await PG_CLIENT.query(letterFieldsQueries
                    .create({ id: uuidv4(), practice_patient_letter_id: rows[0].id, new_user_field, insert_user_field }))

                rows[0].user_fields.push(inserted[0])


            }

            await PG_CLIENT.query('COMMIT')

            return rows;

        }
        catch (err) {
            await PG_CLIENT.query('ROLLBACK')

            throw err
        }

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(patientLetterQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {

        try {

            await PG_CLIENT.query(letterFieldsQueries.deleteByLetterId(Id))

            const { rows } = await PG_CLIENT.query(patientLetterQueries.deleteById(Id));

            return rows;
        }
        catch (err) {
            throw err
        }


    },

    updateById: async (Id: string, data: IPatientLetter) => {
        const { user_fields } = data

        delete data.user_fields

        try {

            await PG_CLIENT.query(letterFieldsQueries.deleteByLetterId(Id))

            const { rows } = await PG_CLIENT.query(patientLetterQueries.updateById(Id, data));

            rows[0].user_fields = []
            // @ts-ignore
            for (const { new_user_field, insert_user_field } of user_fields) {

                const { rows: inserted } = await PG_CLIENT.query(letterFieldsQueries
                    .create({ id: uuidv4(), practice_patient_letter_id: rows[0].id, new_user_field, insert_user_field }))

                rows[0].user_fields.push(inserted[0])


            }

            return rows;
        }
        catch (err) {
            throw err
        }

    },

    findAll: async () => {
        const { rows } = await PG_CLIENT.query(patientLetterQueries.findAll())

        return rows
    }
};