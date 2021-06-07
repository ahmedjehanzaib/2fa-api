import { templateQueries, templateToSectionQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { ITemplate } from './interfaces';


export const templateFacade = {

    create: async (data: ITemplate) => {

        const { sections } = data

        delete data.sections

        try {

            await PG_CLIENT.query('BEGIN')

            const { rows } = await PG_CLIENT.query(templateQueries.create(data))

            rows[0].sections = []
            // @ts-ignore
            for (const section of sections) {

                const { rows: inserted } = await PG_CLIENT.query(templateToSectionQueries
                    .create({ clinical_section_id: section, practice_clinical_template_id: data.id }))

                rows[0].sections.push(inserted[0].clinical_section_id)


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
        const { rows } = await PG_CLIENT.query(templateQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {

        try {

            await PG_CLIENT.query(templateToSectionQueries.deleteByTemplateId(Id))

            const { rows } = await PG_CLIENT.query(templateQueries.deleteById(Id));

            return rows;
        }
        catch (err) {
            throw err
        }


    },

    updateById: async (Id: string, data: ITemplate) => {
        const { sections } = data

        delete data.sections

        try {

            await PG_CLIENT.query(templateToSectionQueries.deleteByTemplateId(Id))

            const { rows } = await PG_CLIENT.query(templateQueries.updateById(Id, data));

            rows[0].sections = []
            // @ts-ignore
            for (const section of sections) {

                const { rows: inserted } = await PG_CLIENT.query(templateToSectionQueries
                    .create({ clinical_section_id: section, practice_clinical_template_id: Id }))

                rows[0].sections.push(inserted[0].clinical_section_id)

            }

            return rows;
        }
        catch (err) {
            throw err
        }

    },
    findAll: async () => {
        const { rows } = await PG_CLIENT.query(templateQueries.findAll())

        return rows
    }
};