import { IPracticeRoom } from './interfaces';
export declare const practiceRoomFacade: {
    create: (data: IPracticeRoom) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeRoom) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
