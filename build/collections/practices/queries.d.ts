import { IPractice } from './interfaces';
declare const practicesQueries: {
    createAPractice: (practiceData: IPractice) => {
        text: string;
        values: (string | number | null | undefined)[];
    };
    findPracticeById: (practiceId: string) => {
        text: string;
        values: string[];
    };
    deletePracticesById: (practiceId: string) => {
        text: string;
        values: string[];
    };
    updatePracticeById: (practiceId: string, practiceData: any) => {
        text: string;
        values: any[];
    };
};
declare const practiceStatementAddressQueries: {
    create: (data: any) => {
        text: string;
        values: any[];
    };
    findById: (practiceId: string) => {
        text: string;
        values: string[];
    };
    deleteById: (practiceId: string) => {
        text: string;
        values: string[];
    };
    updateById: (practiceId: string, practiceData: any) => {
        text: string;
        values: any[];
    };
};
declare const practiceStatementMessagesQueries: {
    create: (data: any) => {
        text: string;
        values: any[];
    };
    findById: (practiceId: string) => {
        text: string;
        values: string[];
    };
    deleteById: (practiceId: string) => {
        text: string;
        values: string[];
    };
    updateById: (practiceId: string, practiceData: any) => {
        text: string;
        values: any[];
    };
};
declare const practiceStatementOptionsQueries: {
    create: (data: any) => {
        text: string;
        values: any[];
    };
    findById: (practiceId: string) => {
        text: string;
        values: string[];
    };
    deleteById: (practiceId: string) => {
        text: string;
        values: string[];
    };
    updateById: (practiceId: string, practiceData: any) => {
        text: string;
        values: any[];
    };
};
export { practicesQueries, practiceStatementAddressQueries, practiceStatementMessagesQueries, practiceStatementOptionsQueries };
