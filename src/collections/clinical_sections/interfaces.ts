export interface ISection {
    [index: string]: any,
    practice_id: string,
    name: string,
    description?: string,
    question_groups?: string[]
}

export interface ISectionToQuestionGroup {
    clinical_section_id: string
    clinical_question_group_id: string
}