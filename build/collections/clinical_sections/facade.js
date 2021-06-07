"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionFacade = void 0;
var tslib_1 = require("tslib");
var queries_1 = require("./queries");
var databases_1 = require("../../databases");
exports.sectionFacade = {
    create: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var question_groups, rows, question_groups_1, question_groups_1_1, group, inserted, e_1_1, err_1;
        var e_1, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    question_groups = data.question_groups;
                    delete data.question_groups;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 13, , 15]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _b.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.sectionQueries.create(data))];
                case 3:
                    rows = (_b.sent()).rows;
                    rows[0].question_groups = [];
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 9, 10, 11]);
                    question_groups_1 = tslib_1.__values(question_groups), question_groups_1_1 = question_groups_1.next();
                    _b.label = 5;
                case 5:
                    if (!!question_groups_1_1.done) return [3, 8];
                    group = question_groups_1_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.sectionToQuestionGroupQueries
                            .create({ clinical_question_group_id: group, clinical_section_id: rows[0].id }))];
                case 6:
                    inserted = (_b.sent()).rows;
                    rows[0].question_groups.push(inserted[0].clinical_question_group_id);
                    _b.label = 7;
                case 7:
                    question_groups_1_1 = question_groups_1.next();
                    return [3, 5];
                case 8: return [3, 11];
                case 9:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 11];
                case 10:
                    try {
                        if (question_groups_1_1 && !question_groups_1_1.done && (_a = question_groups_1.return)) _a.call(question_groups_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 11: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 12:
                    _b.sent();
                    return [2, rows];
                case 13:
                    err_1 = _b.sent();
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 14:
                    _b.sent();
                    throw err_1;
                case 15: return [2];
            }
        });
    }); },
    findById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.sectionQueries.findById(Id))];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); },
    deleteById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 7]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 1:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.sectionToQuestionGroupQueries.deleteBySectionId(Id))];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.sectionQueries.deleteById(Id))];
                case 3:
                    rows = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 4:
                    _a.sent();
                    return [2, rows];
                case 5:
                    err_2 = _a.sent();
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 6:
                    _a.sent();
                    throw err_2;
                case 7: return [2];
            }
        });
    }); },
    updateById: function (Id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var question_groups, rows, question_groups_2, question_groups_2_1, group, inserted, e_2_1, err_3;
        var e_2, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    question_groups = data.question_groups;
                    delete data.question_groups;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 14, , 16]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _b.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.sectionToQuestionGroupQueries.deleteBySectionId(Id))];
                case 3:
                    _b.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.sectionQueries.updateById(Id, data))];
                case 4:
                    rows = (_b.sent()).rows;
                    rows[0].question_groups = [];
                    _b.label = 5;
                case 5:
                    _b.trys.push([5, 10, 11, 12]);
                    question_groups_2 = tslib_1.__values(question_groups), question_groups_2_1 = question_groups_2.next();
                    _b.label = 6;
                case 6:
                    if (!!question_groups_2_1.done) return [3, 9];
                    group = question_groups_2_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.sectionToQuestionGroupQueries
                            .create({ clinical_question_group_id: group, clinical_section_id: rows[0].id }))];
                case 7:
                    inserted = (_b.sent()).rows;
                    rows[0].question_groups.push(inserted[0].clinical_question_group_id);
                    _b.label = 8;
                case 8:
                    question_groups_2_1 = question_groups_2.next();
                    return [3, 6];
                case 9: return [3, 12];
                case 10:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 12];
                case 11:
                    try {
                        if (question_groups_2_1 && !question_groups_2_1.done && (_a = question_groups_2.return)) _a.call(question_groups_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7];
                case 12: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 13:
                    _b.sent();
                    return [2, rows];
                case 14:
                    err_3 = _b.sent();
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 15:
                    _b.sent();
                    throw err_3;
                case 16: return [2];
            }
        });
    }); },
    findAll: function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.sectionQueries.findAll())];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); }
};
