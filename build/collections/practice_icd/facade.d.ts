import { IPracticeICD } from './interfaces';
export declare const practiceICDFacade: {
    create: (data: IPracticeICD) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeICD) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
