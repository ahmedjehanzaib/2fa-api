import { v4 as uuidv4 } from 'uuid';

import { CPTOrderFormQueries, cptOrderSetFormCategoriesCPTs, cptOrderSetFormToCategories } from './queries';
import { PG_CLIENT } from '../../databases';
import { IClinicalTemplateCPTOrderSetForm } from './interfaces';


export const CPTOrderFormFacade = {

    create: async (data: IClinicalTemplateCPTOrderSetForm) => {

        const { category_cpts } = data

        delete data.category_cpts

        try {

            await PG_CLIENT.query('BEGIN')

            const { rows } = await PG_CLIENT.query(CPTOrderFormQueries.create(data))


            rows[0].category_cpts = []

            // @ts-ignore
            for (const cat of category_cpts) {
                const { cpts, categoryId } = cat

                const category = {
                    categoryId,
                    cpts: []
                }

                for await (const cptId of cpts) {

                    const { rows: inserted } = await PG_CLIENT.query(cptOrderSetFormCategoriesCPTs
                        .create({ id: uuidv4(), cpt_order_set_form_category_id: categoryId, practice_cpt_id: cptId, cpt_order_set_form_id: rows[0].id }))

                    category.cpts.push(inserted[0].practice_cpt_id as never)

                }

                await PG_CLIENT.query(cptOrderSetFormToCategories
                    .create({ cpt_order_set_form_category_id: categoryId, template_cpt_order_set_form_id: rows[0].id }))

                rows[0].category_cpts.push(category)

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
        const { rows } = await PG_CLIENT.query(CPTOrderFormQueries.findById(Id));
        const { rows: categories } = await PG_CLIENT.query(cptOrderSetFormToCategories.findByFormId(Id));

        rows[0].category_cpts = []

        for (const { cpt_order_set_form_category_id } of categories) {

            const { rows: cpts } = await PG_CLIENT.query(cptOrderSetFormCategoriesCPTs.findByCategoryAndFormId(cpt_order_set_form_category_id, Id));

            rows[0].category_cpts.push({ categoryId: cpt_order_set_form_category_id, cpts: cpts.map(({ practice_cpt_id }: any) => practice_cpt_id) })


        }

        return rows;
    },

    deleteById: async (Id: string) => {
        try {

            await PG_CLIENT.query('BEGIN')

            await PG_CLIENT.query(cptOrderSetFormCategoriesCPTs.deleteByFormId(Id))
            await PG_CLIENT.query(cptOrderSetFormToCategories.deleteByFormId(Id))
            const { rows } = await PG_CLIENT.query(CPTOrderFormQueries.deleteById(Id));

            await PG_CLIENT.query('COMMIT')

            return rows;
        }
        catch (err) {
            await PG_CLIENT.query('ROLLBACK')
            throw err
        }

    },

    updateById: async (Id: any, data: IClinicalTemplateCPTOrderSetForm) => {

        const { category_cpts } = data

        delete data.category_cpts

        try {

            await PG_CLIENT.query('BEGIN')
           
            await PG_CLIENT.query(cptOrderSetFormCategoriesCPTs.deleteByFormId(Id))
            await PG_CLIENT.query(cptOrderSetFormToCategories.deleteByFormId(Id))
            const { rows } = await PG_CLIENT.query(CPTOrderFormQueries.updateById(Id, data))

            rows[0].category_cpts = []

            // @ts-ignore
            for (const cat of category_cpts) {
                const { cpts, categoryId } = cat

                const category = {
                    categoryId,
                    cpts: []
                }

                for await (const cptId of cpts) {

                    const { rows: inserted } = await PG_CLIENT.query(cptOrderSetFormCategoriesCPTs
                        .create({ id: uuidv4(), cpt_order_set_form_category_id: categoryId, practice_cpt_id: cptId, cpt_order_set_form_id: Id }))

                    category.cpts.push(inserted[0].practice_cpt_id as never)

                }

                await PG_CLIENT.query(cptOrderSetFormToCategories
                    .create({ cpt_order_set_form_category_id: categoryId, template_cpt_order_set_form_id: rows[0].id }))

                rows[0].category_cpts.push(category)

            }

            await PG_CLIENT.query('COMMIT')

            return rows

        }
        catch (err) {
            await PG_CLIENT.query('ROLLBACK')

            throw err
        }

    },

    findAll: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(CPTOrderFormQueries.findAll(Id))

        // for (let i = 0; i < rows.length; i++) {

        //     const { rows: categories } = await PG_CLIENT.query(cptOrderSetFormToCategories.findByFormId(rows[i].id));

        //     rows[i].category_cpts = []

        //     for (const { cpt_order_set_form_category_id } of categories) {

        //         const { rows: cpts } = await PG_CLIENT.query(cptOrderSetFormCategoriesCPTs.findByCategoryId(cpt_order_set_form_category_id));

        //         rows[i].category_cpts.push({ categoryId: cpt_order_set_form_category_id, cpts: cpts.map(({ practice_cpt_id }: any) => practice_cpt_id) })


        //     }

        // }
        return rows;
    }
};