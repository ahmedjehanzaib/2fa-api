import { IPracticeRole, IPracticeRoleUpdatedData } from './interfaces';
export declare const practiceRolesQueries: {
    create: (data: IPracticeRole) => {
        text: string;
        values: any[];
    };
    findById: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteById: (Id: string) => {
        text: string;
        values: string[];
    };
    updateById: (Id: string, locationData: IPracticeRoleUpdatedData) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
