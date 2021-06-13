"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.letterFieldsQueries = exports.patientLetterQueries = void 0;
exports.patientLetterQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_patient_letters(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT cq.*, json_agg(cqo.*) as user_fields  FROM practice_patient_letters cq \n            left join practice_patient_letter_fields cqo \n            on cq.id = cqo.practice_patient_letter_id WHERE cq.id = $1 group by cq.id",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM practice_patient_letters WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    updateById: function (Id, data) {
        var setQueryPart = "";
        Object.keys(data).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE practice_patient_letters SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function (Id) {
        return {
            text: "SELECT cq.*, json_agg(cqo.*) as user_fields  FROM practice_patient_letters cq \n            left join practice_patient_letter_fields cqo \n            on cq.id = cqo.practice_patient_letter_id WHERE cq.practice_id = $1 group by cq.id",
            values: [Id]
        };
    },
};
exports.letterFieldsQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_patient_letter_fields(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT *  FROM practice_patient_letter_fields WHERE id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM practice_patient_letter_fields WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    deleteByLetterId: function (Id) {
        return {
            text: "DELETE FROM practice_patient_letter_fields WHERE practice_patient_letter_id = $1 RETURNING *",
            values: [Id]
        };
    },
    updateById: function (Id, data) {
        var setQueryPart = "";
        Object.keys(data).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE practice_patient_letter_fields SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT *  FROM practice_patient_letter_fields",
            values: []
        };
    },
};
