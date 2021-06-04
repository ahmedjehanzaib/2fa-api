"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceModifierQueries = void 0;
exports.practiceModifierQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_modifier(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT pm.*,\n            p.\"name\" AS practice_name\n            FROM practice_modifier pm\n            LEFT JOIN practices p\n            ON pm.practice_id = p.id WHERE pm.id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM practice_modifier WHERE id = $1 RETURNING *",
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
            text: "UPDATE practice_modifier SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT pm.*,\n            p.\"name\" AS practice_name\n            FROM practice_modifier pm\n            LEFT JOIN practices p\n            ON pm.practice_id = p.id",
            values: []
        };
    },
};
