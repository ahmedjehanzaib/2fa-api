"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateToSectionQueries = exports.templateQueries = void 0;
exports.templateQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_clinical_templates(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT cq.*, json_agg(cqo.clinical_section_id) as sections  FROM practice_clinical_templates cq \n            left join clinical_templates_to_clinical_sections cqo \n            on cq.id = cqo.practice_clinical_template_id WHERE cq.id = $1 group by cq.id",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM practice_clinical_templates WHERE id = $1 RETURNING *",
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
            text: "UPDATE practice_clinical_templates SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT cq.*, json_agg(cqo.clinical_section_id) as sections  FROM practice_clinical_templates cq \n            left join clinical_templates_to_clinical_sections cqo \n            on cq.id = cqo.practice_clinical_template_id group by cq.id",
            values: []
        };
    },
};
exports.templateToSectionQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO clinical_templates_to_clinical_sections(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT *  FROM clinical_templates_to_clinical_sections WHERE id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM clinical_templates_to_clinical_sections WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    deleteByTemplateId: function (Id) {
        return {
            text: "DELETE FROM clinical_templates_to_clinical_sections WHERE practice_clinical_template_id = $1 RETURNING *",
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
            text: "UPDATE clinical_templates_to_clinical_sections SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT *  FROM clinical_templates_to_clinical_sections",
            values: []
        };
    },
};
