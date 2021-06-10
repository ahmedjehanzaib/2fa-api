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
                zipcode: JOI.string().trim().optional().allow('', null),
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
                zipcode: JOI.string().trim().optional().allow('', null),
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
            zipcode: JOI.string().trim().optional().allow('', null),
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
            zipcode: JOI.string().trim().optional().allow('', null),
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


    findPracticeRole: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
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
            id: JOI.number().required()
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
            id: JOI.number().required()
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
            zipcode: JOI.string().trim().optional().allow('', null),
            fax: JOI.string().trim().optional().allow('', null),
            license_number: JOI.string().trim().optional().allow('', null),
            notes: JOI.string().trim().optional().allow('', null),
        },
        params: {
        },
        query: {
        }
    },


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
            zipcode: JOI.string().trim().optional().allow('', null),
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
                plan_id: JOI.string().uuid().optional().allow(null),
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
                plan_id: JOI.string().uuid().optional().allow(null),
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
    createAUser: {
        headers: {
        },
        body: {
            default_provider: JOI.string().trim().required(),
            email: JOI.string().trim().required(),
            password: JOI.string().trim().optional().allow('', null),
            picture_url: JOI.string().trim().optional().allow('', null),
            last_login: JOI.string().trim().optional().allow('', null),
            last_login_ip: JOI.string().trim().optional().allow('', null),
            last_login_location: JOI.string().trim().optional().allow('', null),
            is_active: JOI.boolean().optional(),
            login_counts: JOI.number().optional(),
            created_by: JOI.string().trim().optional().allow('', null),
            first_name: JOI.string().trim().optional().allow('', null),
            middle_name: JOI.string().trim().optional().allow('', null),
            last_name: JOI.string().trim().optional().allow('', null),
            epcs_settings: JOI.boolean().optional(),
            allow_epcs: JOI.boolean().optional(),
            epcs_approver: JOI.boolean().optional(),
            verified: JOI.boolean().optional(),
            roles: JOI.array().required()
        },
        params: {
        },
        query: {
        }
    },


    findAUser: {
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


    deleteAUser: {
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

    updateAUser: {
        headers: {
        },
        body: {
            default_provider: JOI.string().trim().required(),
            email: JOI.string().trim().required(),
            password: JOI.string().trim().optional().allow('', null),
            picture_url: JOI.string().trim().optional().allow('', null),
            last_login: JOI.string().trim().optional().allow('', null),
            last_login_ip: JOI.string().trim().optional().allow('', null),
            last_login_location: JOI.string().trim().optional().allow('', null),
            is_active: JOI.boolean().optional(),
            login_counts: JOI.number().optional(),
            created_by: JOI.string().trim().optional().allow('', null),
            first_name: JOI.string().trim().optional().allow('', null),
            middle_name: JOI.string().trim().optional().allow('', null),
            last_name: JOI.string().trim().optional().allow('', null),
            epcs_settings: JOI.boolean().optional(),
            allow_epcs: JOI.boolean().optional(),
            epcs_approver: JOI.boolean().optional(),
            verified: JOI.boolean().optional(),
            roles: JOI.array().required()
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },
    createAHCFATemplate: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            name: JOI.string().trim().required(),
            path: JOI.string().trim().required()
        },
        params: {
        },
        query: {
        }
    },


    findAHCFATemplate: {
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


    deleteAHCFATemplate: {
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

    updateAHCFATemplate: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            name: JOI.string().trim().required(),
            path: JOI.string().trim().required()
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },
    createAPlanCategory: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            name: JOI.string().trim().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
        },
        query: {
        }
    },


    findAPlanCategory: {
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


    deleteAPlanCategory: {
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

    updateAPlanCategory: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            name: JOI.string().trim().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },
    createAPlanType: {
        headers: {
        },
        body: {
            name: JOI.string().trim().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
        },
        query: {
        }
    },


    findAPlanType: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },


    deleteAPlanType: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    updateAPlanType: {
        headers: {
        },
        body: {
            name: JOI.string().trim().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },
    createAPracticePlan: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            name: JOI.string().trim().optional().allow('', null),
            description: JOI.string().trim().optional().allow('', null),
            payer_id: JOI.string().trim().optional().allow('', null),
            plan_category_id: JOI.string().trim().optional().allow('', null),
            plan_type_id: JOI.number().optional(),
            fax: JOI.string().trim().optional().allow('', null),
            submission_type: JOI.string().trim().optional().allow('', null),
            hcfa_template_id: JOI.string().trim().optional().allow('', null),
            address: JOI.object().keys({
                address_line_1: JOI.string().trim().optional().allow('', null),
                address_line_2: JOI.string().trim().optional().allow('', null),
                city: JOI.string().trim().optional().allow('', null),
                state: JOI.string().trim().optional().allow('', null),
                zipcode: JOI.string().trim().optional().allow('', null),
                work_phone: JOI.string().trim().optional().allow('', null),
                fax: JOI.string().trim().optional().allow('', null),
            }).optional(),
            fees: JOI.object().keys({
                cpt_id: JOI.string().trim().optional().allow('', null),
                fee: JOI.number().optional(),
                allowed: JOI.number().optional(),
            }).optional(),
            insurance_billing_options: JOI.object().keys({
                provider_id: JOI.string().uuid().required(),
                practice_location_id: JOI.string().uuid().optional(),
                tax_id_type: JOI.string().trim().optional().allow('', null),
                pay_to_address: JOI.string().trim().optional().allow('', null),
                report_tax_id: JOI.number().optional()

            })

        },
        params: {
        },
        query: {
        }
    },


    findAPracticePlan: {
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


    deleteAPracticePlan: {
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

    updateAPracticePlan: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            name: JOI.string().trim().optional().allow('', null),
            description: JOI.string().trim().optional().allow('', null),
            payer_id: JOI.string().trim().optional().allow('', null),
            plan_category_id: JOI.string().trim().optional().allow('', null),
            plan_type_id: JOI.number().optional(),
            fax: JOI.string().trim().optional().allow('', null),
            submission_type: JOI.string().trim().optional().allow('', null),
            hcfa_template_id: JOI.string().trim().optional().allow('', null),
            address: JOI.object().keys({
                address_line_1: JOI.string().trim().optional().allow('', null),
                address_line_2: JOI.string().trim().optional().allow('', null),
                city: JOI.string().trim().optional().allow('', null),
                state: JOI.string().trim().optional().allow('', null),
                zipcode: JOI.string().trim().optional().allow('', null),
                work_phone: JOI.string().trim().optional().allow('', null),
                fax: JOI.string().trim().optional().allow('', null),
            }).optional(),
            fees: JOI.object().keys({
                cpt_id: JOI.string().trim().optional().allow('', null),
                fee: JOI.number().optional(),
                allowed: JOI.boolean().optional(),
            }).optional(),
            insurance_billing_options: JOI.object().keys({
                id: JOI.number().optional(),
                provider_id: JOI.string().uuid().required(),
                practice_location_id: JOI.string().uuid().optional(),
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
    createAPracticeICD: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            code: JOI.string().trim().required(),
            description: JOI.string().trim().required(),
            valid: JOI.boolean().optional()
        },
        params: {
        },
        query: {
        }
    },


    findAPracticeICD: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },


    deleteAPracticeICD: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    updateAPracticeICD: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            code: JOI.string().trim().required(),
            description: JOI.string().trim().required(),
            valid: JOI.boolean().optional()
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    createAPracticeModifier: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            code: JOI.string().trim().required(),
            description: JOI.string().trim().required()
        },
        params: {
        },
        query: {
        }
    },

    findAPracticeModifier: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },


    deleteAPracticeModifier: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    updateAPracticeModifier: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            code: JOI.string().trim().required(),
            description: JOI.string().trim().required()
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },


    createAPracticePlaceOfService: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            code: JOI.string().trim().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
        },
        query: {
        }
    },

    findAPracticePlaceOfService: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },


    deleteAPracticePlaceOfService: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    updateAPracticePlaceOfService: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            code: JOI.string().trim().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    createAPracticeTypeOfService: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            code: JOI.string().trim().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
        },
        query: {
        }
    },

    findAPracticeTypeOfService: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },


    deleteAPracticeTypeOfService: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    updateAPracticeTypeOfService: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            code: JOI.string().trim().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },


    createAPracticeProcedureCategory: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            name: JOI.string().trim().required()
        },
        params: {
        },
        query: {
        }
    },

    findAPracticeProcedureCategory: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    deleteAPracticeProcedureCategory: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    updateAPracticeProcedureCategory: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            name: JOI.string().trim().required()
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },


    createANDCUnitOfMeasurement: {
        headers: {
        },
        body: {
            name: JOI.string().trim().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
        },
        query: {
        }
    },

    findANDCUnitOfMeasurement: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    deleteANDCUnitOfMeasurement: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    updateANDCUnitOfMeasurement: {
        headers: {
        },
        body: {
            name: JOI.string().trim().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },



    createAPracticeCPT: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            cpt_code: JOI.string().trim().optional().allow('', null),
            description: JOI.string().trim().optional().allow('', null),
            service_description: JOI.string().trim().optional().allow('', null),
            fess: JOI.number().optional(),
            medicare_fees: JOI.number().optional(),
            place_of_service: JOI.number().optional(),
            type_of_service: JOI.number().optional(),
            procedure_category: JOI.number().optional(),
            ndc_unit_of_measurements: JOI.number().optional(),
            ndc_number: JOI.string().trim().optional().allow('', null),
            ndc_description: JOI.string().trim().optional().allow('', null),
            ndc_units: JOI.string().trim().optional().allow('', null),
            actively_used: JOI.boolean().optional(),
            valid: JOI.boolean().optional(),
            discontinued: JOI.boolean().optional(),
            clia: JOI.boolean().optional(),
            patient_responsibility: JOI.boolean().optional(),
            donot_print: JOI.boolean().optional(),
            revenue_code: JOI.string().trim().optional().allow('', null),
            modifiers: JOI.array().optional(),
            icds: JOI.array().optional(),
        },
        params: {
        },
        query: {
        }
    },


    findAPracticeCPT: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    deleteAPracticeCPT: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    updateAPracticeCPT: {
        headers: {
        },
        body: {
            practice_id: JOI.string().trim().required(),
            cpt_code: JOI.string().trim().optional().allow('', null),
            description: JOI.string().trim().optional().allow('', null),
            service_description: JOI.string().trim().optional().allow('', null),
            fess: JOI.number().optional(),
            medicare_fees: JOI.number().optional(),
            place_of_service: JOI.number().optional(),
            type_of_service: JOI.number().optional(),
            procedure_category: JOI.number().optional(),
            ndc_number: JOI.string().trim().optional().allow('', null),
            ndc_description: JOI.string().trim().optional().allow('', null),
            ndc_units: JOI.string().trim().optional().allow('', null),
            ndc_unit_of_measurements: JOI.number().optional(),
            actively_used: JOI.boolean().optional(),
            valid: JOI.boolean().optional(),
            discontinued: JOI.boolean().optional(),
            clia: JOI.boolean().optional(),
            patient_responsibility: JOI.boolean().optional(),
            donot_print: JOI.boolean().optional(),
            revenue_code: JOI.string().trim().optional().allow('', null),
            modifiers: JOI.array().optional(),
            icds: JOI.array().optional(),
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },



    createAPlanFees: {
        headers: {
        },
        body: {
            plan_id: JOI.string().uuid().required(),
            cpt_id: JOI.number().optional(),
            fee: JOI.number().optional(),
            allowed: JOI.number().optional()
        },
        params: {
        },
        query: {
        }
    },


    findAPlanFees: {
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


    deleteAPlanFees: {
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

    updateAPlanFees: {
        headers: {
        },
        body: {
            plan_id: JOI.string().uuid().required(),
            cpt_id: JOI.number().optional(),
            fee: JOI.number().optional(),
            allowed: JOI.number().optional()
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    createAPracticeAppointmentReason: {
        headers: {
        },
        body: {
            practice_id: JOI.string().uuid().required(),
            name: JOI.string().required(),
            description: JOI.string().trim().optional().allow('', null),
            color_code: JOI.string().trim().optional().allow('', null)
        },
        params: {
        },
        query: {
        }
    },

    findAPracticeAppointmentReason: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    findPracticeAppointmentReasonsByPracticeId: {
        headers: {
        },
        body: {
        },
        params: {
            practice_id: JOI.string().guid().required()
        },
        query: {
        }
    },


    deleteAPracticeAppointmentReason: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    updateAPracticeAppointmentReason: {
        headers: {
        },
        body: {
            practice_id: JOI.string().uuid().required(),
            name: JOI.string().required(),
            description: JOI.string().trim().optional().allow('', null),
            color_code: JOI.string().trim().optional().allow('', null)
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    createAPracticeAppointmentStatus: {
        headers: {
        },
        body: {
            practice_id: JOI.string().uuid().required(),
            name: JOI.string().required(),
            description: JOI.string().trim().optional().allow('', null),
            color_code: JOI.string().trim().optional().allow('', null)
        },
        params: {
        },
        query: {
        }
    },

    findAPracticeAppointmentStatus: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    findPracticeAppointmentStatusesByPracticeId: {
        headers: {
        },
        body: {
        },
        params: {
            practice_id: JOI.string().guid().required()
        },
        query: {
        }
    },


    deleteAPracticeAppointmentStatus: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    updateAPracticeAppointmentStatus: {
        headers: {
        },
        body: {
            practice_id: JOI.string().uuid().required(),
            name: JOI.string().required(),
            description: JOI.string().trim().optional().allow('', null),
            color_code: JOI.string().trim().optional().allow('', null)
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },


    createAPracticeGeneralItem: {
        headers: {
        },
        body: {
            practice_id: JOI.string().uuid().required(),
            name: JOI.string().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
        },
        query: {
        }
    },

    findAPracticeGeneralItem: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    findPracticeGeneralItems: {
        headers: {
        },
        body: {
        },
        params: {
            practice_id: JOI.string().guid().required()
        },
        query: {
        }
    },


    deleteAPracticeGeneralItem: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    updateAPracticeGeneralItem: {
        headers: {
        },
        body: {
            practice_id: JOI.string().uuid().required(),
            name: JOI.string().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },
    createAQuestionType: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
        },
        query: {
        }
    },

    findAQuestionType: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    deleteAQuestionType: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    updateAQuestionType: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },
    createAQuestion: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            question_type_id: JOI.number().required(),
            options: JOI.array().optional()
        },
        params: {
        },
        query: {
        }
    },

    findAQuestion: {
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

    deleteAQuestion: {
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

    updateAQuestion: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            question_type_id: JOI.number().required(),
            options: JOI.array().optional()
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },
    createAQuestionGroup: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            description: JOI.string().trim().optional().allow('', null),
            questions: JOI.array().optional()
        },
        params: {
        },
        query: {
        }
    },
    findAQuestionGroup: {
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

    deleteAQuestionGroup: {
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

    updateAQuestionGroup: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            description: JOI.string().trim().optional().allow('', null),
            questions: JOI.array().optional()
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    createASection: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            description: JOI.string().trim().optional().allow('', null),
            question_groups: JOI.array().optional()
        },
        params: {
        },
        query: {
        }
    },
    findASection: {
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

    deleteASection: {
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

    updateASection: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            description: JOI.string().trim().optional().allow('', null),
            question_groups: JOI.array().optional()
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    createAClinicalTemplate: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            general_item_template_type_id: JOI.number().required(),
            general_item_practice_provider_speciality: JOI.number().required(),
            letter_head_picture: JOI.string().trim().optional().allow('', null),
            sections: JOI.array().required()
        },
        params: {
        },
        query: {
        }
    },

    findAClinicalTemplate: {
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

    deleteAClinicalTemplate: {
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

    updateAClinicalTemplate: {
        headers: {
        },
        body: {

            name: JOI.string().required(),
            general_item_template_type_id: JOI.number().required(),
            general_item_practice_provider_speciality: JOI.number().required(),
            letter_head_picture: JOI.string().trim().optional().allow('', null),
            sections: JOI.array().required()

        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },

    createACPTOrderForm: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            practice_clinical_template_id: JOI.string().uuid().required(),
            description: JOI.string().trim().optional().allow('', null),
            category_cpts: JOI.array().required()
        },
        params: {
        },
        query: {
        }
    },
    findACPTOrderForm: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    deleteACPTOrderForm: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()

        },
        query: {
        }
    },

    updateACPTOrderForm: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            practice_clinical_template_id: JOI.string().uuid().required(),
            description: JOI.string().trim().optional().allow('', null),
            category_cpts: JOI.array().required()
        },
        params: {
            id: JOI.number().required()

        },
        query: {
        }
    },

    createAOrderFormCategory: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
        },
        query: {
        }
    },
    findAOrderFormCategory: {
        headers: {
        },
        body: {
        },
        params: {
            id: [JOI.number().required(), JOI.string().guid().required()]
        },
        query: {
        }
    },

    deleteAOrderFormCategory: {
        headers: {
        },
        body: {
        },
        params: {
            id: [JOI.number().required(), JOI.string().guid().required()]

        },
        query: {
        }
    },

    updateAOrderFormCategory: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
            id: [JOI.number().required(), JOI.string().guid().required()]

        },
        query: {
        }
    },

    createAICDOrderForm: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            practice_clinical_template_id: JOI.string().uuid().required(),
            description: JOI.string().trim().optional().allow('', null),
            category_icds: JOI.array().required()
        },
        params: {
        },
        query: {
        }
    },
    findAICDOrderForm: {
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

    deleteAICDderForm: {
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

    updateAICDOrderForm: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            practice_clinical_template_id: JOI.string().uuid().required(),
            description: JOI.string().trim().optional().allow('', null),
            category_icds: JOI.array().required()
        },
        params: {
            id: JOI.string().guid().required()

        },
        query: {
        }
    },

    createACPTPanelGroup: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            description: JOI.string().trim().optional().allow('', null),
            cpt_groups: JOI.array().required()
        },
        params: {
        },
        query: {
        }
    },
    findACPTPanelGroup: {
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

    deleteACPTPanelGroup: {
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

    updateACPTPanelGroup: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            description: JOI.string().trim().optional().allow('', null),
            cpt_groups: JOI.array().required()
        },
        params: {
            id: JOI.string().guid().required()

        },
        query: {
        }
    },


    createALetterCategory: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
        },
        query: {
        }
    },

    findALetterCategory: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    findAllLetterCategory: {
        headers: {
        },
        body: {
        },
        params: {
            practice_id: JOI.string().guid().required()
        },
        query: {
        }
    },


    deleteALetterCategory: {
        headers: {
        },
        body: {
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    updateALetterCategory: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
            id: JOI.number().required()
        },
        query: {
        }
    },

    createAPatientLetter: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            category_id: JOI.number().required(),
            general_item_document: JOI.number().required(),
            letter_text: JOI.string().trim().optional().allow('', null),
            user_fields: JOI.array().required()
        },
        params: {
        },
        query: {
        }
    },

    findAPatientLetter: {
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

    deleteAPatientLetter: {
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

    updateAPatientLetter: {
        headers: {
        },
        body: {
            name: JOI.string().required(),
            practice_id: JOI.string().uuid().required(),
            category_id: JOI.number().required(),
            general_item_document: JOI.number().required(),
            letter_text: JOI.string().trim().optional().allow('', null),
            user_fields: JOI.array().required()
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },


    createAPracticeMacros: {
        headers: {
        },
        body: {
            practice_id: JOI.string().uuid().required(),
            name: JOI.string().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
        },
        query: {
        }
    },

    findAPracticeMacros: {
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

    findAllPracticeMacros: {
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


    deleteAPracticeMacros: {
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

    updateAPracticeMacros: {
        headers: {
        },
        body: {
            practice_id: JOI.string().uuid().required(),
            name: JOI.string().required(),
            description: JOI.string().trim().optional().allow('', null)
        },
        params: {
            id: JOI.string().guid().required()
        },
        query: {
        }
    },


}

export { validationSchema };