"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planTypesQueries = void 0;
exports.planTypesQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO plan_type(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: " SELECT * FROM plan_type WHERE id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM plan_type WHERE id = $1 RETURNING *",
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
            text: "UPDATE plan_type SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM plan_type",
            values: []
        };
    },
};
