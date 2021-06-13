export interface IPatientLetter {
    [index: string]: any;
    practice_id: string;
    category_id: number;
    name: number;
    general_item_document: string;
    letter_text: string;
    user_fields?: IPatientFields[];
}
export interface IPatientFields {
    [index: string]: any;
    practice_patient_letter_id: string;
    new_user_field: string;
    insert_user_field: string;
}
