import { IPracticeRole, IPracticeRoleUpdatedData } from './interfaces';
export declare const practiceRoleFacade: {
    create: (data: IPracticeRole) => Promise<any[]>;
    findById: (Id: string) => Promise<any[]>;
    deleteById: (Id: string) => Promise<any[]>;
    updateById: (Id: string, data: IPracticeRoleUpdatedData) => Promise<any[]>;
    findAll: () => Promise<any[]>;
};
