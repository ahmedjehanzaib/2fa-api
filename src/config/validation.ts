import * as JOI from 'joi';

const validationSchema = {

    // POST /api/v1/clients/
    createAClient: {
        headers: {
        },
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
        params: {
        },
        query: {
        }
    },

    // GET /api/v1/clients/:id
    findAClient: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    // DELETE /api/v1/clients/:id
    deleteAClient: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    // PUT /api/v1/clients/:id
    updateAClient: {
        headers: {
        },
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
        query: {
        }
    },

    createAPractice: {
        headers: {
        },
        body: {
            name: JOI.string().trim().required(),
            client_id: JOI.string().trim().required(),
            special_security_number: JOI.string().trim().required(),
            client_type: JOI.string().trim().optional().allow('', null),
            first_name: JOI.string().trim().optional().allow('', null),
            last_name: JOI.string().trim().optional().allow('', null),
            statement_address_same_as_address: JOI.boolean().optional(),
            direct_secure_email: JOI.string().email().optional().allow('', null),
            direct_secure_password: JOI.string().trim().optional().allow('', null),
            speciality: JOI.string().trim().optional().allow('', null),
            location: JOI.object().keys({
                name: JOI.string().trim().required(),
                zip_code: JOI.number().optional(),
                city: JOI.string().trim().optional().allow('', null),
                state: JOI.string().trim().optional().allow('', null),
                address_line_1: JOI.string().trim().optional().allow('', null),
                address_line_2: JOI.string().trim().optional().allow('', null),
                phone_number: JOI.string().trim().allow('', null),
                by_default: JOI.boolean().optional(),
                fax: JOI.string().trim().allow('', null),
                website: JOI.string().trim().allow('', null),
                cell_number: JOI.string().trim().allow('', null),
                description: JOI.string().trim().allow('', null),
                email: JOI.string().email().optional().allow('', null),
                taxonomy_code: JOI.string().trim().allow('', null),
                national_provider_identity: JOI.string().trim().allow('', null),
                tax_id: JOI.string().trim().allow('', null),
                clia_number: JOI.string().trim().allow('', null),
                pos: JOI.string().trim().allow('', null),
                pay_to_address_same_as_address: JOI.boolean().optional(),
                insurance_bill_under_location: JOI.boolean().optional(),
                insurance_bill_pay_to_address: JOI.boolean().optional(),
                insurance_donot_report_location: JOI.boolean().optional(),
                payment_address: JOI.when('pay_to_address_same_as_address', {
                    is: JOI.equal(false),
                    then: JOI.object().keys({
                        address_line_1: JOI.string().trim().optional().allow('', null),
                        address_line_2: JOI.string().trim().optional().allow('', null),
                        city: JOI.string().trim().optional().allow('', null),
                        state: JOI.string().trim().optional().allow('', null),
                        zipcode: JOI.string().trim().optional().allow('', null)
                    })
                }),
            }),
            statement_address: JOI.when('statement_address_same_as_address', {
                is: JOI.equal(false),
                then: JOI.object().keys({
                    address_line_1: JOI.string().trim().optional().allow('', null),
                    address_line_2: JOI.string().trim().optional().allow('', null),
                    city: JOI.string().trim().optional().allow('', null),
                    state: JOI.string().trim().optional().allow('', null),
                    zipcode: JOI.string().trim().optional().allow('', null)
                })
            }),
            statement_options: JOI.object().keys({
                vendor: JOI.string().trim().optional().allow('', null),
                aging_days: JOI.string().trim().optional().allow('', null),
                maximum_statements: JOI.string().trim().optional().allow('', null),
                phone_number: JOI.string().trim().optional().allow('', null),
                fax: JOI.string().trim().optional().allow('', null)
            }),
            statement_messages: JOI.object().keys({
                above_30_days: JOI.string().trim().optional().allow('', null),
                above_60_days: JOI.string().trim().optional().allow('', null),
                above_90_days: JOI.string().trim().optional().allow('', null),
                above_120_days: JOI.string().trim().optional().allow('', null),
                outstanding_days: JOI.string().trim().optional().allow('', null)
            })

        },
        params: {
        },
        query: {
        }
    },

    // GET /api/v1/practices/:id
    findPractice: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    // DELETE /api/v1/practices/:id
    deleteAPractice: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    // PUT /api/v1/practices/:id
    updateAPractice: {
        headers: {
        },
        body: {
            name: JOI.string().trim().required(),
            client_id: JOI.string().trim().required(),
            special_security_number: JOI.string().trim().required(),
            client_type: JOI.string().trim().optional().allow('', null),
            first_name: JOI.string().trim().optional().allow('', null),
            last_name: JOI.string().trim().optional().allow('', null),
            statement_address_same_as_address: JOI.boolean().optional(),
            direct_secure_email: JOI.string().email().optional().allow('', null),
            direct_secure_password: JOI.string().trim().optional().allow('', null),
            speciality: JOI.string().trim().optional().allow('', null),
            location: JOI.object().keys({
                id: JOI.string().required(),
                name: JOI.string().trim().required(),
                zip_code: JOI.number().optional(),
                city: JOI.string().trim().optional().allow('', null),
                state: JOI.string().trim().optional().allow('', null),
                address_line_1: JOI.string().trim().optional().allow('', null),
                address_line_2: JOI.string().trim().optional().allow('', null),
                phone_number: JOI.string().trim().allow('', null),
                fax: JOI.string().trim().allow('', null),
                website: JOI.string().trim().allow('', null),
                cell_number: JOI.string().trim().optional().allow('', null),
                by_default: JOI.boolean().optional(),
                description: JOI.string().trim().allow('', null),
                email: JOI.string().email().optional().allow('', null),
                taxonomy_code: JOI.string().trim().allow('', null),
                national_provider_identity: JOI.string().trim().allow('', null),
                tax_id: JOI.string().trim().allow('', null),
                clia_number: JOI.string().trim().allow('', null),
                pos: JOI.string().trim().allow('', null),
                pay_to_address_same_as_address: JOI.boolean().optional(),
                insurance_bill_under_location: JOI.boolean().optional(),
                insurance_bill_pay_to_address: JOI.boolean().optional(),
                insurance_donot_report_location: JOI.boolean().optional(),
                payment_address: JOI.when('pay_to_address_same_as_address', {
                    is: JOI.equal(false),
                    then: JOI.object().keys({
                        address_line_1: JOI.string().trim().optional().allow('', null),
                        address_line_2: JOI.string().trim().optional().allow('', null),
                        city: JOI.string().trim().optional().allow('', null),
                        state: JOI.string().trim().optional().allow('', null),
                        zipcode: JOI.string().trim().optional().allow('', null)
                    })
                }),
            }),
            statement_address: JOI.when('statement_address_same_as_address', {
                is: JOI.equal(false),
                then: JOI.object().keys({
                    address_line_1: JOI.string().trim().optional().allow('', null),
                    address_line_2: JOI.string().trim().optional().allow('', null),
                    city: JOI.string().trim().optional().allow('', null),
                    state: JOI.string().trim().optional().allow('', null),
                    zipcode: JOI.string().trim().optional().allow('', null)
                })
            }),
            statement_options: JOI.object().keys({
                vendor: JOI.string().trim().optional().allow('', null),
                aging_days: JOI.string().trim().optional().allow('', null),
                maximum_statements: JOI.string().trim().optional().allow('', null),
                phone_number: JOI.string().trim().optional().allow('', null),
                fax: JOI.string().trim().optional().allow('', null)
            }),
            statement_messages: JOI.object().keys({
                above_30_days: JOI.string().trim().optional().allow('', null),
                above_60_days: JOI.string().trim().optional().allow('', null),
                above_90_days: JOI.string().trim().optional().allow('', null),
                above_120_days: JOI.string().trim().optional().allow('', null),
                outstanding_days: JOI.string().trim().optional().allow('', null)
            })
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },
    createAPracticeLocation: {
        headers: {
        },
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
            by_default: JOI.boolean().optional(),
            description: JOI.string().trim().allow('', null),
            email: JOI.string().email().optional().allow('', null),
            taxonomy_code: JOI.string().trim().allow('', null),
            national_provider_identity: JOI.string().trim().allow('', null),
            tax_id: JOI.string().trim().allow('', null),
            clia_number: JOI.string().trim().allow('', null),
            pos: JOI.string().trim().allow('', null),
            pay_to_address_same_as_address: JOI.boolean().optional(),
            insurance_bill_under_location: JOI.boolean().optional(),
            insurance_bill_pay_to_address: JOI.boolean().optional(),
            insurance_donot_report_location: JOI.boolean().optional(),
            payment_address: JOI.when('pay_to_address_same_as_address', {
                is: JOI.equal(false),
                then: JOI.object().keys({
                    address_line_1: JOI.string().trim().optional().allow('', null),
                    address_line_2: JOI.string().trim().optional().allow('', null),
                    city: JOI.string().trim().optional().allow('', null),
                    state: JOI.string().trim().optional().allow('', null),
                    zipcode: JOI.string().trim().optional().allow('', null)
                })
            }),
        },
        params: {
        },
        query: {
        }
    },

    // GET /api/v1/practices/:id
    findPracticeLocation: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    // DELETE /api/v1/practices/:id
    deleteAPracticeLocation: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    // PUT /api/v1/practices/:id
    updateAPracticeLocation: {
        headers: {
        },
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
            by_default: JOI.boolean().optional(),
            description: JOI.string().trim().allow('', null),
            email: JOI.string().email().optional().allow('', null),
            taxonomy_code: JOI.string().trim().allow('', null),
            national_provider_identity: JOI.string().trim().allow('', null),
            tax_id: JOI.string().trim().allow('', null),
            clia_number: JOI.string().trim().allow('', null),
            pos: JOI.string().trim().allow('', null),
            pay_to_address_same_as_address: JOI.boolean().optional(),
            insurance_bill_under_location: JOI.boolean().optional(),
            insurance_bill_pay_to_address: JOI.boolean().optional(),
            insurance_donot_report_location: JOI.boolean().optional(),
            payment_address: JOI.when('pay_to_address_same_as_address', {
                is: JOI.equal(false),
                then: JOI.object().keys({
                    address_line_1: JOI.string().trim().optional().allow('', null),
                    address_line_2: JOI.string().trim().optional().allow('', null),
                    city: JOI.string().trim().optional().allow('', null),
                    state: JOI.string().trim().optional().allow('', null),
                    zipcode: JOI.string().trim().optional().allow('', null)
                })
            }),
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },
    createAPracticeRole: {
        headers: {
        },
        body: {
            name: JOI.string().trim().allow('', null),
            practice_id: JOI.string().trim().required(),
            description: JOI.string().trim().allow('', null)
        },
        params: {
        },
        query: {
        }
    },

    // GET /api/v1/practices/:id
    findPracticeRole: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    // DELETE /api/v1/practices/:id
    deleteAPracticeRole: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    // PUT /api/v1/practices/:id
    updateAPracticeRole: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            name: JOI.string().trim().allow('', null),
            description: JOI.string().trim().allow('', null)
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },
    createAReferringProvider: {
        headers: {
        },
        body: {
            client_id: JOI.string().trim().required(),
            short_name: JOI.string().trim().required(),
            first_name: JOI.string().trim().required(),
            middle_name: JOI.string().trim().optional().allow('', null),
            last_name: JOI.string().trim().required(),
            speciality: JOI.string().trim().required(),
            tax_id: JOI.string().trim().optional().allow('', null),
            individual_npi: JOI.string().trim().optional().allow('', null),
            group_npi: JOI.string().trim().optional().allow('', null),
            taxonomy_code: JOI.string().trim().optional().allow('', null),
            ssn: JOI.string().trim().optional().allow('', null),
            clia_number: JOI.string().trim().optional().allow('', null),
            dea_number: JOI.string().trim().optional().allow('', null),
            nadean: JOI.string().trim().optional().allow('', null),
            direct_secure_email: JOI.string().trim().optional().allow('', null),
            direct_secure_password: JOI.string().trim().optional().allow('', null),
            qualification: JOI.string().trim().optional().allow('', null),
            email: JOI.string().trim().optional().allow('', null),
            cell_number: JOI.string().trim().optional().allow('', null),
            work_phone: JOI.string().trim().optional().allow('', null),
            address_line_1: JOI.string().trim().optional().allow('', null),
            address_line_2: JOI.string().trim().optional().allow('', null),
            city: JOI.string().trim().optional().allow('', null),
            state: JOI.string().trim().optional().allow('', null),
            zip_code: JOI.string().trim().optional().allow('', null),
            fax: JOI.string().trim().optional().allow('', null),
            license_number: JOI.string().trim().optional().allow('', null),
            notes: JOI.string().trim().optional().allow('', null),
        },
        params: {
        },
        query: {
        }
    },

    // GET /api/v1/practices/:id
    findAReferringProvider: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    // DELETE /api/v1/practices/:id
    deleteAReferringProvider: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    // PUT /api/v1/practices/:id
    updateAReferringProvider: {
        headers: {
        },
        body: {
            client_id: JOI.string().trim().required(),
            short_name: JOI.string().trim().required(),
            first_name: JOI.string().trim().required(),
            middle_name: JOI.string().trim().optional().allow('', null),
            last_name: JOI.string().trim().required(),
            speciality: JOI.string().trim().required(),
            tax_id: JOI.string().trim().optional().allow('', null),
            individual_npi: JOI.string().trim().optional().allow('', null),
            group_npi: JOI.string().trim().optional().allow('', null),
            taxonomy_code: JOI.string().trim().optional().allow('', null),
            ssn: JOI.string().trim().optional().allow('', null),
            clia_number: JOI.string().trim().optional().allow('', null),
            dea_number: JOI.string().trim().optional().allow('', null),
            nadean: JOI.string().trim().optional().allow('', null),
            direct_secure_email: JOI.string().trim().optional().allow('', null),
            direct_secure_password: JOI.string().trim().optional().allow('', null),
            qualification: JOI.string().trim().optional().allow('', null),
            email: JOI.string().trim().optional().allow('', null),
            cell_number: JOI.string().trim().optional().allow('', null),
            work_phone: JOI.string().trim().optional().allow('', null),
            address_line_1: JOI.string().trim().optional().allow('', null),
            address_line_2: JOI.string().trim().optional().allow('', null),
            city: JOI.string().trim().optional().allow('', null),
            state: JOI.string().trim().optional().allow('', null),
            zip_code: JOI.string().trim().optional().allow('', null),
            fax: JOI.string().trim().optional().allow('', null),
            license_number: JOI.string().trim().optional().allow('', null),
            notes: JOI.string().trim().optional().allow('', null)
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    createAProvider: {
        headers: {
        },
        body: {
            client_id: JOI.string().trim().required(),
            short_name: JOI.string().trim().required(),
            first_name: JOI.string().trim().required(),
            middle_name: JOI.string().trim().optional().allow('', null),
            last_name: JOI.string().trim().required(),
            speciality: JOI.string().trim().required(),
            tax_id: JOI.string().trim().optional().allow('', null),
            individual_npi: JOI.string().trim().optional().allow('', null),
            group_npi: JOI.string().trim().optional().allow('', null),
            taxonomy_code: JOI.string().trim().optional().allow('', null),
            ssn: JOI.string().trim().optional().allow('', null),
            clia_number: JOI.string().trim().optional().allow('', null),
            dea_number: JOI.string().trim().optional().allow('', null),
            nadean: JOI.string().trim().optional().allow('', null),
            direct_secure_email: JOI.string().trim().optional().allow('', null),
            direct_secure_password: JOI.string().trim().optional().allow('', null),
            qualification: JOI.string().trim().optional().allow('', null),
            email: JOI.string().trim().optional().allow('', null),
            cell_number: JOI.string().trim().optional().allow('', null),
            work_phone: JOI.string().trim().optional().allow('', null),
            address_line_1: JOI.string().trim().optional().allow('', null),
            address_line_2: JOI.string().trim().optional().allow('', null),
            city: JOI.string().trim().optional().allow('', null),
            state: JOI.string().trim().optional().allow('', null),
            zipcode: JOI.string().trim().optional().allow('', null),
            fax: JOI.string().trim().optional().allow('', null),
            license_number: JOI.string().trim().optional().allow('', null),
            notes: JOI.string().trim().optional().allow('', null),
            active: JOI.boolean().optional(),
            signature: JOI.string().trim().optional().allow('', null),
            is_pay_to_address: JOI.boolean().optional(),
            payment_address: JOI.when('is_pay_to_address', {
                is: JOI.equal(false),
                then: JOI.object().keys({
                    address_line_1: JOI.string().trim().optional().allow('', null),
                    address_line_2: JOI.string().trim().optional().allow('', null),
                    city: JOI.string().trim().optional().allow('', null),
                    state: JOI.string().trim().optional().allow('', null),
                    zipcode: JOI.string().trim().optional().allow('', null)
                })
            }),
            insurance_billing_options: JOI.object().keys({
                insurance_id: JOI.string().trim().optional().allow('', null),
                practice_location_id: JOI.string().trim().optional().allow('', null),
                tax_id_type: JOI.string().trim().optional().allow('', null),
                pay_to_address: JOI.string().trim().optional().allow('', null),
                report_tax_id: JOI.boolean().optional()

            })
        },
        params: {
        },
        query: {
        }
    },

    // GET /api/v1/practices/:id
    findAProvider: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    // DELETE /api/v1/practices/:id
    deleteAProvider: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    // PUT /api/v1/practices/:id
    updateAProvider: {
        headers: {
        },
        body: {
            client_id: JOI.string().trim().required(),
            short_name: JOI.string().trim().required(),
            first_name: JOI.string().trim().required(),
            middle_name: JOI.string().trim().optional().allow('', null),
            last_name: JOI.string().trim().required(),
            speciality: JOI.string().trim().required(),
            tax_id: JOI.string().trim().optional().allow('', null),
            individual_npi: JOI.string().trim().optional().allow('', null),
            group_npi: JOI.string().trim().optional().allow('', null),
            taxonomy_code: JOI.string().trim().optional().allow('', null),
            ssn: JOI.string().trim().optional().allow('', null),
            clia_number: JOI.string().trim().optional().allow('', null),
            dea_number: JOI.string().trim().optional().allow('', null),
            nadean: JOI.string().trim().optional().allow('', null),
            direct_secure_email: JOI.string().trim().optional().allow('', null),
            direct_secure_password: JOI.string().trim().optional().allow('', null),
            qualification: JOI.string().trim().optional().allow('', null),
            email: JOI.string().trim().optional().allow('', null),
            cell_number: JOI.string().trim().optional().allow('', null),
            work_phone: JOI.string().trim().optional().allow('', null),
            address_line_1: JOI.string().trim().optional().allow('', null),
            address_line_2: JOI.string().trim().optional().allow('', null),
            city: JOI.string().trim().optional().allow('', null),
            state: JOI.string().trim().optional().allow('', null),
            zipcode: JOI.string().trim().optional().allow('', null),
            fax: JOI.string().trim().optional().allow('', null),
            license_number: JOI.string().trim().optional().allow('', null),
            notes: JOI.string().trim().optional().allow('', null),
            active: JOI.boolean().optional(),
            signature: JOI.string().trim().optional().allow('', null),
            is_pay_to_address: JOI.boolean().optional(),
            payment_address: JOI.when('is_pay_to_address', {
                is: JOI.equal(false),
                then: JOI.object().keys({
                    address_line_1: JOI.string().trim().optional().allow('', null),
                    address_line_2: JOI.string().trim().optional().allow('', null),
                    city: JOI.string().trim().optional().allow('', null),
                    state: JOI.string().trim().optional().allow('', null),
                    zipcode: JOI.string().trim().optional().allow('', null)
                })
            }),
            insurance_billing_options: JOI.object().keys({
                insurance_id: JOI.string().trim().optional().allow('', null),
                practice_location_id: JOI.string().trim().optional().allow('', null),
                tax_id_type: JOI.string().trim().optional().allow('', null),
                pay_to_address: JOI.string().trim().optional().allow('', null),
                report_tax_id: JOI.boolean().optional()

            })
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

}

export { validationSchema };