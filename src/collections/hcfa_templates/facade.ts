import { hcfaTemplatesQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IHcfaTemplates, IHcfaTemplatesUpdatedData } from './interfaces';


export const hcfaTemplatesFacade = {

    create: async (data: IHcfaTemplates) => {
        const { rows } = await PG_CLIENT.query(hcfaTemplatesQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(hcfaTemplatesQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(hcfaTemplatesQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IHcfaTemplatesUpdatedData) => {
        const { rows } = await PG_CLIENT.query(hcfaTemplatesQueries.updateById(Id, data));

        return rows;

    },

    findAll: async () => {
        const { rows } = await PG_CLIENT.query(hcfaTemplatesQueries.findAll())

        return rows
    }
};