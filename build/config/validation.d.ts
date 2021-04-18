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
            special_security_number: JOI.StringSchema;
            client_type: JOI.StringSchema;
            first_name: JOI.StringSchema;
            last_name: JOI.StringSchema;
            statement_address_same_as_address: JOI.BooleanSchema;
            direct_secure_email: JOI.StringSchema;
            direct_secure_password: JOI.StringSchema;
            speciality: JOI.StringSchema;
            location: JOI.ObjectSchema;
            statement_address: JOI.AlternativesSchema;
            statement_options: JOI.ObjectSchema;
            statement_messages: JOI.ObjectSchema;
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
            special_security_number: JOI.StringSchema;
            client_type: JOI.StringSchema;
            first_name: JOI.StringSchema;
            last_name: JOI.StringSchema;
            statement_address_same_as_address: JOI.BooleanSchema;
            direct_secure_email: JOI.StringSchema;
            direct_secure_password: JOI.StringSchema;
            speciality: JOI.StringSchema;
            location: JOI.ObjectSchema;
            statement_address: JOI.AlternativesSchema;
            statement_options: JOI.ObjectSchema;
            statement_messages: JOI.ObjectSchema;
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
            by_default: JOI.BooleanSchema;
            description: JOI.StringSchema;
            email: JOI.StringSchema;
            taxonomy_code: JOI.StringSchema;
            national_provider_identity: JOI.StringSchema;
            tax_id: JOI.StringSchema;
            clia_number: JOI.StringSchema;
            pos: JOI.StringSchema;
            pay_to_address_same_as_address: JOI.BooleanSchema;
            insurance_bill_under_location: JOI.BooleanSchema;
            insurance_bill_pay_to_address: JOI.BooleanSchema;
            insurance_donot_report_location: JOI.BooleanSchema;
            payment_address: JOI.AlternativesSchema;
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
            by_default: JOI.BooleanSchema;
            description: JOI.StringSchema;
            email: JOI.StringSchema;
            taxonomy_code: JOI.StringSchema;
            national_provider_identity: JOI.StringSchema;
            tax_id: JOI.StringSchema;
            clia_number: JOI.StringSchema;
            pos: JOI.StringSchema;
            pay_to_address_same_as_address: JOI.BooleanSchema;
            insurance_bill_under_location: JOI.BooleanSchema;
            insurance_bill_pay_to_address: JOI.BooleanSchema;
            insurance_donot_report_location: JOI.BooleanSchema;
            payment_address: JOI.AlternativesSchema;
        };
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    createAPracticeRole: {
        headers: {};
        body: {
            name: JOI.StringSchema;
            practice_id: JOI.StringSchema;
            description: JOI.StringSchema;
        };
        params: {};
        query: {};
    };
    findPracticeRole: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    deleteAPracticeRole: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    updateAPracticeRole: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            name: JOI.StringSchema;
            description: JOI.StringSchema;
        };
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    createAReferringProvider: {
        headers: {};
        body: {
            client_id: JOI.StringSchema;
            short_name: JOI.StringSchema;
            first_name: JOI.StringSchema;
            middle_name: JOI.StringSchema;
            last_name: JOI.StringSchema;
            speciality: JOI.StringSchema;
            tax_id: JOI.StringSchema;
            individual_npi: JOI.StringSchema;
            group_npi: JOI.StringSchema;
            taxonomy_code: JOI.StringSchema;
            ssn: JOI.StringSchema;
            clia_number: JOI.StringSchema;
            dea_number: JOI.StringSchema;
            nadean: JOI.StringSchema;
            direct_secure_email: JOI.StringSchema;
            direct_secure_password: JOI.StringSchema;
            qualification: JOI.StringSchema;
            email: JOI.StringSchema;
            cell_number: JOI.StringSchema;
            work_phone: JOI.StringSchema;
            address_line_1: JOI.StringSchema;
            address_line_2: JOI.StringSchema;
            city: JOI.StringSchema;
            state: JOI.StringSchema;
            zip_code: JOI.StringSchema;
            fax: JOI.StringSchema;
            license_number: JOI.StringSchema;
            notes: JOI.StringSchema;
        };
        params: {};
        query: {};
    };
    findAReferringProvider: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    deleteAReferringProvider: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    updateAReferringProvider: {
        headers: {};
        body: {
            client_id: JOI.StringSchema;
            short_name: JOI.StringSchema;
            first_name: JOI.StringSchema;
            middle_name: JOI.StringSchema;
            last_name: JOI.StringSchema;
            speciality: JOI.StringSchema;
            tax_id: JOI.StringSchema;
            individual_npi: JOI.StringSchema;
            group_npi: JOI.StringSchema;
            taxonomy_code: JOI.StringSchema;
            ssn: JOI.StringSchema;
            clia_number: JOI.StringSchema;
            dea_number: JOI.StringSchema;
            nadean: JOI.StringSchema;
            direct_secure_email: JOI.StringSchema;
            direct_secure_password: JOI.StringSchema;
            qualification: JOI.StringSchema;
            email: JOI.StringSchema;
            cell_number: JOI.StringSchema;
            work_phone: JOI.StringSchema;
            address_line_1: JOI.StringSchema;
            address_line_2: JOI.StringSchema;
            city: JOI.StringSchema;
            state: JOI.StringSchema;
            zip_code: JOI.StringSchema;
            fax: JOI.StringSchema;
            license_number: JOI.StringSchema;
            notes: JOI.StringSchema;
        };
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    createAProvider: {
        headers: {};
        body: {
            client_id: JOI.StringSchema;
            short_name: JOI.StringSchema;
            first_name: JOI.StringSchema;
            middle_name: JOI.StringSchema;
            last_name: JOI.StringSchema;
            speciality: JOI.StringSchema;
            tax_id: JOI.StringSchema;
            individual_npi: JOI.StringSchema;
            group_npi: JOI.StringSchema;
            taxonomy_code: JOI.StringSchema;
            ssn: JOI.StringSchema;
            clia_number: JOI.StringSchema;
            dea_number: JOI.StringSchema;
            nadean: JOI.StringSchema;
            direct_secure_email: JOI.StringSchema;
            direct_secure_password: JOI.StringSchema;
            qualification: JOI.StringSchema;
            email: JOI.StringSchema;
            cell_number: JOI.StringSchema;
            work_phone: JOI.StringSchema;
            address_line_1: JOI.StringSchema;
            address_line_2: JOI.StringSchema;
            city: JOI.StringSchema;
            state: JOI.StringSchema;
            zipcode: JOI.StringSchema;
            fax: JOI.StringSchema;
            license_number: JOI.StringSchema;
            notes: JOI.StringSchema;
            active: JOI.BooleanSchema;
            signature: JOI.StringSchema;
            is_pay_to_address: JOI.BooleanSchema;
            payment_address: JOI.AlternativesSchema;
            insurance_billing_options: JOI.ObjectSchema;
        };
        params: {};
        query: {};
    };
    findAProvider: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    deleteAProvider: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    updateAProvider: {
        headers: {};
        body: {
            client_id: JOI.StringSchema;
            short_name: JOI.StringSchema;
            first_name: JOI.StringSchema;
            middle_name: JOI.StringSchema;
            last_name: JOI.StringSchema;
            speciality: JOI.StringSchema;
            tax_id: JOI.StringSchema;
            individual_npi: JOI.StringSchema;
            group_npi: JOI.StringSchema;
            taxonomy_code: JOI.StringSchema;
            ssn: JOI.StringSchema;
            clia_number: JOI.StringSchema;
            dea_number: JOI.StringSchema;
            nadean: JOI.StringSchema;
            direct_secure_email: JOI.StringSchema;
            direct_secure_password: JOI.StringSchema;
            qualification: JOI.StringSchema;
            email: JOI.StringSchema;
            cell_number: JOI.StringSchema;
            work_phone: JOI.StringSchema;
            address_line_1: JOI.StringSchema;
            address_line_2: JOI.StringSchema;
            city: JOI.StringSchema;
            state: JOI.StringSchema;
            zipcode: JOI.StringSchema;
            fax: JOI.StringSchema;
            license_number: JOI.StringSchema;
            notes: JOI.StringSchema;
            active: JOI.BooleanSchema;
            signature: JOI.StringSchema;
            is_pay_to_address: JOI.BooleanSchema;
            payment_address: JOI.AlternativesSchema;
            insurance_billing_options: JOI.ObjectSchema;
        };
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    createAUser: {
        headers: {};
        body: {
            default_provider: JOI.StringSchema;
            email: JOI.StringSchema;
            password: JOI.StringSchema;
            picture_url: JOI.StringSchema;
            last_login: JOI.StringSchema;
            last_login_ip: JOI.StringSchema;
            last_login_location: JOI.StringSchema;
            is_active: JOI.BooleanSchema;
            login_counts: JOI.NumberSchema;
            created_by: JOI.StringSchema;
            first_name: JOI.StringSchema;
            middle_name: JOI.StringSchema;
            last_name: JOI.StringSchema;
            epcs_settings: JOI.BooleanSchema;
            allow_epcs: JOI.BooleanSchema;
            epcs_approver: JOI.BooleanSchema;
            verified: JOI.BooleanSchema;
            roles: JOI.ArraySchema;
        };
        params: {};
        query: {};
    };
    findAUser: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    deleteAUser: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    updateAUser: {
        headers: {};
        body: {
            default_provider: JOI.StringSchema;
            email: JOI.StringSchema;
            password: JOI.StringSchema;
            picture_url: JOI.StringSchema;
            last_login: JOI.StringSchema;
            last_login_ip: JOI.StringSchema;
            last_login_location: JOI.StringSchema;
            is_active: JOI.BooleanSchema;
            login_counts: JOI.NumberSchema;
            created_by: JOI.StringSchema;
            first_name: JOI.StringSchema;
            middle_name: JOI.StringSchema;
            last_name: JOI.StringSchema;
            epcs_settings: JOI.BooleanSchema;
            allow_epcs: JOI.BooleanSchema;
            epcs_approver: JOI.BooleanSchema;
            verified: JOI.BooleanSchema;
            roles: JOI.ArraySchema;
        };
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    createAHCFATemplate: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            name: JOI.StringSchema;
            path: JOI.StringSchema;
        };
        params: {};
        query: {};
    };
    findAHCFATemplate: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    deleteAHCFATemplate: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    updateAHCFATemplate: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            name: JOI.StringSchema;
            path: JOI.StringSchema;
        };
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    createAPlanCategory: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            name: JOI.StringSchema;
            description: JOI.StringSchema;
        };
        params: {};
        query: {};
    };
    findAPlanCategory: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    deleteAPlanCategory: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    updateAPlanCategory: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            name: JOI.StringSchema;
            description: JOI.StringSchema;
        };
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    createAPlanType: {
        headers: {};
        body: {
            name: JOI.StringSchema;
            description: JOI.StringSchema;
        };
        params: {};
        query: {};
    };
    findAPlanType: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    deleteAPlanType: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    updateAPlanType: {
        headers: {};
        body: {
            name: JOI.StringSchema;
            description: JOI.StringSchema;
        };
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    createAPracticePlan: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            name: JOI.StringSchema;
            description: JOI.StringSchema;
            payer_id: JOI.StringSchema;
            plan_category_id: JOI.StringSchema;
            plan_type_id: JOI.StringSchema;
            fax: JOI.StringSchema;
            submission_type: JOI.StringSchema;
            hcfa_template_id: JOI.StringSchema;
            address: JOI.ObjectSchema;
            fees: JOI.ObjectSchema;
        };
        params: {};
        query: {};
    };
    findAPracticePlan: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    deleteAPracticePlan: {
        headers: {};
        body: {};
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    updateAPracticePlan: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            name: JOI.StringSchema;
            description: JOI.StringSchema;
            payer_id: JOI.StringSchema;
            plan_category_id: JOI.StringSchema;
            plan_type_id: JOI.StringSchema;
            fax: JOI.StringSchema;
            submission_type: JOI.StringSchema;
            hcfa_template_id: JOI.StringSchema;
            address: JOI.ObjectSchema;
            fees: JOI.ObjectSchema;
        };
        params: {
            id: JOI.StringSchema;
        };
        query: {};
    };
    createAPracticeICD: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            code: JOI.StringSchema;
            description: JOI.StringSchema;
            valid: JOI.BooleanSchema;
        };
        params: {};
        query: {};
    };
    findAPracticeICD: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    deleteAPracticeICD: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    updateAPracticeICD: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            code: JOI.StringSchema;
            description: JOI.StringSchema;
            valid: JOI.BooleanSchema;
        };
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    createAPracticeModifier: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            code: JOI.StringSchema;
            description: JOI.StringSchema;
        };
        params: {};
        query: {};
    };
    findAPracticeModifier: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    deleteAPracticeModifier: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    updateAPracticeModifier: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            code: JOI.StringSchema;
            description: JOI.StringSchema;
        };
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    createAPracticePlaceOfService: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            code: JOI.StringSchema;
            description: JOI.StringSchema;
        };
        params: {};
        query: {};
    };
    findAPracticePlaceOfService: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    deleteAPracticePlaceOfService: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    updateAPracticePlaceOfService: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            code: JOI.StringSchema;
            description: JOI.StringSchema;
        };
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    createAPracticeTypeOfService: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            code: JOI.StringSchema;
            description: JOI.StringSchema;
        };
        params: {};
        query: {};
    };
    findAPracticeTypeOfService: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    deleteAPracticeTypeOfService: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    updateAPracticeTypeOfService: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            code: JOI.StringSchema;
            description: JOI.StringSchema;
        };
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    createAPracticeProcedureCategory: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            name: JOI.StringSchema;
        };
        params: {};
        query: {};
    };
    findAPracticeProcedureCategory: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    deleteAPracticeProcedureCategory: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    updateAPracticeProcedureCategory: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            name: JOI.StringSchema;
        };
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    createANDCUnitOfMeasurement: {
        headers: {};
        body: {
            name: JOI.StringSchema;
            description: JOI.StringSchema;
        };
        params: {};
        query: {};
    };
    findANDCUnitOfMeasurement: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    deleteANDCUnitOfMeasurement: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    updateANDCUnitOfMeasurement: {
        headers: {};
        body: {
            name: JOI.StringSchema;
            description: JOI.StringSchema;
        };
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    createAPracticeCPT: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            cpt_code: JOI.StringSchema;
            description: JOI.StringSchema;
            service_description: JOI.StringSchema;
            fess: JOI.NumberSchema;
            medicare_fees: JOI.NumberSchema;
            place_of_service: JOI.NumberSchema;
            type_of_service: JOI.NumberSchema;
            procedure_category: JOI.NumberSchema;
            ndc_unit_of_measurements: JOI.NumberSchema;
            ndc_number: JOI.StringSchema;
            ndc_description: JOI.StringSchema;
            ndc_units: JOI.StringSchema;
            actively_used: JOI.BooleanSchema;
            valid: JOI.BooleanSchema;
            discontinued: JOI.BooleanSchema;
            clia: JOI.BooleanSchema;
            patient_responsibility: JOI.BooleanSchema;
            donot_print: JOI.BooleanSchema;
            revenue_code: JOI.StringSchema;
        };
        params: {};
        query: {};
    };
    findAPracticeCPT: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    deleteAPracticeCPT: {
        headers: {};
        body: {};
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
    updateAPracticeCPT: {
        headers: {};
        body: {
            practice_id: JOI.StringSchema;
            cpt_code: JOI.StringSchema;
            description: JOI.StringSchema;
            service_description: JOI.StringSchema;
            fess: JOI.NumberSchema;
            medicare_fees: JOI.NumberSchema;
            place_of_service: JOI.NumberSchema;
            type_of_service: JOI.NumberSchema;
            procedure_category: JOI.NumberSchema;
            ndc_number: JOI.StringSchema;
            ndc_description: JOI.StringSchema;
            ndc_units: JOI.StringSchema;
            ndc_unit_of_measurements: JOI.NumberSchema;
            actively_used: JOI.BooleanSchema;
            valid: JOI.BooleanSchema;
            discontinued: JOI.BooleanSchema;
            clia: JOI.BooleanSchema;
            patient_responsibility: JOI.BooleanSchema;
            donot_print: JOI.BooleanSchema;
            revenue_code: JOI.StringSchema;
        };
        params: {
            id: JOI.NumberSchema;
        };
        query: {};
    };
};
export { validationSchema };
