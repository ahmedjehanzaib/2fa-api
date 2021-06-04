"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceCPTFacade = void 0;
var tslib_1 = require("tslib");
var queries_1 = require("./queries");
var databases_1 = require("../../databases");
exports.practiceCPTFacade = {
    create: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var modifiers, icds, rows, modifiers_1, modifiers_1_1, modifier, inserted, e_1_1, icds_1, icds_1_1, icd, inserted, e_2_1, err_1;
        var e_1, _a, e_2, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    modifiers = data.modifiers, icds = data.icds;
                    delete data.modifiers;
                    delete data.icds;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 21, , 23]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _c.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceCPTQueries.create(data))];
                case 3:
                    rows = (_c.sent()).rows;
                    rows[0].modifiers = [];
                    rows[0].icds = [];
                    if (!modifiers) return [3, 11];
                    _c.label = 4;
                case 4:
                    _c.trys.push([4, 9, 10, 11]);
                    modifiers_1 = tslib_1.__values(modifiers), modifiers_1_1 = modifiers_1.next();
                    _c.label = 5;
                case 5:
                    if (!!modifiers_1_1.done) return [3, 8];
                    modifier = modifiers_1_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.CPTToModifierQueries.create(tslib_1.__assign({ cpt_id: rows[0].id }, modifier)))];
                case 6:
                    inserted = (_c.sent()).rows;
                    rows[0].modifiers.push(inserted[0]);
                    _c.label = 7;
                case 7:
                    modifiers_1_1 = modifiers_1.next();
                    return [3, 5];
                case 8: return [3, 11];
                case 9:
                    e_1_1 = _c.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 11];
                case 10:
                    try {
                        if (modifiers_1_1 && !modifiers_1_1.done && (_a = modifiers_1.return)) _a.call(modifiers_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 11:
                    if (!icds) return [3, 19];
                    _c.label = 12;
                case 12:
                    _c.trys.push([12, 17, 18, 19]);
                    icds_1 = tslib_1.__values(icds), icds_1_1 = icds_1.next();
                    _c.label = 13;
                case 13:
                    if (!!icds_1_1.done) return [3, 16];
                    icd = icds_1_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.CPTToICDQueries.create(tslib_1.__assign({ cpt_id: rows[0].id }, icd)))];
                case 14:
                    inserted = (_c.sent()).rows;
                    rows[0].icds.push(inserted[0]);
                    _c.label = 15;
                case 15:
                    icds_1_1 = icds_1.next();
                    return [3, 13];
                case 16: return [3, 19];
                case 17:
                    e_2_1 = _c.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 19];
                case 18:
                    try {
                        if (icds_1_1 && !icds_1_1.done && (_b = icds_1.return)) _b.call(icds_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7];
                case 19: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 20:
                    _c.sent();
                    return [2, rows];
                case 21:
                    err_1 = _c.sent();
                    console.error('Error while creating CPT', err_1);
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 22:
                    _c.sent();
                    throw err_1;
                case 23: return [2];
            }
        });
    }); },
    findById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows, modifiers, icds;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practiceCPTQueries.findById(Id))];
                case 1:
                    rows = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.CPTToModifierQueries.findByCPTId(Id))];
                case 2:
                    modifiers = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.CPTToICDQueries.findByCPTId(Id))];
                case 3:
                    icds = (_a.sent()).rows;
                    rows[0].modifiers = modifiers;
                    rows[0].icds = icds;
                    return [2, rows];
            }
        });
    }); },
    deleteById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.CPTToModifierQueries.deleteByCPTId(Id))];
                case 1:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.CPTToICDQueries.deleteByCPTId(Id))];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceCPTQueries.deleteById(Id))];
                case 3:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); },
    updateById: function (Id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var modifiers, icds, rows, modifiers_2, modifiers_2_1, modifier, inserted, e_3_1, icds_2, icds_2_1, icd, inserted, e_4_1, err_2;
        var e_3, _a, e_4, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    modifiers = data.modifiers, icds = data.icds;
                    delete data.modifiers;
                    delete data.icds;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 23, , 25]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _c.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.CPTToModifierQueries.deleteByCPTId(Id))];
                case 3:
                    _c.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.CPTToICDQueries.deleteByCPTId(Id))];
                case 4:
                    _c.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceCPTQueries.updateById(Id, data))];
                case 5:
                    rows = (_c.sent()).rows;
                    rows[0].modifiers = [];
                    rows[0].icds = [];
                    if (!modifiers) return [3, 13];
                    _c.label = 6;
                case 6:
                    _c.trys.push([6, 11, 12, 13]);
                    modifiers_2 = tslib_1.__values(modifiers), modifiers_2_1 = modifiers_2.next();
                    _c.label = 7;
                case 7:
                    if (!!modifiers_2_1.done) return [3, 10];
                    modifier = modifiers_2_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.CPTToModifierQueries.create(tslib_1.__assign({ cpt_id: Id }, modifier)))];
                case 8:
                    inserted = (_c.sent()).rows;
                    rows[0].modifiers.push(inserted[0]);
                    _c.label = 9;
                case 9:
                    modifiers_2_1 = modifiers_2.next();
                    return [3, 7];
                case 10: return [3, 13];
                case 11:
                    e_3_1 = _c.sent();
                    e_3 = { error: e_3_1 };
                    return [3, 13];
                case 12:
                    try {
                        if (modifiers_2_1 && !modifiers_2_1.done && (_a = modifiers_2.return)) _a.call(modifiers_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7];
                case 13:
                    if (!icds) return [3, 21];
                    _c.label = 14;
                case 14:
                    _c.trys.push([14, 19, 20, 21]);
                    icds_2 = tslib_1.__values(icds), icds_2_1 = icds_2.next();
                    _c.label = 15;
                case 15:
                    if (!!icds_2_1.done) return [3, 18];
                    icd = icds_2_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.CPTToICDQueries.create(tslib_1.__assign({ cpt_id: Id }, icd)))];
                case 16:
                    inserted = (_c.sent()).rows;
                    rows[0].icds.push(inserted[0]);
                    _c.label = 17;
                case 17:
                    icds_2_1 = icds_2.next();
                    return [3, 15];
                case 18: return [3, 21];
                case 19:
                    e_4_1 = _c.sent();
                    e_4 = { error: e_4_1 };
                    return [3, 21];
                case 20:
                    try {
                        if (icds_2_1 && !icds_2_1.done && (_b = icds_2.return)) _b.call(icds_2);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7];
                case 21: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 22:
                    _c.sent();
                    return [2, rows];
                case 23:
                    err_2 = _c.sent();
                    console.log('Error while updating practice CPT');
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 24:
                    _c.sent();
                    throw err_2;
                case 25: return [2];
            }
        });
    }); },
    findAll: function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practiceCPTQueries.findAll())];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); }
};
