import { IInsert, IUpdate } from './interfaces';
declare const practicesFacade: {
    createAPractice: (data: IInsert) => Promise<any[]>;
    findPracticeById: (Id: string) => Promise<any[]>;
    deletePracticeById: (Id: string) => Promise<any[]>;
    updatePracticeById: (Id: string, data: IUpdate) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
export { practicesFacade };
