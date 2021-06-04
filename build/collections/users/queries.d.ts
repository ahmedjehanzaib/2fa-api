import { IUser, IUpdateData, IUserRole } from './interfaces';
export declare const userQueries: {
    create: (data: IUser) => {
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
    updateById: (Id: string, data: IUpdateData) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
export declare const userRolesQueries: {
    create: (data: IUserRole) => {
        text: string;
        values: any[];
    };
    findByUserId: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteByUserId: (Id: string) => {
        text: string;
        values: string[];
    };
    updateByUserId: (Id: string, data: IUserRole) => {
        text: string;
        values: any[];
    };
    updateById: (Id: string, data: IUserRole) => {
        text: string;
        values: any[];
    };
};
