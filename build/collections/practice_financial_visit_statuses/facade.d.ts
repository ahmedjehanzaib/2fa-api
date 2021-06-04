import { IPracticeFinancialVisitStatus } from './interfaces';
export declare const practiceFinancialVisitStatusFacade: {
    create: (data: IPracticeFinancialVisitStatus) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeFinancialVisitStatus) => Promise<any[]>;
    findByPracticeId: (practiceId: string) => Promise<any[]>;
};
