import { practiceCPTQueries, CPTToModifierQueries, CPTToICDQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IRequestData } from './interfaces';


export const practiceCPTFacade = {

    create: async (data: IRequestData) => {
        const { modifiers, icds } = data

        delete data.modifiers
        delete data.icds

        const { rows } = await PG_CLIENT.query(practiceCPTQueries.create(data))

        rows[0].modifiers = []
        rows[0].icds = []

        if (modifiers) {
            for (const modifier of modifiers) {
                // @ts-ignore
                const { rows: inserted } = await PG_CLIENT.query(CPTToModifierQueries.create({ cpt_id: rows[0].id, ...modifier }))
                rows[0].modifiers.push(inserted[0])

            }
        }

        if (icds) {
            for (const icd of icds) {
                // @ts-ignore
                const { rows: inserted } = await PG_CLIENT.query(CPTToICDQueries.create({ cpt_id: rows[0].id, ...icd }))
                rows[0].icds.push(inserted[0])

            }
        }

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceCPTQueries.findById(Id));
        const { rows: modifiers } = await PG_CLIENT.query(CPTToModifierQueries.findByCPTId(Id));
        const { rows: icds } = await PG_CLIENT.query(CPTToICDQueries.findByCPTId(Id));
        rows[0].modifiers = modifiers
        rows[0].icds = icds
        return rows;
    },

    deleteById: async (Id: string) => {

        await PG_CLIENT.query(CPTToModifierQueries.deleteByCPTId(Id));
        await PG_CLIENT.query(CPTToICDQueries.deleteByCPTId(Id));

        const { rows } = await PG_CLIENT.query(practiceCPTQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IRequestData) => {

        const { modifiers, icds } = data

        delete data.modifiers
        delete data.icds

        const { rows } = await PG_CLIENT.query(practiceCPTQueries.updateById(Id, data));

        rows[0].modifiers = []
        rows[0].icds = []

        if (modifiers) {
            for (const modifier of modifiers) {
                if (modifier.id) {
                    // @ts-ignore
                    const { rows: inserted } = await PG_CLIENT.query(CPTToModifierQueries.updateById(modifier.id, { cpt_id: rows[0].id, ...modifier }))
                    rows[0].modifiers.push(inserted[0])

                } else {

                    // @ts-ignore
                    const { rows: inserted } = await PG_CLIENT.query(CPTToModifierQueries.create({ cpt_id: rows[0].id, ...modifier }))
                    rows[0].modifiers.push(inserted[0])
                }

            }
        }

        if (icds) {
            for (const icd of icds) {
                if (icd.id) {
                    // @ts-ignore
                    const { rows: inserted } = await PG_CLIENT.query(CPTToICDQueries.updateById(icd.id, { cpt_id: rows[0].id, ...icd }))
                    rows[0].icds.push(inserted[0])

                } else {

                    // @ts-ignore
                    const { rows: inserted } = await PG_CLIENT.query(CPTToICDQueries.create({ cpt_id: rows[0].id, ...icd }))
                    rows[0].icds.push(inserted[0])
                }

            }
        }

        return rows;

    },

    findAll: async () => {
        const { rows } = await PG_CLIENT.query(practiceCPTQueries.findAll())

        return rows
    }
};