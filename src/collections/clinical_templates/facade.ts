import { templateQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { ITemplate } from './interfaces';


export const templateFacade = {

    create: async (data: ITemplate) => {
    

            const { rows } = await PG_CLIENT.query(templateQueries.create(data))


            return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(templateQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {

            const { rows } = await PG_CLIENT.query(templateQueries.deleteById(Id));

            return rows;
       
    },

    updateById: async (Id: string, data: ITemplate) => {

            const { rows } = await PG_CLIENT.query(templateQueries.updateById(Id, data));

            return rows;

    },
    findAll: async () => {
        const { rows } = await PG_CLIENT.query(templateQueries.findAll())

        return rows
    }
};