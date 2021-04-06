import { IPractice, IPracticeUpdatedData } from './interfaces';
declare const practicesFacade: {
    createAPractice: (data: IPractice) => Promise<any[]>;
    findPracticeById: (clientId: string) => Promise<any[]>;
    deletePracticeById: (Id: string) => Promise<any[]>;
    updatePracticeById: (clientId: string, practiceData: IPracticeUpdatedData) => Promise<any[]>;
};
export { practicesFacade };
