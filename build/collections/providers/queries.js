"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerInsuranceBillingOptionsQueries = exports.providerPayToAddressQueries = exports.providersQueries = void 0;
var providersQueries = {
    createAProvider: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO providers(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findProviderById: function (Id) {
        return {
            text: " SELECT * FROM providers WHERE id = $1",
            values: [Id]
        };
    },
    deleteProviderById: function (Id) {
        return {
            text: "DELETE FROM providers WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    updateProviderById: function (Id, data) {
        var setQueryPart = "";
        Object.keys(data).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE providers SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAllProviders: function () {
        return {
            text: "SELECT * FROM providers",
            values: []
        };
    },
};
exports.providersQueries = providersQueries;
var providerPayToAddressQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO provider_pay_to_address(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findByProviderId: function (providerId) {
        return {
            text: " SELECT * FROM provider_pay_to_address WHERE provider_id = $1",
            values: [providerId]
        };
    },
    deleteByProviderId: function (providerId) {
        return {
            text: "DELETE FROM provider_pay_to_address WHERE provider_id = $1 RETURNING *",
            values: [providerId]
        };
    },
    updateById: function (providerId, data) {
        var setQueryPart = "";
        Object.keys(data).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE provider_pay_to_address SET " + setQueryPart + " WHERE id = '" + providerId + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM provider_pay_to_address",
            values: []
        };
    },
};
exports.providerPayToAddressQueries = providerPayToAddressQueries;
var providerInsuranceBillingOptionsQueries = {
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
    deleteByProviderId: function (providerId) {
        return {
            text: "DELETE FROM provider_insurance_billing_option WHERE provider_id = $1 RETURNING *",
            values: [providerId]
        };
    },
    updateByProviderId: function (providerId, data) {
        var setQueryPart = "";
        Object.keys(data).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(data).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE provider_insurance_billing_option SET " + setQueryPart + " WHERE provider_id = '" + providerId + "' RETURNING *",
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
exports.providerInsuranceBillingOptionsQueries = providerInsuranceBillingOptionsQueries;
