"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationQueries = void 0;
var locationQueries = {
    createALocation: function (locationData) {
        console.log(locationData);
        return {
            text: "INSERT INTO practice_locations(id, name, practice_id, city, state, zip_code, address_line_1, address_line_2,\n                phone_number, fax, website, cell_number, by_default, description, email, taxonomy_code,\n                 national_provider_identity, pos, tax_id, clia_number, insurance_bill_pay_to_address, insurance_bill_under_location, insurance_donot_report_location)\n                   VALUES ($1, $2, $3, $4,$5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23) RETURNING *",
            values: [
                locationData.id,
                locationData.name,
                locationData.practice_id,
                locationData.city,
                locationData.state,
                locationData.zip_code,
                locationData.address_line_1,
                locationData.address_line_2,
                locationData.phone_number,
                locationData.fax,
                locationData.website,
                locationData.cell_number,
                locationData.by_default,
                locationData.description,
                locationData.email,
                locationData.taxonomy_code,
                locationData.national_provider_identity,
                locationData.pos,
                locationData.tax_id,
                locationData.clia_number,
                locationData.insurance_bill_pay_to_address,
                locationData.insurance_bill_under_location,
                locationData.insurance_donot_report_location
            ]
        };
    },
    findLocationById: function (locationId) {
        return {
            text: " SELECT * FROM practice_locations WHERE id = $1",
            values: [locationId]
        };
    },
    deleteLocationById: function (locationId) {
        return {
            text: "DELETE FROM practice_locations WHERE id = $1 RETURNING *",
            values: [locationId]
        };
    },
    updateLocationById: function (locationId, locationData) {
        var setQueryPart = "";
        Object.keys(locationData).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(locationData).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE practice_locations SET " + setQueryPart + " WHERE id = '" + locationId + "' RETURNING *",
            values: Object.keys(locationData).map(function (key) { return locationData[key]; })
        };
    },
};
exports.locationQueries = locationQueries;
