import { categoriesQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IFormCategories } from './interfaces';


export const categoriesFacade = {

    create: async (data: IFormCategories) => {
        console.log(data)
    

            const { rows } = await PG_CLIENT.query(categoriesQueries.create(data))


            return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(categoriesQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {

            const { rows } = await PG_CLIENT.query(categoriesQueries.deleteById(Id));

            return rows;
       
    },

    updateById: async (Id: string, data: IFormCategories) => {

            const { rows } = await PG_CLIENT.query(categoriesQueries.updateById(Id, data));

            return rows;

    },
    findByPractice: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(categoriesQueries.findByPractice(Id))

        return rows
    }
};