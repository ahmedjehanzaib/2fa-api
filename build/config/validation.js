"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = void 0;
var JOI = require("joi");
var validationSchema = {
    createAClient: {
        headers: {},
        body: {
            name: JOI.string().trim().required(),
            organization_name: JOI.string().trim().required(),
            tax_id: JOI.string().trim().required(),
            address_line_1: JOI.string().trim().optional().allow('', null),
            address_line_2: JOI.string().trim().optional().allow('', null),
            city: JOI.string().trim().optional().allow('', null),
            state: JOI.string().trim().optional().allow('', null),
            zipcode: JOI.string().trim().optional().allow('', null),
            phone_number: JOI.string().trim().optional().allow('', null),
            email: JOI.string().email().optional().allow('', null),
            contact_person: JOI.string().trim().optional().allow('', null),
            fax: JOI.string().trim().optional().allow('', null)
        },
        params: {},
        query: {}
    },
    findAClient: {
        headers: {},
        body: {},
        params: {
            id: JOI.string().guid().required()
        },
        query: {}
    },
    deleteAClient: {
        headers: {},
        body: {},
        params: {
            id: JOI.string().guid().required()
        },
        query: {}
    },
    updateAClient: {
        headers: {},
        body: {
            name: JOI.string().trim(),
            organization_name: JOI.string().trim(),
            tax_id: JOI.string().trim(),
            address_line_1: JOI.string().trim().optional().allow('', null),
            address_line_2: JOI.string().trim().optional().allow('', null),
            city: JOI.string().trim().optional().allow('', null),
            state: JOI.string().trim().optional().allow('', null),
            zipcode: JOI.string().trim().optional().allow('', null),
            phone_number: JOI.string().trim().optional().allow('', null),
            email: JOI.string().email().optional().allow('', null),
            contact_person: JOI.string().trim().optional().allow('', null),
            fax: JOI.string().trim().optional().allow('', null)
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {}
    },
    createAPractice: {
        headers: {},
        body: {
            name: JOI.string().trim().required(),
            client_id: JOI.string().trim().required(),
            special_security_number: JOI.number().required(),
            client_type: JOI.string().trim().optional().allow('', null),
            first_name: JOI.string().trim().required(),
            last_name: JOI.string().trim().required(),
            pay_to_address_same_as_address: JOI.string().trim().optional().allow('', null),
            statement_address_same_as_address: JOI.string().trim().optional().allow('', null),
            direct_secure_email: JOI.string().email().optional().allow('', null),
            direct_secure_password: JOI.string().trim().optional().allow('', null),
            speciality: JOI.string().trim().required(),
        },
        params: {},
        query: {}
    },
    findPractice: {
        headers: {},
        body: {},
        params: {
            id: JOI.string().guid().required()
        },
        query: {}
    },
    deleteAPractice: {
        headers: {},
        body: {},
        params: {
            id: JOI.string().guid().required()
        },
        query: {}
    },
    updateAPractice: {
        headers: {},
        body: {
            name: JOI.string().trim().required(),
            client_id: JOI.string().trim().required(),
            special_security_number: JOI.number().required(),
            client_type: JOI.string().trim().optional().allow('', null),
            first_name: JOI.string().trim().required(),
            last_name: JOI.string().trim().required(),
            pay_to_address_same_as_address: JOI.string().trim().optional().allow('', null),
            statement_address_same_as_address: JOI.string().trim().optional().allow('', null),
            direct_secure_email: JOI.string().email().optional().allow('', null),
            direct_secure_password: JOI.string().trim().optional().allow('', null),
            speciality: JOI.string().trim().required(),
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {}
    },
    createAPracticeLocation: {
        headers: {},
        body: {
            name: JOI.string().trim().required(),
            practice_id: JOI.string().trim().required(),
            zip_code: JOI.number().optional(),
            city: JOI.string().trim().required(),
            state: JOI.string().trim().required(),
            address_line_1: JOI.string().trim().optional().allow('', null),
            address_line_2: JOI.string().trim().optional().allow('', null),
            phone_number: JOI.string().trim().allow('', null),
            fax: JOI.string().trim().allow('', null),
            website: JOI.string().trim().allow('', null),
            cell_number: JOI.string().trim().required(),
            by_default: JOI.string().trim().required(),
            description: JOI.string().trim().allow('', null),
            email: JOI.string().email().optional().allow('', null),
            taxonomy_code: JOI.string().trim().allow('', null),
            national_provider_identity: JOI.string().trim().allow('', null),
            tax_id: JOI.string().trim().allow('', null),
            clia_number: JOI.string().trim().allow('', null),
            pos: JOI.string().trim().allow('', null),
            insurance_bill_under_location: JOI.boolean().optional(),
            insurance_bill_pay_to_address: JOI.boolean().optional(),
            insurance_donot_report_location: JOI.boolean().optional(),
        },
        params: {},
        query: {}
    },
    findPracticeLocation: {
        headers: {},
        body: {},
        params: {
            id: JOI.string().guid().required()
        },
        query: {}
    },
    deleteAPracticeLocation: {
        headers: {},
        body: {},
        params: {
            id: JOI.string().guid().required()
        },
        query: {}
    },
    updateAPracticeLocation: {
        headers: {},
        body: {
            name: JOI.string().trim().required(),
            practice_id: JOI.string().trim().required(),
            zip_code: JOI.number().optional(),
            city: JOI.string().trim().required(),
            state: JOI.string().trim().required(),
            address_line_1: JOI.string().trim().optional().allow('', null),
            address_line_2: JOI.string().trim().optional().allow('', null),
            phone_number: JOI.string().trim().allow('', null),
            fax: JOI.string().trim().allow('', null),
            website: JOI.string().trim().allow('', null),
            cell_number: JOI.string().trim().required(),
            by_default: JOI.string().trim().required(),
            description: JOI.string().trim().allow('', null),
            email: JOI.string().email().optional().allow('', null),
            taxonomy_code: JOI.string().trim().allow('', null),
            national_provider_identity: JOI.string().trim().allow('', null),
            tax_id: JOI.string().trim().allow('', null),
            clia_number: JOI.string().trim().allow('', null),
            pos: JOI.string().trim().allow('', null),
            insurance_bill_under_location: JOI.boolean().optional(),
            insurance_bill_pay_to_address: JOI.boolean().optional(),
            insurance_donot_report_location: JOI.boolean().optional(),
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {}
    },
};
exports.validationSchema = validationSchema;
