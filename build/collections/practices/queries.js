"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationPaymentAddressQueries = exports.practiceStatementOptionsQueries = exports.practiceStatementMessagesQueries = exports.practiceStatementAddressQueries = exports.locationQueries = exports.practicesQueries = void 0;
exports.practicesQueries = {
    createAPractice: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practices(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
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
    findAllPractices: function () {
        return {
            text: " SELECT * FROM practices",
            values: []
        };
    }
};
exports.locationQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_locations(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (locationId) {
        return {
            text: " SELECT * FROM practice_locations WHERE id = $1",
            values: [locationId]
        };
    },
    findByPracticeId: function (practiceId) {
        return {
            text: " SELECT * FROM practice_locations WHERE practice_id = $1",
            values: [practiceId]
        };
    },
    deleteBypracticeId: function (practiceId) {
        return {
            text: "DELETE FROM practice_locations WHERE practice_id = $1 RETURNING *",
            values: [practiceId]
        };
    },
    updateById: function (locationId, locationData) {
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
exports.practiceStatementAddressQueries = {
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
    findByPracticeId: function (practiceId) {
        return {
            text: " SELECT * FROM practice_statement_address WHERE practice_id = $1",
            values: [practiceId]
        };
    },
    deleteByPracticeId: function (practiceId) {
        return {
            text: "DELETE FROM practice_statement_address WHERE practice_id = $1 RETURNING *",
            values: [practiceId]
        };
    },
    updateByPracticeId: function (practiceId, data) {
        var setQueryPart = "";
        Object.keys(data).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE practice_statement_address SET " + setQueryPart + " WHERE practice_id = '" + practiceId + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
};
exports.practiceStatementMessagesQueries = {
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
    findByPracticeId: function (practiceId) {
        return {
            text: " SELECT * FROM practice_statement_messages WHERE practice_id = $1",
            values: [practiceId]
        };
    },
    deleteByPracticeId: function (practiceId) {
        return {
            text: "DELETE FROM practice_statement_messages WHERE practice_id = $1 RETURNING *",
            values: [practiceId]
        };
    },
    updateByPracticeId: function (practiceId, practiceData) {
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
exports.practiceStatementOptionsQueries = {
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
    findByPracticeId: function (practiceId) {
        return {
            text: " SELECT * FROM practice_statement_options WHERE practice_id = $1",
            values: [practiceId]
        };
    },
    deleteByPracticeId: function (practiceId) {
        return {
            text: "DELETE FROM practice_statement_options WHERE practice_id = $1 RETURNING *",
            values: [practiceId]
        };
    },
    updateByPracticeId: function (practiceId, practiceData) {
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
exports.locationPaymentAddressQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_location_pay_to_address(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findByLocationId: function (Id) {
        return {
            text: " SELECT * FROM practice_location_pay_to_address WHERE practice_location_id = $1",
            values: [Id]
        };
    },
    deleteByLocationId: function (locationId) {
        return {
            text: "DELETE FROM practice_location_pay_to_address WHERE practice_location_id = $1 RETURNING *",
            values: [locationId]
        };
    },
    deleteByLocationIds: function (locationIds) {
        return {
            text: "DELETE FROM practice_location_pay_to_address WHERE practice_location_id IN (" + locationIds.join(',') + ") RETURNING *",
            values: []
        };
    },
    updateByLocationId: function (locationId, locationData) {
        var setQueryPart = "";
        Object.keys(locationData).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(locationData).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE practice_location_pay_to_address SET " + setQueryPart + " WHERE practice_location_id = '" + locationId + "' RETURNING *",
            values: Object.keys(locationData).map(function (key) { return locationData[key]; })
        };
    },
};
