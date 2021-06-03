import { questionQueries, questionOptionsQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IQuestion } from './interfaces';


export const questionFacade = {

    create: async (data: IQuestion) => {
        const { options } = data

        delete data.options

        try {

            await PG_CLIENT.query('BEGIN')

            const { rows } = await PG_CLIENT.query(questionQueries.create(data))

            if (options && options.length) {
                console.log(rows)

                rows[0].options = []

                for (const option of options) {
                    // @ts-ignore
                    const { rows: inserted } = await PG_CLIENT.query(questionOptionsQueries.create({ clinical_question_id: rows[0].id, ...option }))
                    rows[0].options.push(inserted[0])

                }

            }
            await PG_CLIENT.query('COMMIT')


            return rows;
        }
        catch (err) {
            console.error('Error while creating question')
            await PG_CLIENT.query('ROLLBACK')

            throw err

        }

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(questionQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {

        try {
            await PG_CLIENT.query('BEGIN')

            await PG_CLIENT.query(questionOptionsQueries.deleteByQuestionId(Id));
            const { rows } = await PG_CLIENT.query(questionQueries.deleteById(Id));

            await PG_CLIENT.query('COMMIT')

            return rows;
        }
        catch (err) {
            console.error('Failed to delete question')
            await PG_CLIENT.query('ROLLBACK')
            throw err
        }
    },

    updateById: async (Id: string, data: IQuestion) => {

        const { options } = data

        delete data.options

        try {
            await PG_CLIENT.query('BEGIN')

            const { rows } = await PG_CLIENT.query(questionQueries.updateById(Id, data));

            await PG_CLIENT.query(questionOptionsQueries.deleteByQuestionId(Id));

            if (options && options.length) {

                rows[0].options = []

                for (const option of options) {
                    // @ts-ignore
                    const { rows: inserted } = await PG_CLIENT.query(questionOptionsQueries.create({ clinical_question_id: rows[0].id, ...option }))
                    rows[0].options.push(inserted[0])

                }

            }
            await PG_CLIENT.query('COMMIT')

            return rows;
        }
        catch (err) {
            await PG_CLIENT.query('ROLLBACK')
            console.error('Failed to update question')
            throw err
        }

    },
    findAll: async () => {
        const { rows } = await PG_CLIENT.query(questionQueries.findAll())

        return rows
    }
};