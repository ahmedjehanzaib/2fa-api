import { IClient } from './interfaces';

const clientsQueries = {
    createAClient: (clientData: IClient) => {
        return {
            text: `INSERT INTO clients(id, name, organization_name, tax_id, address_line_1, address_line_2, city, state, zipcode, phone_number, email, contact_person, fax)  VALUES ($1, $2, $3, $4,$5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`,
            values: [clientData.id, clientData.name, clientData.organization_name, clientData.tax_id, clientData.address_line_1, clientData.address_line_2, clientData.city, clientData.state, clientData.zipcode, clientData.phone_number, clientData.email, clientData.contact_person, clientData.fax]
        }
    },

    findClientById: (clientId: string) => {
        return {
            text: ` SELECT * FROM clients WHERE id = $1`,
            values: [clientId]
        }
    },

    deleteClientById: (clientId: string) => {
        return {
			text: `DELETE FROM clients WHERE id = $1 RETURNING *`,
			values: [clientId]
		};
    },

    updateClientById: (clientId: string, clientData: any) => {
		let setQueryPart = ``
		Object.keys(clientData).forEach((key, index) => {
			setQueryPart += ` ${key}=$${index + 1}`
			if (Object.keys(clientData).length !== (index + 1)) {
				setQueryPart += `,`
			}
		});
		return {
			text: `UPDATE clients SET ${setQueryPart} WHERE id = '${clientId}' RETURNING *`,
			values: Object.keys(clientData).map((key) => clientData[key])
		};
	},
}

export { clientsQueries };