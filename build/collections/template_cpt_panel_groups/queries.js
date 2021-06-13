"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.panelGroupCPTsICDs = exports.panelGroupCPTsModifiers = exports.panelGroupCPTsQueries = exports.CPTPanelGroupQueries = void 0;
exports.CPTPanelGroupQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO template_cpt_panel_groups(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT * FROM template_cpt_panel_groups WHERE id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM template_cpt_panel_groups WHERE id = $1 RETURNING *",
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
            text: "UPDATE template_cpt_panel_groups SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findByPractice: function (Id) {
        return {
            text: "SELECT * FROM template_cpt_panel_groups WHERE practice_id = $1",
            values: [Id]
        };
    },
};
exports.panelGroupCPTsQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO template_cpt_panel_groups_cpts(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT * FROM template_cpt_panel_groups_cpts WHERE id = $1",
            values: [Id]
        };
    },
    findByGroupId: function (Id) {
        return {
            text: "SELECT * FROM template_cpt_panel_groups_cpts WHERE template_cpt_panel_group_id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM template_cpt_panel_groups_cpts WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    deleteByGroupId: function (Id) {
        return {
            text: "DELETE FROM template_cpt_panel_groups_cpts WHERE template_cpt_panel_group_id = $1 RETURNING *",
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
            text: "UPDATE template_cpt_panel_groups_cpts SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM template_cpt_panel_groups_cpts",
            values: []
        };
    },
};
exports.panelGroupCPTsModifiers = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO template_cpt_panel_groups_cpts_modifiers(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT * FROM template_cpt_panel_groups_cpts_modifiers WHERE id = $1",
            values: [Id]
        };
    },
    findBygroupCPTId: function (Id) {
        return {
            text: "SELECT * FROM template_cpt_panel_groups_cpts_modifiers WHERE template_cpt_panel_groups_cpt_id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM template_cpt_panel_groups_cpts_modifiers WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    deleteBygroupCPTIds: function (Ids) {
        return {
            text: "DELETE FROM template_cpt_panel_groups_cpts_modifiers WHERE template_cpt_panel_groups_cpt_id IN ($1) RETURNING *",
            values: [Ids]
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
            text: "UPDATE template_cpt_panel_groups_cpts_modifiers SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM template_cpt_panel_groups_cpts_modifiers",
            values: []
        };
    },
};
exports.panelGroupCPTsICDs = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO template_cpt_panel_groups_cpts_icds(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT * FROM template_cpt_panel_groups_cpts_icds WHERE id = $1",
            values: [Id]
        };
    },
    findBygroupCPTId: function (Id) {
        return {
            text: "SELECT * FROM template_cpt_panel_groups_cpts_icds WHERE template_cpt_panel_groups_cpt_id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM template_cpt_panel_groups_cpts_icds WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    deleteBygroupCPTIds: function (Ids) {
        return {
            text: "DELETE FROM template_cpt_panel_groups_cpts_icds WHERE template_cpt_panel_groups_cpt_id IN ($1) RETURNING *",
            values: [Ids]
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
            text: "UPDATE template_cpt_panel_groups_cpts_icds SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM template_cpt_panel_groups_cpts_icds",
            values: []
        };
    },
};
