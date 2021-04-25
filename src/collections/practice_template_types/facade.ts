import { practiceTemplateTypeQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeTemplateType } from './interfaces';


export const practiceTemplateTypeFacade = {

    create: async (data: IPracticeTemplateType) => {
        const { rows } = await PG_CLIENT.query(practiceTemplateTypeQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceTemplateTypeQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceTemplateTypeQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeTemplateType) => {
        const { rows } = await PG_CLIENT.query(practiceTemplateTypeQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceTemplateTypeQueries.findByPracticeId(practiceId))

        return rows
    }
};