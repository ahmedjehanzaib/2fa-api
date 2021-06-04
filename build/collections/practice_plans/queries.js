"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerInsuranceBillingOptionsQueries = exports.planFeesQueries = exports.planAddressesQueries = exports.practicePlansQueries = void 0;
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
            text: "SELECT pp.*,\n            p.\"name\" AS practice_name,\n            ppc.\"name\" as category_name,\n            to_json(pa.*) as address,\n            to_json(pf.*) as fees,\n            to_json(pibo.*) as insurance_billing_options \n            FROM practice_plan pp\n            LEFT JOIN practices p\n            ON pp.practice_id = p.id\n            left join practice_plan_category ppc \n            on pp.plan_category_id = ppc.id \n            left join plan_addresses pa \n            on pp.id = pa.plan_id \n            left join plan_fees pf \n            on pp.id = pf.plan_id\n            left join provider_insurance_billing_option pibo \n            on pp.id = pibo.plan_id  WHERE pp.id = $1",
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
            text: "SELECT pp.*,\n            p.\"name\" AS practice_name,\n            ppc.\"name\" as category_name,\n            to_json(pa.*) as address,\n            to_json(pf.*) as fees,\n            to_json(pibo.*) as insurance_billing_options \n            FROM practice_plan pp\n            LEFT JOIN practices p\n            ON pp.practice_id = p.id\n            left join practice_plan_category ppc \n            on pp.plan_category_id = ppc.id \n            left join plan_addresses pa \n            on pp.id = pa.plan_id \n            left join plan_fees pf \n            on pp.id = pf.plan_id\n            left join provider_insurance_billing_option pibo \n            on pp.id = pibo.plan_id",
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
exports.providerInsuranceBillingOptionsQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO provider_insurance_billing_option(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findByProviderId: function (providerId) {
        return {
            text: " SELECT * FROM provider_insurance_billing_option WHERE provider_id = $1",
            values: [providerId]
        };
    },
    deleteByPlanId: function (providerId) {
        return {
            text: "DELETE FROM provider_insurance_billing_option WHERE plan_id = $1 RETURNING *",
            values: [providerId]
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
            text: "UPDATE provider_insurance_billing_option SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM provider_insurance_billing_option",
            values: []
        };
    },
};
