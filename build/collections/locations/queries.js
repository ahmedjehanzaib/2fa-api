"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationPaymentAddressQueries = exports.locationQueries = void 0;
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
    findById: function (Id) {
        return {
            text: " SELECT pl.*,\n            p.\"name\" AS practice_name\n            FROM practice_locations pl \n            LEFT JOIN practices p\n            ON pl.practice_id = p.id  WHERE pl.id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM practice_locations WHERE id = $1 RETURNING *",
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
            text: "UPDATE practice_locations SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(locationData).map(function (key) { return locationData[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT pl.*,\n            p.\"name\" AS practice_name\n            FROM practice_locations pl \n            LEFT JOIN practices p\n                   ON pl.practice_id = p.id \n            ",
            values: []
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
    deleteLocationById: function (Id) {
        return {
            text: "DELETE FROM practice_location_pay_to_address WHERE practice_location_id = $1 RETURNING *",
            values: [Id]
        };
    },
    updateByLocationId: function (Id, locationData) {
        var setQueryPart = "";
        Object.keys(locationData).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(locationData).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE practice_location_pay_to_address SET " + setQueryPart + " WHERE practice_location_id = '" + Id + "' RETURNING *",
            values: Object.keys(locationData).map(function (key) { return locationData[key]; })
        };
    },
};
