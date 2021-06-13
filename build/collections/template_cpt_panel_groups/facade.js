"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPTPanelGroupFacade = void 0;
var tslib_1 = require("tslib");
var uuid_1 = require("uuid");
var queries_1 = require("./queries");
var databases_1 = require("../../databases");
exports.CPTPanelGroupFacade = {
    create: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var cpt_groups, rows, cpt_groups_1, cpt_groups_1_1, _a, cpt, icds, modifiers, insertedCPT, groups, template_cpt_panel_groups_cpt_id, icds_1, icds_1_1, icdId, inserted, e_1_1, modifiers_1, modifiers_1_1, modifierId, inserted, e_2_1, e_3_1, err_1;
        var e_3, _b;
        var e_1, _c, e_2, _d;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    cpt_groups = data.cpt_groups;
                    delete data.cpt_groups;
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 38, , 40]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _e.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.CPTPanelGroupQueries.create(data))];
                case 3:
                    rows = (_e.sent()).rows;
                    rows[0].cpt_groups = [];
                    _e.label = 4;
                case 4:
                    _e.trys.push([4, 34, 35, 36]);
                    cpt_groups_1 = tslib_1.__values(cpt_groups), cpt_groups_1_1 = cpt_groups_1.next();
                    _e.label = 5;
                case 5:
                    if (!!cpt_groups_1_1.done) return [3, 33];
                    _a = cpt_groups_1_1.value, cpt = _a.cpt, icds = _a.icds, modifiers = _a.modifiers;
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsQueries
                            .create({ id: uuid_1.v4(), template_cpt_panel_group_id: data.id, practice_cpt_id: cpt }))];
                case 6:
                    insertedCPT = (_e.sent()).rows;
                    console.log('inserted', insertedCPT);
                    groups = {
                        cpt: insertedCPT[0].practice_cpt_id,
                        icds: [],
                        modifiers: []
                    };
                    template_cpt_panel_groups_cpt_id = insertedCPT[0].id;
                    _e.label = 7;
                case 7:
                    _e.trys.push([7, 13, 14, 19]);
                    icds_1 = (e_1 = void 0, tslib_1.__asyncValues(icds));
                    _e.label = 8;
                case 8: return [4, icds_1.next()];
                case 9:
                    if (!(icds_1_1 = _e.sent(), !icds_1_1.done)) return [3, 12];
                    icdId = icds_1_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsICDs
                            .create({ id: uuid_1.v4(), template_cpt_panel_groups_cpt_id: template_cpt_panel_groups_cpt_id, practice_icd_id: icdId }))];
                case 10:
                    inserted = (_e.sent()).rows;
                    console.log('inserted1', inserted);
                    groups.icds.push(inserted[0].practice_icd_id);
                    _e.label = 11;
                case 11: return [3, 8];
                case 12: return [3, 19];
                case 13:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 19];
                case 14:
                    _e.trys.push([14, , 17, 18]);
                    if (!(icds_1_1 && !icds_1_1.done && (_c = icds_1.return))) return [3, 16];
                    return [4, _c.call(icds_1)];
                case 15:
                    _e.sent();
                    _e.label = 16;
                case 16: return [3, 18];
                case 17:
                    if (e_1) throw e_1.error;
                    return [7];
                case 18: return [7];
                case 19:
                    _e.trys.push([19, 25, 26, 31]);
                    modifiers_1 = (e_2 = void 0, tslib_1.__asyncValues(modifiers));
                    _e.label = 20;
                case 20: return [4, modifiers_1.next()];
                case 21:
                    if (!(modifiers_1_1 = _e.sent(), !modifiers_1_1.done)) return [3, 24];
                    modifierId = modifiers_1_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsModifiers
                            .create({ id: uuid_1.v4(), template_cpt_panel_groups_cpt_id: template_cpt_panel_groups_cpt_id, practice_modifier_id: modifierId }))];
                case 22:
                    inserted = (_e.sent()).rows;
                    console.log('inserted2', inserted);
                    groups.modifiers.push(inserted[0].practice_modifier_id);
                    _e.label = 23;
                case 23: return [3, 20];
                case 24: return [3, 31];
                case 25:
                    e_2_1 = _e.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 31];
                case 26:
                    _e.trys.push([26, , 29, 30]);
                    if (!(modifiers_1_1 && !modifiers_1_1.done && (_d = modifiers_1.return))) return [3, 28];
                    return [4, _d.call(modifiers_1)];
                case 27:
                    _e.sent();
                    _e.label = 28;
                case 28: return [3, 30];
                case 29:
                    if (e_2) throw e_2.error;
                    return [7];
                case 30: return [7];
                case 31:
                    rows[0].cpt_groups.push(cpt_groups);
                    _e.label = 32;
                case 32:
                    cpt_groups_1_1 = cpt_groups_1.next();
                    return [3, 5];
                case 33: return [3, 36];
                case 34:
                    e_3_1 = _e.sent();
                    e_3 = { error: e_3_1 };
                    return [3, 36];
                case 35:
                    try {
                        if (cpt_groups_1_1 && !cpt_groups_1_1.done && (_b = cpt_groups_1.return)) _b.call(cpt_groups_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7];
                case 36: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 37:
                    _e.sent();
                    return [2, rows];
                case 38:
                    err_1 = _e.sent();
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 39:
                    _e.sent();
                    throw err_1;
                case 40: return [2];
            }
        });
    }); },
    findById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows, cpts, cpts_1, cpts_1_1, _a, id, practice_cpt_id, icds, modfiers, group, e_4_1;
        var e_4, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.CPTPanelGroupQueries.findById(Id))];
                case 1:
                    rows = (_c.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsQueries.findByGroupId(Id))];
                case 2:
                    cpts = (_c.sent()).rows;
                    rows[0].cpt_groups = [];
                    _c.label = 3;
                case 3:
                    _c.trys.push([3, 9, 10, 11]);
                    cpts_1 = tslib_1.__values(cpts), cpts_1_1 = cpts_1.next();
                    _c.label = 4;
                case 4:
                    if (!!cpts_1_1.done) return [3, 8];
                    _a = cpts_1_1.value, id = _a.id, practice_cpt_id = _a.practice_cpt_id;
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsICDs.findBygroupCPTId(id))];
                case 5:
                    icds = (_c.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsModifiers.findBygroupCPTId(id))];
                case 6:
                    modfiers = (_c.sent()).rows;
                    group = {
                        cpt: practice_cpt_id,
                        icds: icds.map(function (_a) {
                            var practice_icd_id = _a.practice_icd_id;
                            return practice_icd_id;
                        }),
                        modifiers: modfiers.map(function (_a) {
                            var practice_modifier_id = _a.practice_modifier_id;
                            return practice_modifier_id;
                        })
                    };
                    rows[0].cpt_groups.push(group);
                    _c.label = 7;
                case 7:
                    cpts_1_1 = cpts_1.next();
                    return [3, 4];
                case 8: return [3, 11];
                case 9:
                    e_4_1 = _c.sent();
                    e_4 = { error: e_4_1 };
                    return [3, 11];
                case 10:
                    try {
                        if (cpts_1_1 && !cpts_1_1.done && (_b = cpts_1.return)) _b.call(cpts_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7];
                case 11: return [2, rows];
            }
        });
    }); },
    deleteById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var found, ids, rows, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 8, , 10]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 1:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsQueries.findByGroupId(Id))];
                case 2:
                    found = (_a.sent()).rows;
                    ids = found.map(function (_a) {
                        var id = _a.id;
                        return id;
                    }).join(',');
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsICDs.deleteBygroupCPTIds(ids))];
                case 3:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsModifiers.deleteBygroupCPTIds(ids))];
                case 4:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsQueries.deleteByGroupId(Id))];
                case 5:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.CPTPanelGroupQueries.deleteById(Id))];
                case 6:
                    rows = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 7:
                    _a.sent();
                    return [2, rows];
                case 8:
                    err_2 = _a.sent();
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 9:
                    _a.sent();
                    throw err_2;
                case 10: return [2];
            }
        });
    }); },
    updateById: function (Id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var cpt_groups, found, ids, rows, cpt_groups_2, cpt_groups_2_1, _a, cpt, icds, modifiers, insertedCPT, groups, template_cpt_panel_groups_cpt_id, icds_2, icds_2_1, icdId, inserted, e_5_1, modifiers_2, modifiers_2_1, modifierId, inserted, e_6_1, e_7_1, err_3;
        var e_7, _b;
        var e_5, _c, e_6, _d;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    cpt_groups = data.cpt_groups;
                    delete data.cpt_groups;
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 42, , 44]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _e.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsQueries.findByGroupId(Id))];
                case 3:
                    found = (_e.sent()).rows;
                    ids = found.map(function (_a) {
                        var id = _a.id;
                        return id;
                    }).join(',');
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsICDs.deleteBygroupCPTIds(ids))];
                case 4:
                    _e.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsModifiers.deleteBygroupCPTIds(ids))];
                case 5:
                    _e.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsQueries.deleteByGroupId(Id))];
                case 6:
                    _e.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.CPTPanelGroupQueries.updateById(Id, data))];
                case 7:
                    rows = (_e.sent()).rows;
                    rows[0].cpt_groups = [];
                    _e.label = 8;
                case 8:
                    _e.trys.push([8, 38, 39, 40]);
                    cpt_groups_2 = tslib_1.__values(cpt_groups), cpt_groups_2_1 = cpt_groups_2.next();
                    _e.label = 9;
                case 9:
                    if (!!cpt_groups_2_1.done) return [3, 37];
                    _a = cpt_groups_2_1.value, cpt = _a.cpt, icds = _a.icds, modifiers = _a.modifiers;
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsQueries
                            .create({ id: uuid_1.v4(), template_cpt_panel_group_id: Id, practice_cpt_id: cpt }))];
                case 10:
                    insertedCPT = (_e.sent()).rows;
                    groups = {
                        cpt: insertedCPT[0].practice_cpt_id,
                        icds: [],
                        modifiers: []
                    };
                    template_cpt_panel_groups_cpt_id = insertedCPT[0].id;
                    _e.label = 11;
                case 11:
                    _e.trys.push([11, 17, 18, 23]);
                    icds_2 = (e_5 = void 0, tslib_1.__asyncValues(icds));
                    _e.label = 12;
                case 12: return [4, icds_2.next()];
                case 13:
                    if (!(icds_2_1 = _e.sent(), !icds_2_1.done)) return [3, 16];
                    icdId = icds_2_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsICDs
                            .create({ id: uuid_1.v4(), template_cpt_panel_groups_cpt_id: template_cpt_panel_groups_cpt_id, practice_icd_id: icdId }))];
                case 14:
                    inserted = (_e.sent()).rows;
                    groups.icds.push(inserted[0].practice_icd_id);
                    _e.label = 15;
                case 15: return [3, 12];
                case 16: return [3, 23];
                case 17:
                    e_5_1 = _e.sent();
                    e_5 = { error: e_5_1 };
                    return [3, 23];
                case 18:
                    _e.trys.push([18, , 21, 22]);
                    if (!(icds_2_1 && !icds_2_1.done && (_c = icds_2.return))) return [3, 20];
                    return [4, _c.call(icds_2)];
                case 19:
                    _e.sent();
                    _e.label = 20;
                case 20: return [3, 22];
                case 21:
                    if (e_5) throw e_5.error;
                    return [7];
                case 22: return [7];
                case 23:
                    _e.trys.push([23, 29, 30, 35]);
                    modifiers_2 = (e_6 = void 0, tslib_1.__asyncValues(modifiers));
                    _e.label = 24;
                case 24: return [4, modifiers_2.next()];
                case 25:
                    if (!(modifiers_2_1 = _e.sent(), !modifiers_2_1.done)) return [3, 28];
                    modifierId = modifiers_2_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.panelGroupCPTsModifiers
                            .create({ id: uuid_1.v4(), template_cpt_panel_groups_cpt_id: template_cpt_panel_groups_cpt_id, practice_modifier_id: modifierId }))];
                case 26:
                    inserted = (_e.sent()).rows;
                    groups.modifiers.push(inserted[0].practice_modifier_id);
                    _e.label = 27;
                case 27: return [3, 24];
                case 28: return [3, 35];
                case 29:
                    e_6_1 = _e.sent();
                    e_6 = { error: e_6_1 };
                    return [3, 35];
                case 30:
                    _e.trys.push([30, , 33, 34]);
                    if (!(modifiers_2_1 && !modifiers_2_1.done && (_d = modifiers_2.return))) return [3, 32];
                    return [4, _d.call(modifiers_2)];
                case 31:
                    _e.sent();
                    _e.label = 32;
                case 32: return [3, 34];
                case 33:
                    if (e_6) throw e_6.error;
                    return [7];
                case 34: return [7];
                case 35:
                    rows[0].cpt_groups.push(groups);
                    _e.label = 36;
                case 36:
                    cpt_groups_2_1 = cpt_groups_2.next();
                    return [3, 9];
                case 37: return [3, 40];
                case 38:
                    e_7_1 = _e.sent();
                    e_7 = { error: e_7_1 };
                    return [3, 40];
                case 39:
                    try {
                        if (cpt_groups_2_1 && !cpt_groups_2_1.done && (_b = cpt_groups_2.return)) _b.call(cpt_groups_2);
                    }
                    finally { if (e_7) throw e_7.error; }
                    return [7];
                case 40: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 41:
                    _e.sent();
                    return [2, rows];
                case 42:
                    err_3 = _e.sent();
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 43:
                    _e.sent();
                    throw err_3;
                case 44: return [2];
            }
        });
    }); },
    findAll: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.CPTPanelGroupQueries.findByPractice(Id))];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); }
};
