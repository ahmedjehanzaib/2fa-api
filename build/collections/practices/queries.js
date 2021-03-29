"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practicesQueries = void 0;
var practicesQueries = {
    createAPractice: function (practiceData) {
        return {
            text: "INSERT INTO practices(id, name, client_id, special_security_number, client_type, first_name, last_name, pay_to_address_same_as_address, statement_address_same_as_address,\n                direct_secure_email, direct_secure_password, speciality)  VALUES ($1, $2, $3, $4,$5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
            values: [practiceData.id, practiceData.name, practiceData.client_id, practiceData.special_security_number, practiceData.client_type, practiceData.first_name, practiceData.last_name, practiceData.pay_to_address_same_as_address, practiceData.statement_address_same_as_address,
                practiceData.direct_secure_email, practiceData.direct_secure_password, practiceData.speciality]
        };
    },
    findPracticeById: function (practiceId) {
        return {
            text: " SELECT * FROM practices WHERE id = $1",
            values: [practiceId]
        };
    },
    deletePracticesById: function (practiceId) {
        return {
            text: "DELETE FROM practices WHERE id = $1 RETURNING *",
            values: [practiceId]
        };
    },
    updatePracticeById: function (practiceId, practiceData) {
        var setQueryPart = "";
        Object.keys(practiceData).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(practiceData).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE practices SET " + setQueryPart + " WHERE id = '" + practiceId + "' RETURNING *",
            values: Object.keys(practiceData).map(function (key) { return practiceData[key]; })
        };
    },
};
exports.practicesQueries = practicesQueries;
