"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceRolesQueries = void 0;
exports.practiceRolesQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_roles(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT pr.*,\n            p.\"name\" AS practice_name\n            FROM  practice_roles pr\n            LEFT JOIN practices p\n                   ON pr.practice_id = p.id  WHERE pr.id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM practice_roles WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    updateById: function (Id, locationData) {
        var setQueryPart = "";
        Object.keys(locationData).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(locationData).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE practice_roles SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(locationData).map(function (key) { return locationData[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT pr.*,\n            p.\"name\" AS practice_name\n            FROM  practice_roles pr\n            LEFT JOIN practices p\n            ON pr.practice_id = p.id",
            values: []
        };
    },
};
