import { practiceModifierQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeModifier } from './interfaces';


export const practiceModifierFacade = {

    create: async (data: IPracticeModifier) => {
        const { rows } = await PG_CLIENT.query(practiceModifierQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceModifierQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceModifierQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeModifier) => {
        const { rows } = await PG_CLIENT.query(practiceModifierQueries.updateById(Id, data));

        return rows;

    },

    findAll: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceModifierQueries.findAll(Id))

        return rows
    }
};