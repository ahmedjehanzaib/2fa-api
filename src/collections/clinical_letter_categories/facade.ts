import { letterCategoriesQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { ILetterCategories } from './interfaces';


export const letterCategoriesFacade = {

    create: async (data: ILetterCategories) => {
            const { rows } = await PG_CLIENT.query(letterCategoriesQueries.create(data))

            return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(letterCategoriesQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {

            const { rows } = await PG_CLIENT.query(letterCategoriesQueries.deleteById(Id));

            return rows;
       
    },

    updateById: async (Id: string, data: ILetterCategories) => {

            const { rows } = await PG_CLIENT.query(letterCategoriesQueries.updateById(Id, data));

            return rows;

    },
    findAll: async () => {
        const { rows } = await PG_CLIENT.query(letterCategoriesQueries.findAll())

        return rows
    }
};