import { IPractice, IPracticeUpdatedData } from './interfaces';
declare const practicesFacade: {
    createAPractice: (clientData: IPractice) => Promise<any[]>;
    findPracticeById: (clientId: string) => Promise<any[]>;
    deletePracticeById: (clientId: string) => Promise<any[]>;
    updatePracticeById: (clientId: string, clientData: IPracticeUpdatedData) => Promise<any[]>;
};
export { practicesFacade };
