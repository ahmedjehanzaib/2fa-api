"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceRoomQueries = void 0;
exports.practiceRoomQueries = {
    create: function (data) {
        var columns = Object.keys(data);
        var indices = [];
        var values = columns.map(function (k, i) {
            indices.push("$" + (i + 1));
            return data[k];
        });
        return {
            text: "INSERT INTO practice_rooms(" + columns + ")  VALUES (" + indices + ") RETURNING *",
            values: values
        };
    },
    findById: function (Id) {
        return {
            text: "SELECT par.*, p.name as practice_name\n            FROM practice_rooms par \n            left join practices p \n            on par.practice_id = p.id WHERE par.id = $1",
            values: [Id]
        };
    },
    deleteById: function (Id) {
        return {
            text: "DELETE FROM practice_rooms WHERE id = $1 RETURNING *",
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
            text: "UPDATE practice_rooms SET " + setQueryPart + " WHERE id = '" + Id + "' RETURNING *",
            values: Object.keys(data).map(function (key) { return data[key]; })
        };
    },
    findByPracticeId: function (practiceId) {
        return {
            text: "SELECT par.*, p.name as practice_name\n            FROM practice_rooms par \n            left join practices p \n            on par.practice_id = p.id WHERE par.practice_id = $1",
            values: [practiceId]
        };
    },
};
