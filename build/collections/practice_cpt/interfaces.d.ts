export interface IPracticeCPT {
    [index: string]: any;
    practice_id: string;
    cpt_code?: string;
    description?: string;
    service_description?: string;
    fess?: number;
    medicare_fees?: number;
    place_of_service?: number;
    type_of_service?: number;
    procedure_category?: number;
    ndc_number?: string;
    ndc_description?: string;
    ndc_units?: string;
    ndc_unit_of_measurements?: number;
    actively_used?: boolean;
    valid?: boolean;
    discontinued?: boolean;
    clia?: boolean;
    patient_responsibility?: boolean;
    donot_print?: boolean;
    revenue_code: string;
}
export interface ICPTToModifier {
    [index: string]: any;
    cpt_id: number;
    modifier_id: number;
}
export interface ICPTToICD {
    [index: string]: any;
    cpt_id: number;
    icd_id: number;
}
export interface IRequestData extends IPracticeCPT {
    modifiers?: ICPTToModifier[];
    icds?: ICPTToICD[];
}
