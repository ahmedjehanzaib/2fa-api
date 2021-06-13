"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientLetterFacade = void 0;
var tslib_1 = require("tslib");
var uuid_1 = require("uuid");
var queries_1 = require("./queries");
var databases_1 = require("../../databases");
exports.patientLetterFacade = {
    create: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var user_fields, rows, user_fields_1, user_fields_1_1, _a, new_user_field, insert_user_field, inserted, e_1_1, err_1;
        var e_1, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    user_fields = data.user_fields;
                    delete data.user_fields;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 13, , 15]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _c.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.patientLetterQueries.create(data))];
                case 3:
                    rows = (_c.sent()).rows;
                    rows[0].user_fields = [];
                    _c.label = 4;
                case 4:
                    _c.trys.push([4, 9, 10, 11]);
                    user_fields_1 = tslib_1.__values(user_fields), user_fields_1_1 = user_fields_1.next();
                    _c.label = 5;
                case 5:
                    if (!!user_fields_1_1.done) return [3, 8];
                    _a = user_fields_1_1.value, new_user_field = _a.new_user_field, insert_user_field = _a.insert_user_field;
                    return [4, databases_1.PG_CLIENT.query(queries_1.letterFieldsQueries
                            .create({ id: uuid_1.v4(), practice_patient_letter_id: rows[0].id, new_user_field: new_user_field, insert_user_field: insert_user_field }))];
                case 6:
                    inserted = (_c.sent()).rows;
                    rows[0].user_fields.push(inserted[0]);
                    _c.label = 7;
                case 7:
                    user_fields_1_1 = user_fields_1.next();
                    return [3, 5];
                case 8: return [3, 11];
                case 9:
                    e_1_1 = _c.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 11];
                case 10:
                    try {
                        if (user_fields_1_1 && !user_fields_1_1.done && (_b = user_fields_1.return)) _b.call(user_fields_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 11: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 12:
                    _c.sent();
                    return [2, rows];
                case 13:
                    err_1 = _c.sent();
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 14:
                    _c.sent();
                    throw err_1;
                case 15: return [2];
            }
        });
    }); },
    findById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.patientLetterQueries.findById(Id))];
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
                    _a.trys.push([0, 3, , 4]);
                    return [4, databases_1.PG_CLIENT.query(queries_1.letterFieldsQueries.deleteByLetterId(Id))];
                case 1:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.patientLetterQueries.deleteById(Id))];
                case 2:
                    rows = (_a.sent()).rows;
                    return [2, rows];
                case 3:
                    err_2 = _a.sent();
                    throw err_2;
                case 4: return [2];
            }
        });
    }); },
    updateById: function (Id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var user_fields, rows, user_fields_2, user_fields_2_1, _a, new_user_field, insert_user_field, inserted, e_2_1, err_3;
        var e_2, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    user_fields = data.user_fields;
                    delete data.user_fields;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 12, , 13]);
                    return [4, databases_1.PG_CLIENT.query(queries_1.letterFieldsQueries.deleteByLetterId(Id))];
                case 2:
                    _c.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.patientLetterQueries.updateById(Id, data))];
                case 3:
                    rows = (_c.sent()).rows;
                    rows[0].user_fields = [];
                    _c.label = 4;
                case 4:
                    _c.trys.push([4, 9, 10, 11]);
                    user_fields_2 = tslib_1.__values(user_fields), user_fields_2_1 = user_fields_2.next();
                    _c.label = 5;
                case 5:
                    if (!!user_fields_2_1.done) return [3, 8];
                    _a = user_fields_2_1.value, new_user_field = _a.new_user_field, insert_user_field = _a.insert_user_field;
                    return [4, databases_1.PG_CLIENT.query(queries_1.letterFieldsQueries
                            .create({ id: uuid_1.v4(), practice_patient_letter_id: rows[0].id, new_user_field: new_user_field, insert_user_field: insert_user_field }))];
                case 6:
                    inserted = (_c.sent()).rows;
                    rows[0].user_fields.push(inserted[0]);
                    _c.label = 7;
                case 7:
                    user_fields_2_1 = user_fields_2.next();
                    return [3, 5];
                case 8: return [3, 11];
                case 9:
                    e_2_1 = _c.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 10:
                    try {
                        if (user_fields_2_1 && !user_fields_2_1.done && (_b = user_fields_2.return)) _b.call(user_fields_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7];
                case 11: return [2, rows];
                case 12:
                    err_3 = _c.sent();
                    throw err_3;
                case 13: return [2];
            }
        });
    }); },
    findAll: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.patientLetterQueries.findAll(Id))];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); }
};
