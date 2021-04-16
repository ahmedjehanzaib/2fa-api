"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planFeesQueries = exports.planAddressesQueries = exports.practicePlansQueries = void 0;
exports.practicePlansQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_plan(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: " SELECT * FROM practice_plan WHERE id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM practice_plan WHERE id = $1 RETURNING *",
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
            text: "UPDATE practice_plan SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(locationData).map(function (key) { return locationData[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM practice_plan",
            values: []
        };
    },
};
exports.planAddressesQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO plan_addresses(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: " SELECT * FROM plan_addresses WHERE id = $1",
            values: [Id]
        };
    },
    findByplanId: function (Id) {
        return {
            text: " SELECT * FROM plan_addresses WHERE plan_id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM plan_addresses WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    deleteByPlanId: function (Id) {
        return {
            text: "DELETE FROM plan_addresses WHERE plan_id = $1 RETURNING *",
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
            text: "UPDATE plan_addresses SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(locationData).map(function (key) { return locationData[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM plan_addresses",
            values: []
        };
    },
};
exports.planFeesQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO plan_fees(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: " SELECT * FROM plan_fees WHERE id = $1",
            values: [Id]
        };
    },
    findByplanId: function (Id) {
        return {
            text: " SELECT * FROM plan_fees WHERE plan_id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM plan_fees WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    deleteByPlanId: function (Id) {
        return {
            text: "DELETE FROM plan_fees WHERE plan_id = $1 RETURNING *",
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
            text: "UPDATE plan_fees SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(locationData).map(function (key) { return locationData[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM plan_fees",
            values: []
        };
    },
};
