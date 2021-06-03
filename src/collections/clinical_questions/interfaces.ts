export interface IQuestion {
    [index: string]: any,
    name: string,
    practice_id: string,
    question_type_id: number,
    options?: IQuestionOption[]
}

export interface IQuestionOption {
    [index: string]: any,
    clinical_question_id: string,
    name: string,
    description?: string
}