"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cptOrderSetFormToCategories = exports.cptOrderSetFormCategoriesCPTs = exports.CPTOrderFormQueries = void 0;
exports.CPTOrderFormQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO clinical_template_cpt_order_set_form(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT * FROM clinical_template_cpt_order_set_form WHERE id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM clinical_template_cpt_order_set_form WHERE id = $1 RETURNING *",
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
            text: "UPDATE clinical_template_cpt_order_set_form SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function (Id) {
        return {
            text: "SELECT * FROM clinical_template_cpt_order_set_form WHERE practice_id = $1",
            values: [Id]
        };
    },
};
exports.cptOrderSetFormCategoriesCPTs = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO cpt_order_set_form_categories_cpts(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT * FROM cpt_order_set_form_categories_cpts WHERE id = $1",
            values: [Id]
        };
    },
    findByCategoryId: function (Id) {
        return {
            text: "SELECT * FROM cpt_order_set_form_categories_cpts WHERE cpt_order_set_form_category_id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM cpt_order_set_form_categories_cpts WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    deleteByFormId: function (Id) {
        return {
            text: "DELETE FROM cpt_order_set_form_categories_cpts WHERE template_cpt_order_set_form_id = $1 RETURNING *",
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
            text: "UPDATE cpt_order_set_form_categories_cpts SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM cpt_order_set_form_categories_cpts",
            values: []
        };
    },
};
exports.cptOrderSetFormToCategories = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO cpt_order_set_form_to_categories(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT * FROM cpt_order_set_form_to_categories WHERE id = $1",
            values: [Id]
        };
    },
    findByFormId: function (Id) {
        return {
            text: "SELECT * FROM cpt_order_set_form_to_categories WHERE template_cpt_order_set_form_id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM cpt_order_set_form_to_categories WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    deleteByFormId: function (Id) {
        return {
            text: "DELETE FROM cpt_order_set_form_to_categories WHERE template_cpt_order_set_form_id = $1 RETURNING *",
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
            text: "UPDATE cpt_order_set_form_to_categories SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM cpt_order_set_form_to_categories",
            values: []
        };
    },
};
