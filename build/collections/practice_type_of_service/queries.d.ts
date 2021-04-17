import { IPracticetypeOfService } from './interfaces';
export declare const practiceTypeOfServiceQueries: {
    create: (data: IPracticetypeOfService) => {
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
    updateById: (Id: string, data: IPracticetypeOfService) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
