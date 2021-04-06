"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceStatementOptionsQueries = exports.practiceStatementMessagesQueries = exports.practiceStatementAddressQueries = exports.practicesQueries = void 0;
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
            text: " SELECT * FROM practices WHERE id = $1 \n            LEFT JOIN practice_statement_address ON practices.id = practice_statement_address.practice_id\n            LEFT JOIN practice_pay_address ON practices.id = practice_pay_address.practice_id\n             ",
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
var practiceStatementAddressQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_statement_address(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (practiceId) {
        return {
            text: " SELECT * FROM practice_statement_address WHERE practice_id = $1",
            values: [practiceId]
        };
    },
    deleteById: function (practiceId) {
        return {
            text: "DELETE FROM practice_statement_address WHERE practice_id = $1 RETURNING *",
            values: [practiceId]
        };
    },
    updateById: function (practiceId, practiceData) {
        var setQueryPart = "";
        Object.keys(practiceData).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(practiceData).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE practice_statement_address SET " + setQueryPart + " WHERE practice_id = '" + practiceId + "' RETURNING *",
            values: Object.keys(practiceData).map(function (key) { return practiceData[key]; })
        };
    },
};
exports.practiceStatementAddressQueries = practiceStatementAddressQueries;
var practiceStatementMessagesQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_statement_messages(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (practiceId) {
        return {
            text: " SELECT * FROM practice_statement_messages WHERE practice_id = $1",
            values: [practiceId]
        };
    },
    deleteById: function (practiceId) {
        return {
            text: "DELETE FROM practice_statement_messages WHERE practice_id = $1 RETURNING *",
            values: [practiceId]
        };
    },
    updateById: function (practiceId, practiceData) {
        var setQueryPart = "";
        Object.keys(practiceData).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(practiceData).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE practice_statement_messages SET " + setQueryPart + " WHERE practice_id = '" + practiceId + "' RETURNING *",
            values: Object.keys(practiceData).map(function (key) { return practiceData[key]; })
        };
    },
};
exports.practiceStatementMessagesQueries = practiceStatementMessagesQueries;
var practiceStatementOptionsQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_statement_options(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (practiceId) {
        return {
            text: " SELECT * FROM practice_statement_options WHERE practice_id = $1",
            values: [practiceId]
        };
    },
    deleteById: function (practiceId) {
        return {
            text: "DELETE FROM practice_statement_options WHERE practice_id = $1 RETURNING *",
            values: [practiceId]
        };
    },
    updateById: function (practiceId, practiceData) {
        var setQueryPart = "";
        Object.keys(practiceData).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(practiceData).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE practice_statement_options SET " + setQueryPart + " WHERE practice_id = '" + practiceId + "' RETURNING *",
            values: Object.keys(practiceData).map(function (key) { return practiceData[key]; })
        };
    },
};
exports.practiceStatementOptionsQueries = practiceStatementOptionsQueries;
