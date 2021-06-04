"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceTypeOfServiceQueries = void 0;
exports.practiceTypeOfServiceQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_type_of_service(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT ptos.*,\n            p.\"name\" AS practice_name\n            FROM practice_type_of_service ptos\n            LEFT JOIN practices p\n            ON ptos.practice_id = p.id WHERE ptos.id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM practice_type_of_service WHERE id = $1 RETURNING *",
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
            text: "UPDATE practice_type_of_service SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT ptos.*,\n            p.\"name\" AS practice_name\n            FROM practice_type_of_service ptos\n            LEFT JOIN practices p\n            ON ptos.practice_id = p.id",
            values: []
        };
    },
};
