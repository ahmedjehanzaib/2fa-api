export interface IPracticePlan extends IPracticePlanUpdatedData {
    id: string
};

export interface IPracticePlanUpdatedData {
    [index: string]: any,
    practice_id: string,
    name?: string,
    description?: string,
    payer_id?: string,
    plan_category_id?: string,
    plan_type_id?: string,
    fax?: string,
    submission_type?: string,
    hcfa_template_id?: string
}

export interface IPlanFees extends IPlanFeesUpdatedData {
    // id: string
};

export interface IPlanFeesUpdatedData {
    [index: string]: any,
    cpt_id: string,
    fee: number,
    plan_id?: string,
    allowed: boolean
}

export interface IPlanAddress extends IPlanAddressUpdatedData {
    // id: string
};

export interface IPlanAddressUpdatedData {
    [index: string]: any,
    address_line_1?: string,
    address_line_2?: string,
    city?: string,
    state?: string,
    zipcode?: string,
    work_phone?: string,
    fax?: string

}

export interface InsertData extends IPracticePlan {
    fees?: IPlanFees,
    address?: IPlanAddress
}

export interface UpdateData extends IPracticePlanUpdatedData {
    fees?: IPlanFees,
    address?: IPlanAddress
}