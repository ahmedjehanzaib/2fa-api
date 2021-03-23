export interface IPractice {
    id: string,
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
}