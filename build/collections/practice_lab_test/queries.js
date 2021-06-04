"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceLabTestQueries = void 0;
exports.practiceLabTestQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_lab_tests(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT par.*, p.name as practice_name\n            FROM practice_lab_tests par \n            left join practices p \n            on par.practice_id = p.id WHERE par.id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM practice_lab_tests WHERE id = $1 RETURNING *",
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
            text: "UPDATE practice_lab_tests SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findByPracticeId: function (practiceId) {
        return {
            text: "SELECT par.*, p.name as practice_name\n            FROM practice_lab_tests par \n            left join practices p \n            on par.practice_id = p.id WHERE par.practice_id = $1",
            values: [practiceId]
        };
    },
};
