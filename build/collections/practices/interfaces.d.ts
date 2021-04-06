export interface IPractice {
    id: string;
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
    is_statement_address_same?: {
        practice_id: string;
        address_line_1: string;
        address_line_2: string;
        city: string;
        state: string;
        zipcode: string;
    };
    is_pay_to_address_same?: {};
}
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
}
