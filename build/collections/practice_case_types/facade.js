"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceCaseTypeFacade = void 0;
var tslib_1 = require("tslib");
var queries_1 = require("./queries");
var databases_1 = require("../../databases");
exports.practiceCaseTypeFacade = {
    create: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practiceCaseTypeQueries.create(data))];
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
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practiceCaseTypeQueries.findById(Id))];
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
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practiceCaseTypeQueries.deleteById(Id))];
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
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practiceCaseTypeQueries.updateById(Id, data))];
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
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practiceCaseTypeQueries.findByPracticeId(practiceId))];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); }
};
