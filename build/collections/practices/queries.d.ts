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
export { practicesQueries };
