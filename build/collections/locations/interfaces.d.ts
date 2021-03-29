export interface ILocation {
    id: string;
    name: string;
    practice_id: string;
    zip_code?: number;
    city: string;
    state: string;
    address_line_1?: string | null;
    address_line_2?: string | null;
    phone_number?: string;
    fax?: string;
    website?: string;
    cell_number: string;
    by_default: string;
    description?: string;
    email?: string;
    taxonomy_code: string;
    national_provider_identity: string;
    tax_id: string;
    clia_number: string;
    pos: string;
    insurance_bill_under_location: boolean;
    insurance_bill_pay_to_address: boolean;
    insurance_donot_report_location: boolean;
}
export interface ILocationUpdatedData {
    name: string;
    practice_id: string;
    zip_code?: number;
    city: string;
    state: string;
    address_line_1?: string | null;
    address_line_2?: string | null;
    phone_number?: string;
    fax?: string;
    website?: string;
    cell_number: string;
    by_default?: string;
    description?: string;
    email?: string;
    taxonomy_code: string;
    national_provider_identity: string;
    tax_id: string;
    clia_number: string;
    pos: string;
    insurance_bill_under_location: boolean;
    insurance_bill_pay_to_address: boolean;
    insurance_donot_report_location: boolean;
}
