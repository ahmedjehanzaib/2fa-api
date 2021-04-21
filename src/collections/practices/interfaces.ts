export interface IPractice extends IPracticeUpdatedData {
    id: string,
};

export interface IPracticeUpdatedData {
    [index: string]: any,
    name: string;
    client_id: string;
    special_security_number: number;
    client_type: string | null;
    first_name?: string | null;
    last_name?: string | null;
    statement_address_same_as_address?: boolean;
    direct_secure_email?: string | null;
    direct_secure_password?: string | null;
    speciality?: string | null;
    statement_options?: IPracticeStatementOptions,
    statement_messages?: IPracticeStatementMessages
}

export interface ILocation extends ILocationUpdatedData {
    id: string
};

export interface ILocationUpdatedData {
    [index: string]: any,
    name: string,
    practice_id: string,
    zipcode?: string,
    city: string,
    state: string
    address_line_1?: string | null,
    address_line_2?: string | null,
    phone_number?: string,
    fax?: string,
    website?: string,
    cell_number: string,
    by_default?: string
    description?: string
    email?: string,
    taxonomy_code: string,
    national_provider_identity: string,
    tax_id: string
    clia_number: string
    pos: string,
    pay_to_address_same_as_address: boolean;
    insurance_bill_under_location: boolean,
    insurance_bill_pay_to_address: boolean,
    insurance_donot_report_location: boolean,
    payment_address?: ILocationPaymentAddress

}

export interface IPracticeStatementAddress {
    [index: string]: any,
    practice_id?: string,
    address_line_1?: string,
    address_line_2?: string,
    city?: string,
    state?: string,
    zipcode?: string

}

export interface IPracticeStatementOptions {
    [index: string]: any,
    practice_id?: string,
    vendor?: string,
    aging_days?: string,
    maximum_statements?: string,
    phone_number?: string,
    fax?: string

}

export interface IPracticeStatementMessages {
    [index: string]: any,
    practice_id: string,
    above_30_days?: string,
    above_60_days?: string,
    above_90_days?: string,
    above_120_days?: string,
    outstanding_days?: string,

}

export interface ILocationPaymentAddress {
    [index: string]: any,
    practice_location_id?: string,
    zipcode?: string,
    city?: string,
    state?: string
    address_line_1?: string | null,
    address_line_2?: string | null
}

export interface IInsert extends IPractice {
    statement_address?: IPracticeStatementAddress,
    location?: ILocation
}

export interface IUpdate extends IPracticeUpdatedData {
    statement_address?: IPracticeStatementAddress,
    location?: ILocation
}