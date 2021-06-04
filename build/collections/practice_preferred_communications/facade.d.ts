import { IPracticePreferredCommunication } from './interfaces';
export declare const practicePreferredCommunicationFacade: {
    create: (data: IPracticePreferredCommunication) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticePreferredCommunication) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
