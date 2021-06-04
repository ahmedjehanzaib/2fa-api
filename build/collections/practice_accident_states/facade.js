"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceAccidentStateFacade = void 0;
var tslib_1 = require("tslib");
var queries_1 = require("./queries");
var databases_1 = require("../../databases");
exports.practiceAccidentStateFacade = {
    create: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practiceAccidentStateQueries.create(data))];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); },
    findById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practiceAccidentStateQueries.findById(Id))];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); },
    deleteById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practiceAccidentStateQueries.deleteById(Id))];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); },
    updateById: function (Id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practiceAccidentStateQueries.updateById(Id, data))];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); },
    findByPracticeId: function (practiceId) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practiceAccidentStateQueries.findByPracticeId(practiceId))];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); }
};
