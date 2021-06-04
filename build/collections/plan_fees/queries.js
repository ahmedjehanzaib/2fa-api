"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planFeesQueries = void 0;
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
            text: "SELECT pf.*, to_json(pp.*) as plan FROM plan_fees pf \n            LEFT join practice_plan pp \n            on pf.plan_id = pp.id  WHERE pf.id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM plan_fees WHERE id = $1 RETURNING *",
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
            text: "UPDATE plan_fees SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT pf.*, to_json(pp.*) as plan FROM plan_fees pf \n            LEFT join practice_plan pp \n            on pf.plan_id = pp.id ",
            values: []
        };
    },
};
