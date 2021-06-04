import { IPracticeDocument } from './interfaces';
export declare const practiceDocumentFacade: {
    create: (data: IPracticeDocument) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeDocument) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
