import { IPractice, ILocation, IPracticeUpdatedData, ILocationUpdatedData, ILocationPaymentAddress, IPracticeStatementAddress, IPracticeStatementMessages, IPracticeStatementOptions } from './interfaces';
export declare const practicesQueries: {
    createAPractice: (data: IPractice) => {
        text: string;
        values: any[];
    };
    findPracticeById: (practiceId: string) => {
        text: string;
        values: string[];
    };
    deletePracticesById: (practiceId: string) => {
        text: string;
        values: string[];
    };
    updatePracticeById: (practiceId: string, practiceData: IPracticeUpdatedData) => {
        text: string;
        values: any[];
    };
};
export declare const locationQueries: {
    create: (data: ILocation) => {
        text: string;
        values: any[];
    };
    findById: (locationId: string) => {
        text: string;
        values: string[];
    };
    findByPracticeId: (practiceId: string) => {
        text: string;
        values: string[];
    };
    deleteBypracticeId: (practiceId: string) => {
        text: string;
        values: string[];
    };
    updateById: (locationId: string, locationData: ILocationUpdatedData) => {
        text: string;
        values: any[];
    };
};
export declare const practiceStatementAddressQueries: {
    create: (data: IPracticeStatementAddress) => {
        text: string;
        values: any[];
    };
    findByPracticeId: (practiceId: string) => {
        text: string;
        values: string[];
    };
    deleteByPracticeId: (practiceId: string) => {
        text: string;
        values: string[];
    };
    updateByPracticeId: (practiceId: string, data: IPracticeStatementAddress) => {
        text: string;
        values: any[];
    };
};
export declare const practiceStatementMessagesQueries: {
    create: (data: IPracticeStatementMessages) => {
        text: string;
        values: any[];
    };
    findByPracticeId: (practiceId: string) => {
        text: string;
        values: string[];
    };
    deleteByPracticeId: (practiceId: string) => {
        text: string;
        values: string[];
    };
    updateByPracticeId: (practiceId: string, practiceData: IPracticeStatementMessages) => {
        text: string;
        values: any[];
    };
};
export declare const practiceStatementOptionsQueries: {
    create: (data: IPracticeStatementOptions) => {
        text: string;
        values: any[];
    };
    findByPracticeId: (practiceId: string) => {
        text: string;
        values: string[];
    };
    deleteByPracticeId: (practiceId: string) => {
        text: string;
        values: string[];
    };
    updateByPracticeId: (practiceId: string, practiceData: IPracticeStatementOptions) => {
        text: string;
        values: any[];
    };
};
export declare const locationPaymentAddressQueries: {
    create: (data: ILocationPaymentAddress) => {
        text: string;
        values: any[];
    };
    findByLocationId: (Id: string) => {
        text: string;
        values: string[];
    };
    deleteByLocationId: (locationId: any[]) => {
        text: string;
        values: any[][];
    };
    deleteByLocationIds: (locationIds: any[]) => {
        text: string;
        values: never[];
    };
    updateByLocationId: (locationId: string, locationData: ILocationPaymentAddress) => {
        text: string;
        values: any[];
    };
};
