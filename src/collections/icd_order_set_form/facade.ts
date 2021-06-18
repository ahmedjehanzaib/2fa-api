import { v4 as uuidv4 } from 'uuid';

import { ICDOrderFormQueries, ICDOrderSetFormCategoriesICDs, ICDOrderSetFormToCategories } from './queries';
import { PG_CLIENT } from '../../databases';
import { IClinicalTemplateICDOrderSetForm } from './interfaces';


export const ICDOrderFormFacade = {

    create: async (data: IClinicalTemplateICDOrderSetForm) => {

        const { category_icds } = data

        delete data.category_icds

        try {

            await PG_CLIENT.query('BEGIN')

            const { rows } = await PG_CLIENT.query(ICDOrderFormQueries.create(data))


            rows[0].category_icds = []

            // @ts-ignore
            for (const cat of category_icds) {
                const { icds, categoryId } = cat

                const category = {
                    categoryId,
                    icds: []
                }

                for await (const icdId of icds) {

                    const { rows: inserted } = await PG_CLIENT.query(ICDOrderSetFormCategoriesICDs
                        .create({ id: uuidv4(), icd_order_set_form_category_id: categoryId, practice_icd_id: icdId, icd_order_set_form_id: rows[0].id }))

                        console.log(1)
                        
                    category.icds.push(inserted[0].practice_icd_id as never)

                }


                await PG_CLIENT.query(ICDOrderSetFormToCategories
                    .create({ icd_order_set_form_categories_id: categoryId, template_icd_order_set_form_id: rows[0].id }))

                rows[0].category_icds.push(category)

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
        const { rows } = await PG_CLIENT.query(ICDOrderFormQueries.findById(Id));
        const { rows: categories } = await PG_CLIENT.query(ICDOrderSetFormToCategories.findByFormId(Id));

        rows[0].category_icds = []

        for (const { template_icd_order_set_form_id } of categories) {

            const { rows: icds } = await PG_CLIENT.query(ICDOrderSetFormCategoriesICDs.findByCategoryAndFormId(template_icd_order_set_form_id, Id));

            rows[0].category_icds.push({ categoryId: template_icd_order_set_form_id, icds: icds.map(({ practice_icd_id }: any) => practice_icd_id) })


        }

        return rows;
    },

    deleteById: async (Id: string) => {
        try {

            await PG_CLIENT.query('BEGIN')

            await PG_CLIENT.query(ICDOrderSetFormCategoriesICDs.deleteByFormId(Id))
            await PG_CLIENT.query(ICDOrderSetFormToCategories.deleteByFormId(Id))
            const { rows } = await PG_CLIENT.query(ICDOrderFormQueries.deleteById(Id));

            await PG_CLIENT.query('COMMIT')

            return rows;
        }
        catch (err) {
            await PG_CLIENT.query('ROLLBACK')
            throw err
        }

    },

    updateById: async (Id: string, data: IClinicalTemplateICDOrderSetForm) => {

        const { category_icds } = data

        delete data.category_icds

        try {

            await PG_CLIENT.query('BEGIN')

            const { rows } = await PG_CLIENT.query(ICDOrderFormQueries.updateById(Id, data))
            await PG_CLIENT.query(ICDOrderSetFormCategoriesICDs.deleteByFormId(Id))

            await PG_CLIENT.query(ICDOrderSetFormToCategories.deleteByFormId(Id))


            rows[0].category_icds = []

            // @ts-ignore
            for (const cat of category_icds) {
                const { icds, categoryId } = cat

                const category = {
                    categoryId,
                    cpts: []
                }

                for await (const icdId of icds) {



                    const { rows: inserted } = await PG_CLIENT.query(ICDOrderSetFormCategoriesICDs
                        .create({ id: uuidv4(), icd_order_set_form_category_id: categoryId, practice_icd_id: icdId, icd_order_set_form_id: Id  }))

                    category.cpts.push(inserted[0].practice_icd_id as never)

                }

                await PG_CLIENT.query(ICDOrderSetFormToCategories
                    .create({ icd_order_set_form_categories_id: categoryId, template_icd_order_set_form_id: rows[0].id }))

                rows[0].category_icds.push(category)

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
        const { rows } = await PG_CLIENT.query(ICDOrderFormQueries.findAll(Id))

        // for (let i = 0; i < rows.length; i++) {

        //     const { rows: categories } = await PG_CLIENT.query(ICDOrderSetFormToCategories.findByFormId(rows[i].id));

        //     rows[i].category_icds = []

        //     for (const { template_icd_order_set_form_id } of categories) {

        //         const { rows: cpts } = await PG_CLIENT.query(ICDOrderSetFormCategoriesICDs.findByCategoryId(template_icd_order_set_form_id));

        //         rows[i].category_icds.push({ categoryId: template_icd_order_set_form_id, cpts: cpts.map(({ practice_icd_id }: any) => practice_icd_id) })


        //     }

        // }
        return rows;
    }
};