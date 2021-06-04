import { questionGroupQueries, questionGroupToQuestionQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IQuestionGroup } from './interfaces';


export const questionGroupFacade = {

    create: async (data: IQuestionGroup) => {
        const { questions } = data

        delete data.questions

        try {

            await PG_CLIENT.query('BEGIN')

            const { rows } = await PG_CLIENT.query(questionGroupQueries.create(data))


            rows[0].questions = []

            for (const question of questions) {

                const { rows: inserted } = await PG_CLIENT.query(questionGroupToQuestionQueries
                    .create({ clinical_question_id: question, clinical_question_group_id: rows[0].id }))

                rows[0].questions.push(inserted[0].clinical_question_id)


            }

            await PG_CLIENT.query('COMMIT')

            return rows

        }
        catch (err) {
            await PG_CLIENT.query('ROLLBACK')

            throw err
        }

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(questionGroupQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        try {
            await PG_CLIENT.query('BEGIN')


            await PG_CLIENT.query(questionGroupToQuestionQueries.deleteByGroupId(Id))

            const { rows } = await PG_CLIENT.query(questionGroupQueries.deleteById(Id));
            await PG_CLIENT.query('COMMIT')

            return rows;
        }
        catch (err) {
            await PG_CLIENT.query('ROLLBACK')
            throw err
        }

    },

    updateById: async (Id: string, data: IQuestionGroup) => {

        const { questions } = data

        delete data.questions

        try {
            await PG_CLIENT.query('BEGIN')

            await PG_CLIENT.query(questionGroupToQuestionQueries.deleteByGroupId(Id))

            const { rows } = await PG_CLIENT.query(questionGroupQueries.updateById(Id, data));

            rows[0].questions = []


            for (const question of questions) {

                const { rows: inserted } = await PG_CLIENT.query(questionGroupToQuestionQueries
                    .create({ clinical_question_id: question, clinical_question_group_id: rows[0].id }))

                rows[0].questions.push(inserted[0].clinical_question_id)


            }

            await PG_CLIENT.query('COMMIT')

            return rows;
        }
        catch (err) {
            await PG_CLIENT.query('ROLLBACK')
            throw err
        }


    },

    findAll: async () => {
        const { rows } = await PG_CLIENT.query(questionGroupQueries.findAll())

        return rows
    }
};