export interface IClient {
    id: string,
    name: string;
    organization_name: string;
    tax_id: string;
    address_line_1?: string | null;
    address_line_2?: string | null;
    city?: string | null;
    state?: string | null;
    zipcode?: string | null;
    phone_number?: string | null;
    email?: string | null;
    contact_person?: string | null;
    fax?: string | null;
};

export interface IClientUpdatedData {
    name?: string;
    organization_name?: string;
    tax_id?: string;
    address_line_1?: string | null;
    address_line_2?: string | null;
    city?: string | null;
    state?: string | null;
    zipcode?: string | null;
    phone_number?: string | null;
    email?: string | null;
    contact_person?: string | null;
    fax?: string | null;
}