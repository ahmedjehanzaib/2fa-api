"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.referringProvidersQueries = void 0;
var referringProvidersQueries = {
    createAReferingProvider: function (rpData) {
        var columns = Object.keys(rpData);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return rpData[k];
        });
        return {
            text: "INSERT INTO referring_providers(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findReferingProviderById: function (rpId) {
        return {
            text: " SELECT * FROM referring_providers WHERE id = $1",
            values: [rpId]
        };
    },
    deleteReferingProviderById: function (rpId) {
        return {
            text: "DELETE FROM referring_providers WHERE id = $1 RETURNING *",
            values: [rpId]
        };
    },
    updateReferingProviderById: function (rpId, rpData) {
        var setQueryPart = "";
        Object.keys(rpData).forEach(function (key, index) {
            setQueryPart += " " + key + "=$" + (index + 1);
            if (Object.keys(rpData).length !== (index + 1)) {
                setQueryPart += ",";
            }
        });
        return {
            text: "UPDATE referring_providers SET " + setQueryPart + " WHERE id = '" + rpId + "' RETURNING *",
            values: Object.keys(rpData).map(function (key) { return rpData[key]; })
        };
    },
    findAllReferingProviders: function () {
        return {
            text: "SELECT * FROM referring_providers",
            values: []
        };
    },
};
exports.referringProvidersQueries = referringProvidersQueries;
