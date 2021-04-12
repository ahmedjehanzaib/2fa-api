"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRolesQueries = exports.userQueries = void 0;
exports.userQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        console.log({ data: data });
        return {
            text: "INSERT INTO users(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: " SELECT * FROM users WHERE id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM users WHERE id = $1 RETURNING *",
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
            text: "UPDATE users SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(locationData).map(function (key) { return locationData[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM users",
            values: []
        };
    },
};
exports.userRolesQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO user_roles(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findByUserId: function (Id) {
        return {
            text: " SELECT * FROM user_roles WHERE user_id = $1",
            values: [Id]
        };
    },
    deleteByUserId: function (Id) {
        return {
            text: "DELETE FROM user_roles WHERE user_id = $1 RETURNING *",
            values: [Id]
        };
    },
    updateByUserId: function (Id, data) {
        var setQueryPart = "";
        Object.keys(data).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE user_roles SET " + setQueryPart + " WHERE user_id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
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
            text: "UPDATE user_roles SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
};
