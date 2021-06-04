"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceICDQueries = void 0;
exports.practiceICDQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_icd(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT pi.*,\n            p.\"name\" AS practice_name\n            FROM practice_icd pi\n            LEFT JOIN practices p\n            ON pi.practice_id = p.id WHERE pi.id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM practice_icd WHERE id = $1 RETURNING *",
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
            text: "UPDATE practice_icd SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT pi.*,\n            p.\"name\" AS practice_name\n            FROM practice_icd pi\n            LEFT JOIN practices p\n            ON pi.practice_id = p.id",
            values: []
        };
    },
};
