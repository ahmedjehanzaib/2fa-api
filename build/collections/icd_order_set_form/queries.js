"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICDOrderSetFormToCategories = exports.ICDOrderSetFormCategoriesICDs = exports.ICDOrderFormQueries = void 0;
exports.ICDOrderFormQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO template_icd_order_set_form(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT * FROM template_icd_order_set_form WHERE id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM template_icd_order_set_form WHERE id = $1 RETURNING *",
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
            text: "UPDATE template_icd_order_set_form SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function (Id) {
        return {
            text: "SELECT * FROM template_icd_order_set_form WHERE practice_id = $1",
            values: [Id]
        };
    },
};
exports.ICDOrderSetFormCategoriesICDs = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        console.log(data);
        return {
            text: "INSERT INTO icd_order_set_form_categories_icds(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT * FROM icd_order_set_form_categories_icds WHERE id = $1",
            values: [Id]
        };
    },
    findByCategoryId: function (Id) {
        return {
            text: "SELECT * FROM icd_order_set_form_categories_icds WHERE icd_order_set_form_id = $1",
            values: [Id]
        };
    },
    findByCategoryAndFormId: function (categoryId, formId) {
        return {
            text: "SELECT * FROM icd_order_set_form_categories_icds WHERE icd_order_set_form_category_id = $1 and icd_order_set_form_id = $2",
            values: [categoryId, formId]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM icd_order_set_form_categories_icds WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    deleteByFormId: function (Id) {
        return {
            text: "DELETE FROM icd_order_set_form_categories_icds WHERE icd_order_set_form_id = $1 RETURNING *",
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
            text: "UPDATE icd_order_set_form_categories_icds SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM icd_order_set_form_categories_icds",
            values: []
        };
    },
};
exports.ICDOrderSetFormToCategories = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO icd_order_set_form_to_categories(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT * FROM icd_order_set_form_to_categories WHERE id = $1",
            values: [Id]
        };
    },
    findByFormId: function (Id) {
        return {
            text: "SELECT * FROM icd_order_set_form_to_categories WHERE template_icd_order_set_form_id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM icd_order_set_form_to_categories WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    deleteByFormId: function (Id) {
        return {
            text: "DELETE FROM icd_order_set_form_to_categories WHERE template_icd_order_set_form_id = $1 RETURNING *",
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
            text: "UPDATE icd_order_set_form_to_categories SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM icd_order_set_form_to_categories",
            values: []
        };
    },
};
