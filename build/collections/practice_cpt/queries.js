"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPTToICDQueries = exports.CPTToModifierQueries = exports.practiceCPTQueries = void 0;
exports.practiceCPTQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_cpt(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: " SELECT\n            pc.*,\n            To_json(p2.*) AS practice,\n            To_json(ppos.*) AS place_of_service,\n            To_json(ptos.*) AS type_of_service,\n            To_json(ppc.*) AS procedure_category,\n            To_json(nuom.*) AS ndc_unit_of_measurements \n         FROM\n            practice_cpt pc \n            LEFT JOIN\n               practices p2 \n               ON p2.id = pc.practice_id \n            LEFT JOIN\n               practice_place_of_service ppos \n               ON ppos.id = pc.place_of_service \n            LEFT JOIN\n               practice_type_of_service ptos \n               ON ptos.id = pc.type_of_service \n            LEFT JOIN\n               practice_procedure_category ppc \n               ON ppc.id = pc.procedure_category \n            LEFT JOIN\n               ndc_unit_of_measurement nuom \n               ON nuom.id = pc.ndc_unit_of_measurements \n         WHERE\n            pc.id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM practice_cpt WHERE id = $1 RETURNING *",
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
            text: "UPDATE practice_cpt SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT\n            pc.*,\n            To_json(p2.*) AS practice,\n            To_json(ppos.*) AS place_of_service,\n            To_json(ptos.*) AS type_of_service,\n            To_json(ppc.*) AS procedure_category,\n            To_json(nuom.*) AS ndc_unit_of_measurements \n         FROM\n            practice_cpt pc \n            LEFT JOIN\n               practices p2 \n               ON p2.id = pc.practice_id \n            LEFT JOIN\n               practice_place_of_service ppos \n               ON ppos.id = pc.place_of_service \n            LEFT JOIN\n               practice_type_of_service ptos \n               ON ptos.id = pc.type_of_service \n            LEFT JOIN\n               practice_procedure_category ppc \n               ON ppc.id = pc.procedure_category \n            LEFT JOIN\n               ndc_unit_of_measurement nuom \n               ON nuom.id = pc.ndc_unit_of_measurements",
            values: []
        };
    },
};
exports.CPTToModifierQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO cpt_to_modifiers(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: " SELECT * FROM cpt_to_modifiers WHERE id = $1",
            values: [Id]
        };
    },
    findByCPTId: function (Id) {
        return {
            text: " SELECT * FROM cpt_to_modifiers WHERE cpt_id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM cpt_to_modifiers WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    deleteByCPTId: function (CPTId) {
        return {
            text: "DELETE FROM cpt_to_modifiers WHERE cpt_id = $1 RETURNING *",
            values: [CPTId]
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
            text: "UPDATE cpt_to_modifiers SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM cpt_to_modifiers",
            values: []
        };
    },
};
exports.CPTToICDQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO cpt_icd(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: " SELECT * FROM cpt_icd WHERE id = $1",
            values: [Id]
        };
    },
    findByCPTId: function (Id) {
        return {
            text: " SELECT * FROM cpt_icd WHERE cpt_id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM cpt_icd WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    deleteByCPTId: function (CPTId) {
        return {
            text: "DELETE FROM cpt_icd WHERE cpt_id = $1 RETURNING *",
            values: [CPTId]
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
            text: "UPDATE cpt_icd SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM cpt_icd",
            values: []
        };
    },
};
