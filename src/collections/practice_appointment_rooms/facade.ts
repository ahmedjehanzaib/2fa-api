import { practiceRoomQueries } from './queries';
import { PG_CLIENT } from '../../databases';
import { IPracticeRoom } from './interfaces';


export const practiceRoomsFacade = {

    create: async (data: IPracticeRoom) => {
        const { rows } = await PG_CLIENT.query(practiceRoomQueries.create(data))

        return rows;

    },

    findById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceRoomQueries.findById(Id));
        return rows;
    },

    deleteById: async (Id: string) => {
        const { rows } = await PG_CLIENT.query(practiceRoomQueries.deleteById(Id));

        return rows;
    },

    updateById: async (Id: string, data: IPracticeRoom) => {
        const { rows } = await PG_CLIENT.query(practiceRoomQueries.updateById(Id, data));

        return rows;

    },

    findByPracticeId: async (practiceId: string) => {
        const { rows } = await PG_CLIENT.query(practiceRoomQueries.findByPracticeId(practiceId))

        return rows
    }
};