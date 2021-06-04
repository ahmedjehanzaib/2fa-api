export interface IQuestionGroup {
    [index: string]: any;
    practice_id: string;
    name: string;
    description?: string;
    questions?: string[];
}
export interface IQuestionGroupToQuestion {
    clinical_question_id: string;
    clinical_question_group_id: string;
}
