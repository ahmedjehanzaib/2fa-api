"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionGroupToQuestionQueries = exports.questionGroupQueries = void 0;
exports.questionGroupQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO clinical_question_groups(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT cq.*, json_agg(cqo.clinical_question_id) as questions  FROM clinical_question_groups cq \n            left join clinical_question_group_to_clinical_question cqo \n            on cq.id = cqo.clinical_question_group_id WHERE cq.id = $1 group by cq.id",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM clinical_question_groups WHERE id = $1 RETURNING *",
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
            text: "UPDATE clinical_question_groups SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT cq.*, json_agg(cqo.clinical_question_id) as questions  FROM clinical_question_groups cq \n            left join clinical_question_group_to_clinical_question cqo \n            on cq.id = cqo.clinical_question_group_id group by cq.id\n            ",
            values: []
        };
    },
};
exports.questionGroupToQuestionQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO clinical_question_group_to_clinical_question(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT * FROM clinical_question_group_to_clinical_question WHERE id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM clinical_question_group_to_clinical_question WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    deleteByGroupId: function (Id) {
        return {
            text: "DELETE FROM clinical_question_group_to_clinical_question WHERE clinical_question_group_id = $1 RETURNING *",
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
            text: "UPDATE clinical_question_group_to_clinical_question SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM clinical_question_group_to_clinical_question",
            values: []
        };
    },
};
