export interface IReferringProvider {
    [index: string]: string | null | undefined,
    id: string,
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
    na_dean: string;
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
    notes: string
};

export interface IReferringProviderUpdatedData {
    [index: string]: string | null | undefined,
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
    na_dean: string;
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
    notes: string
}