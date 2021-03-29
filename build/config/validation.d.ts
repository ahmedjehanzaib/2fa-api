import * as JOI from 'joi';
declare const validationSchema: {
    createAClient: {
        headers: {};
        body: {
            name: JOI.StringSchema;
            organization_name: JOI.StringSchema;
            tax_id: JOI.StringSchema;
            address_line_1: JOI.StringSchema;
            address_line_2: JOI.StringSchema;
            city: JOI.StringSchema;
            state: JOI.StringSchema;
            zipcode: JOI.StringSchema;
            phone_number: JOI.StringSchema;
            email: JOI.StringSchema;
            contact_person: JOI.StringSchema;
            fax: JOI.StringSchema;
        };
        params: {};
        query: {};
    };
    findAClient: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    deleteAClient: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    updateAClient: {
        headers: {};
        body: {
            name: JOI.StringSchema;
            organization_name: JOI.StringSchema;
            tax_id: JOI.StringSchema;
            address_line_1: JOI.StringSchema;
            address_line_2: JOI.StringSchema;
            city: JOI.StringSchema;
            state: JOI.StringSchema;
            zipcode: JOI.StringSchema;
            phone_number: JOI.StringSchema;
            email: JOI.StringSchema;
            contact_person: JOI.StringSchema;
            fax: JOI.StringSchema;
        };
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    createAPractice: {
        headers: {};
        body: {
            name: JOI.StringSchema;
            client_id: JOI.StringSchema;
            special_security_number: JOI.NumberSchema;
            client_type: JOI.StringSchema;
            first_name: JOI.StringSchema;
            last_name: JOI.StringSchema;
            pay_to_address_same_as_address: JOI.StringSchema;
            statement_address_same_as_address: JOI.StringSchema;
            direct_secure_email: JOI.StringSchema;
            direct_secure_password: JOI.StringSchema;
            speciality: JOI.StringSchema;
        };
        params: {};
        query: {};
    };
    findPractice: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    deleteAPractice: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    updateAPractice: {
        headers: {};
        body: {
            name: JOI.StringSchema;
            client_id: JOI.StringSchema;
            special_security_number: JOI.NumberSchema;
            client_type: JOI.StringSchema;
            first_name: JOI.StringSchema;
            last_name: JOI.StringSchema;
            pay_to_address_same_as_address: JOI.StringSchema;
            statement_address_same_as_address: JOI.StringSchema;
            direct_secure_email: JOI.StringSchema;
            direct_secure_password: JOI.StringSchema;
            speciality: JOI.StringSchema;
        };
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    createAPracticeLocation: {
        headers: {};
        body: {
            name: JOI.StringSchema;
            practice_id: JOI.StringSchema;
            zip_code: JOI.NumberSchema;
            city: JOI.StringSchema;
            state: JOI.StringSchema;
            address_line_1: JOI.StringSchema;
            address_line_2: JOI.StringSchema;
            phone_number: JOI.StringSchema;
            fax: JOI.StringSchema;
            website: JOI.StringSchema;
            cell_number: JOI.StringSchema;
            by_default: JOI.StringSchema;
            description: JOI.StringSchema;
            email: JOI.StringSchema;
            taxonomy_code: JOI.StringSchema;
            national_provider_identity: JOI.StringSchema;
            tax_id: JOI.StringSchema;
            clia_number: JOI.StringSchema;
            pos: JOI.StringSchema;
            insurance_bill_under_location: JOI.BooleanSchema;
            insurance_bill_pay_to_address: JOI.BooleanSchema;
            insurance_donot_report_location: JOI.BooleanSchema;
        };
        params: {};
        query: {};
    };
    findPracticeLocation: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    deleteAPracticeLocation: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    updateAPracticeLocation: {
        headers: {};
        body: {
            name: JOI.StringSchema;
            practice_id: JOI.StringSchema;
            zip_code: JOI.NumberSchema;
            city: JOI.StringSchema;
            state: JOI.StringSchema;
            address_line_1: JOI.StringSchema;
            address_line_2: JOI.StringSchema;
            phone_number: JOI.StringSchema;
            fax: JOI.StringSchema;
            website: JOI.StringSchema;
            cell_number: JOI.StringSchema;
            by_default: JOI.StringSchema;
            description: JOI.StringSchema;
            email: JOI.StringSchema;
            taxonomy_code: JOI.StringSchema;
            national_provider_identity: JOI.StringSchema;
            tax_id: JOI.StringSchema;
            clia_number: JOI.StringSchema;
            pos: JOI.StringSchema;
            insurance_bill_under_location: JOI.BooleanSchema;
            insurance_bill_pay_to_address: JOI.BooleanSchema;
            insurance_donot_report_location: JOI.BooleanSchema;
        };
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
};
export { validationSchema };
