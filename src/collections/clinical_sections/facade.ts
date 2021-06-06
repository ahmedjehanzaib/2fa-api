import { sectionQueries, sectionToQuestionGroupQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { ISection } from './interfaces';


export const sectionFacade = {

    create: async (data: ISection) => {

        const { question_groups } = data

        delete data.question_groups

        try {

            await PG_CLIENT.query('BEGIN')

            const { rows } = await PG_CLIENT.query(sectionQueries.create(data))


            rows[0].question_groups = []

            // @ts-ignore
            for (const group of question_groups) {

                const { rows: inserted } = await PG_CLIENT.query(sectionToQuestionGroupQueries
                    .create({ clinical_question_group_id: group, clinical_section_id: rows[0].id }))

                rows[0].question_groups.push(inserted[0].clinical_question_group_id)


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
        const { rows } = await PG_CLIENT.query(sectionQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        try {

            await PG_CLIENT.query('BEGIN')

            await PG_CLIENT.query(sectionToQuestionGroupQueries.deleteBySectionId(Id))

            const { rows } = await PG_CLIENT.query(sectionQueries.deleteById(Id));
            await PG_CLIENT.query('COMMIT')

            return rows;
        }
        catch (err) {
            await PG_CLIENT.query('ROLLBACK')
            throw err
        }

    },

    updateById: async (Id: string, data: ISection) => {

        const { question_groups } = data

        delete data.question_groups

        try {
            await PG_CLIENT.query('BEGIN')

            await PG_CLIENT.query(sectionToQuestionGroupQueries.deleteBySectionId(Id))

            const { rows } = await PG_CLIENT.query(sectionQueries.updateById(Id, data));

            rows[0].question_groups = []

            // @ts-ignore
            for (const group of question_groups) {

                const { rows: inserted } = await PG_CLIENT.query(sectionToQuestionGroupQueries
                    .create({ clinical_question_group_id: group, clinical_section_id: rows[0].id }))

                rows[0].question_groups.push(inserted[0].clinical_question_group_id)


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
        const { rows } = await PG_CLIENT.query(sectionQueries.findAll())

        return rows
    }
};