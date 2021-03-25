"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientsQueries = void 0;
var clientsQueries = {
    createAClient: function (clientData) {
        return {
            text: "INSERT INTO clients(id, name, organization_name, tax_id, address_line_1, address_line_2, city, state, zipcode, phone_number, email, contact_person, fax)  VALUES ($1, $2, $3, $4,$5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
            values: [clientData.id, clientData.name, clientData.organization_name, clientData.tax_id, clientData.address_line_1, clientData.address_line_2, clientData.city, clientData.state, clientData.zipcode, clientData.phone_number, clientData.email, clientData.contact_person, clientData.fax]
        };
    },
    findClientById: function (clientId) {
        return {
            text: " SELECT * FROM clients WHERE id = $1",
            values: [clientId]
        };
    },
    deleteClientById: function (clientId) {
        return {
            text: "DELETE FROM clients WHERE id = $1 RETURNING *",
            values: [clientId]
        };
    },
    updateClientById: function (clientId, clientData) {
        var setQueryPart = "";
        Object.keys(clientData).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(clientData).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE clients SET " + setQueryPart + " WHERE id = '" + clientId + "' RETURNING *",
            values: Object.keys(clientData).map(function (key) { return clientData[key]; })
        };
    },
    findAllClients: function () {
        return {
            text: "SELECT * FROM clients",
            values: []
        };
    },
};
exports.clientsQueries = clientsQueries;
