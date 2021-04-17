import { IPracticePlaceOfService } from './interfaces';
export declare const practicePlaceOfServiceQueries: {
    create: (data: IPracticePlaceOfService) => {
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
    updateById: (Id: string, data: IPracticePlaceOfService) => {
        text: string;
        values: any[];
    };
    findAll: () => {
        text: string;
        values: never[];
    };
};
