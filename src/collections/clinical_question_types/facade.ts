import { questionTypeQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IQuestionType } from './interfaces';


export const questionTypeFacade = {

    create: async (data: IQuestionType) => {
        const { rows } = await PG_CLIENT.query(questionTypeQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(questionTypeQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(questionTypeQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IQuestionType) => {
        const { rows } = await PG_CLIENT.query(questionTypeQueries.updateById(Id, data));

        return rows;

    },
    findAll: async () => {
        const { rows } = await PG_CLIENT.query(questionTypeQueries.findAll())

        return rows
    }
};