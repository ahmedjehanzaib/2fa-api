export interface IPractice extends IPracticeUpdatedData {
    id: string,
};

export interface IPracticeUpdatedData {
    name: string;
    client_id: string;
    special_security_number: number;
    client_type: string | null;
    first_name?: string | null;
    last_name?: string | null;
    pay_to_address_same_as_address?: string | null;
    statement_address_same_as_address?: string | null;
    direct_secure_email?: string | null;
    direct_secure_password?: string | null;
    speciality?: string | null;
    statement_options?: IPracticeStatementOptions,
    statement_messages?: IPracticeStatementMessages
}

export interface IPracticeStatementAddress {
    practice_id: string,
    address_line_1: string,
    address_line_2: string,
    city: string,
    state: string,
    zipcode: string

}

export interface IPracticePaymentAddress {
    practice_id: string,
    address_line_1: string,
    address_line_2: string,
    city: string,
    state: string,
    zipcode: string

}

export interface IPracticeStatementOptions {
    practice_id: string,
    vendor?: string,
    aging_days?: string,
    maximum_statements?: string,
    phone_number?: string,
    fax?: string

}

export interface IPracticeStatementMessages {
    practice_id: string,
    above_30_days?: string,
    above_60_days?: string,
    above_90_days?: string,
    above_120_days?: string,
    outstanding_days?: string,

}

export interface IInsert extends IPractice {
    statement_address?: IPracticeStatementAddress,
    payment_address?: IPracticePaymentAddress


}

export interface IUpdate extends IPracticeUpdatedData {
    statement_address?: IPracticeStatementAddress,
    payment_address?: IPracticePaymentAddress


}