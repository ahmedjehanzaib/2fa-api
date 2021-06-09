import { v4 as uuidv4 } from 'uuid';

import { CPTPanelGroupQueries, panelGroupCPTsQueries, panelGroupCPTsModifiers, panelGroupCPTsICDs } from './queries';
import { PG_CLIENT } from '../../databases';
import { ITemplateCPTPanelGroup } from './interfaces';


export const CPTPanelGroupFacade = {

    create: async (data: ITemplateCPTPanelGroup) => {

        const { cpt_groups } = data

        delete data.cpt_groups

        try {

            await PG_CLIENT.query('BEGIN')

            const { rows } = await PG_CLIENT.query(CPTPanelGroupQueries.create(data))

            rows[0].cpt_groups = []

            // @ts-ignore
            for (const { cpt, icds, modifiers } of cpt_groups) {

                const { rows: insertedCPT } = await PG_CLIENT.query(panelGroupCPTsQueries
                    .create({ id: uuidv4(), template_cpt_panel_group_id: data.id, practice_cpt_id: cpt }))

                console.log('inserted', insertedCPT)

                const groups = {
                    cpt: insertedCPT[0].practice_cpt_id,
                    icds: [],
                    modifiers: []
                }

                const { id: template_cpt_panel_groups_cpt_id } = insertedCPT[0]

                for await (const icdId of icds) {


                    const { rows: inserted } = await PG_CLIENT.query(panelGroupCPTsICDs
                        .create({ id: uuidv4(), template_cpt_panel_groups_cpt_id, practice_icd_id: icdId }))
                    console.log('inserted1', inserted)

                    groups.icds.push(inserted[0].practice_icd_id as never)

                }

                for await (const modifierId of modifiers) {


                    const { rows: inserted } = await PG_CLIENT.query(panelGroupCPTsModifiers
                        .create({ id: uuidv4(), template_cpt_panel_groups_cpt_id, practice_modifier_id: modifierId }))
                    console.log('inserted2', inserted)

                    groups.modifiers.push(inserted[0].practice_modifier_id as never)

                }

                rows[0].cpt_groups.push(cpt_groups)

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
        
        const { rows } = await PG_CLIENT.query(CPTPanelGroupQueries.findById(Id));
        const { rows: cpts } = await PG_CLIENT.query(panelGroupCPTsQueries.findByGroupId(Id));

        rows[0].cpt_groups = []

        for (const { id, practice_cpt_id } of cpts) {

            const { rows: icds } = await PG_CLIENT.query(panelGroupCPTsICDs.findBygroupCPTId(id));
            const { rows: modfiers } = await PG_CLIENT.query(panelGroupCPTsModifiers.findBygroupCPTId(id));

            const group = {
                cpt: practice_cpt_id,
                icds: icds.map(({ practice_icd_id }) => practice_icd_id),
                modifiers: modfiers.map(({ practice_modifier_id }) => practice_modifier_id)
            }

            rows[0].cpt_groups.push(group)

        }

        return rows;
    },

    deleteById: async (Id: string) => {
        try {

            await PG_CLIENT.query('BEGIN')

            const { rows: deleted } = await PG_CLIENT.query(panelGroupCPTsQueries.deleteByGroupId(Id))

            const ids = deleted.map(({ template_cpt_panel_groups_cpt_id }) => template_cpt_panel_groups_cpt_id)

            await PG_CLIENT.query(panelGroupCPTsICDs.deleteBygroupCPTIds(ids))
            await PG_CLIENT.query(panelGroupCPTsModifiers.deleteBygroupCPTIds(ids))

            const { rows } = await PG_CLIENT.query(CPTPanelGroupQueries.deleteById(Id));

            await PG_CLIENT.query('COMMIT')

            return rows;
        }
        catch (err) {
            await PG_CLIENT.query('ROLLBACK')
            throw err
        }

    },

    updateById: async (Id: string, data: ITemplateCPTPanelGroup) => {

        const { cpt_groups } = data

        delete data.cpt_groups
      
        try {

            await PG_CLIENT.query('BEGIN')

            const { rows: found } = await PG_CLIENT.query(panelGroupCPTsQueries.findByGroupId(Id))


            const ids = found.map(({ id }) => id).join(',')

            await PG_CLIENT.query(panelGroupCPTsICDs.deleteBygroupCPTIds(ids))

            await PG_CLIENT.query(panelGroupCPTsModifiers.deleteBygroupCPTIds(ids))


            await PG_CLIENT.query(panelGroupCPTsQueries.deleteByGroupId(Id))

            const { rows } = await PG_CLIENT.query(CPTPanelGroupQueries.updateById(Id, data))

            rows[0].cpt_groups = []

            // @ts-ignore
            for (const { cpt, icds, modifiers } of cpt_groups) {

                const { rows: insertedCPT } = await PG_CLIENT.query(panelGroupCPTsQueries
                    .create({ id: uuidv4(), template_cpt_panel_group_id: Id, practice_cpt_id: cpt }))

                const groups = {
                    cpt: insertedCPT[0].practice_cpt_id,
                    icds: [],
                    modifiers: []
                }

                const { id: template_cpt_panel_groups_cpt_id } = insertedCPT[0]

                for await (const icdId of icds) {


                    const { rows: inserted } = await PG_CLIENT.query(panelGroupCPTsICDs
                        .create({ id: uuidv4(), template_cpt_panel_groups_cpt_id, practice_icd_id: icdId }))

                    groups.icds.push(inserted[0].practice_icd_id as never)

                }

                for await (const modifierId of modifiers) {


                    const { rows: inserted } = await PG_CLIENT.query(panelGroupCPTsModifiers
                        .create({ id: uuidv4(), template_cpt_panel_groups_cpt_id, practice_modifier_id: modifierId }))

                    groups.modifiers.push(inserted[0].practice_modifier_id as never)

                }

                rows[0].cpt_groups.push(groups)

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
        const { rows } = await PG_CLIENT.query(CPTPanelGroupQueries.findByPractice(Id))
        return rows;
    }
};