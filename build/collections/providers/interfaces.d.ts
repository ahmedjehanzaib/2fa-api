export interface IProvider {
    [index: string]: any;
    id: string;
    client_id: string;
    short_name: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    speciality: string;
    tax_id: string;
    individual_npi: string;
    group_npi: string;
    taxonomy_code: string;
    ssn: string;
    clia_number: string;
    dea_number: string;
    nadean: string;
    direct_secure_email: string;
    direct_secure_password: string;
    qualification: string;
    email: string;
    cell_number: string;
    work_phone: string;
    address_line_1?: string | null;
    address_line_2?: string | null;
    city?: string | null;
    state?: string | null;
    zipcode?: string | null;
    fax?: string | null;
    license_number: string;
    notes: string;
    active: boolean;
    signature: string;
    is_pay_to_address: boolean;
}
export interface IProviderUpdatedData {
    [index: string]: string | null | undefined | boolean;
    client_id: string;
    short_name: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    speciality: string;
    tax_id: string;
    individual_npi: string;
    group_npi: string;
    taxonomy_code: string;
    ssn: string;
    clia_number: string;
    dea_number: string;
    nadean: string;
    direct_secure_email: string;
    direct_secure_password: string;
    qualification: string;
    email: string;
    cell_number: string;
    work_phone: string;
    address_line_1?: string | null;
    address_line_2?: string | null;
    city?: string | null;
    state?: string | null;
    zipcode?: string | null;
    fax?: string | null;
    license_number: string;
    notes: string;
    active: boolean;
    signature: string;
    is_pay_to_address: boolean;
}
export interface IProviderPayToAddress {
    [index: string]: any;
    provider_id: string;
    address_line_1?: string;
    address_line_2?: string;
    city?: string;
    state?: string;
    zipcode?: string;
}
export interface IProviderPayToAddressUpdatedData {
    [index: string]: any;
    id: number;
    provider_id: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    zipcode: string;
}
export interface IProviderInsuranceBillingOption {
    [index: string]: any;
    provider_id: string;
    plan_id?: string;
    practice_location_id?: string;
    report_tax_id?: boolean;
    tax_id_type?: string;
    pay_to_address?: string;
}
export interface IProviderInsuranceBillingOptionUpdatedData {
    [index: string]: string | number | boolean;
    id: number;
    provider_id: string;
    plan_id: string;
    practice_location_id: string;
    report_tax_id: boolean;
    tax_id_type: string;
    pay_to_address: string;
}
export interface IInsertData extends IProvider {
    payment_address?: IProviderPayToAddress;
    insurance_billing_options?: IProviderInsuranceBillingOption;
}
export interface IUpdateData extends IProvider {
    payment_address?: IProviderPayToAddressUpdatedData;
    insurance_billing_options?: IProviderInsuranceBillingOptionUpdatedData;
}
