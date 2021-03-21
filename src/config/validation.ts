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
}

export { validationSchema };