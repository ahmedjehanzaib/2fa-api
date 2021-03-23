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
            contact_person: JOI.string().trim().optional().allow('', null)
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
            contact_person: JOI.string().trim().optional().allow('', null)
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
            special_security_number: JOI.number().required(),
            client_type: JOI.string().trim().optional().allow('', null),
            first_name: JOI.string().trim().required(),
            last_name: JOI.string().trim().required(),
            pay_to_address_same_as_address: JOI.string().trim().optional().allow('', null),
            statement_address_same_as_address: JOI.string().trim().optional().allow('', null),
            direct_secure_email:JOI.string().email().optional().allow('', null),
            direct_secure_password: JOI.string().trim().optional().allow('', null),
			speciality: JOI.string().trim().required(),
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
            special_security_number: JOI.number().required(),
            client_type: JOI.string().trim().optional().allow('', null),
            first_name: JOI.string().trim().required(),
            last_name: JOI.string().trim().required(),
            pay_to_address_same_as_address: JOI.string().trim().optional().allow('', null),
            statement_address_same_as_address: JOI.string().trim().optional().allow('', null),
            direct_secure_email:JOI.string().email().optional().allow('', null),
            direct_secure_password: JOI.string().trim().optional().allow('', null),
			speciality: JOI.string().trim().required(),
		},
		params: {
            id: JOI.string().guid().required()
		},
        query: {
        }
    },
}

export { validationSchema };