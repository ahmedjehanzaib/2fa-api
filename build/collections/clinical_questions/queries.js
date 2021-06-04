"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionOptionsQueries = exports.questionQueries = void 0;
exports.questionQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO clinical_questions(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT cq.*, json_agg(row_to_json(cqo.*)) as options  FROM clinical_questions cq \n            left join clinical_question_options cqo \n            on cq.id = cqo.clinical_question_id WHERE cq.id = $1 group by cq.id",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM clinical_questions WHERE id = $1 RETURNING *",
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
            text: "UPDATE clinical_questions SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT cq.*, json_agg(row_to_json(cqo.*)) as options  FROM clinical_questions cq \n            left join clinical_question_options cqo \n            on cq.id = cqo.clinical_question_id group by cq.id",
            values: []
        };
    },
};
exports.questionOptionsQueries = {
    create: function (data) {
        console.log(data);
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO clinical_question_options(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT * FROM clinical_question_options WHERE id = $1",
            values: [Id]
        };
    },
    findByQuestionId: function (Id) {
        return {
            text: "SELECT * FROM clinical_question_options WHERE clinical_question_id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM clinical_question_options WHERE id = $1 RETURNING *",
            values: [Id]
        };
    },
    deleteByQuestionId: function (Id) {
        return {
            text: "DELETE FROM clinical_question_options WHERE clinical_question_id = $1 RETURNING *",
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
            text: "UPDATE clinical_question_options SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findAll: function () {
        return {
            text: "SELECT * FROM clinical_question_options",
            values: []
        };
    },
};
