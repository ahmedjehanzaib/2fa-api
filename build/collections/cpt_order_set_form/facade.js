"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPTOrderFormFacade = void 0;
var tslib_1 = require("tslib");
var uuid_1 = require("uuid");
var queries_1 = require("./queries");
var databases_1 = require("../../databases");
exports.CPTOrderFormFacade = {
    create: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var category_cpts, rows, category_cpts_1, category_cpts_1_1, cat, cpts, categoryId, category, cpts_1, cpts_1_1, cptId, inserted, e_1_1, e_2_1, err_1;
        var e_2, _a;
        var e_1, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    category_cpts = data.category_cpts;
                    delete data.category_cpts;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 26, , 28]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _c.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.CPTOrderFormQueries.create(data))];
                case 3:
                    rows = (_c.sent()).rows;
                    rows[0].category_cpts = [];
                    _c.label = 4;
                case 4:
                    _c.trys.push([4, 22, 23, 24]);
                    category_cpts_1 = tslib_1.__values(category_cpts), category_cpts_1_1 = category_cpts_1.next();
                    _c.label = 5;
                case 5:
                    if (!!category_cpts_1_1.done) return [3, 21];
                    cat = category_cpts_1_1.value;
                    cpts = cat.cpts, categoryId = cat.categoryId;
                    category = {
                        categoryId: categoryId,
                        cpts: []
                    };
                    _c.label = 6;
                case 6:
                    _c.trys.push([6, 12, 13, 18]);
                    cpts_1 = (e_1 = void 0, tslib_1.__asyncValues(cpts));
                    _c.label = 7;
                case 7: return [4, cpts_1.next()];
                case 8:
                    if (!(cpts_1_1 = _c.sent(), !cpts_1_1.done)) return [3, 11];
                    cptId = cpts_1_1.value;
                    console.log({ cpt_order_set_form_category_id: categoryId, practice_cpt_id: cptId });
                    return [4, databases_1.PG_CLIENT.query(queries_1.cptOrderSetFormCategoriesCPTs
                            .create({ id: uuid_1.v4(), cpt_order_set_form_category_id: categoryId, practice_cpt_id: cptId }))];
                case 9:
                    inserted = (_c.sent()).rows;
                    category.cpts.push(inserted[0].practice_cpt_id);
                    _c.label = 10;
                case 10: return [3, 7];
                case 11: return [3, 18];
                case 12:
                    e_1_1 = _c.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 18];
                case 13:
                    _c.trys.push([13, , 16, 17]);
                    if (!(cpts_1_1 && !cpts_1_1.done && (_b = cpts_1.return))) return [3, 15];
                    return [4, _b.call(cpts_1)];
                case 14:
                    _c.sent();
                    _c.label = 15;
                case 15: return [3, 17];
                case 16:
                    if (e_1) throw e_1.error;
                    return [7];
                case 17: return [7];
                case 18: return [4, databases_1.PG_CLIENT.query(queries_1.cptOrderSetFormToCategories
                        .create({ cpt_order_set_form_category_id: categoryId, template_cpt_order_set_form_id: rows[0].id }))];
                case 19:
                    _c.sent();
                    rows[0].category_cpts.push(category);
                    _c.label = 20;
                case 20:
                    category_cpts_1_1 = category_cpts_1.next();
                    return [3, 5];
                case 21: return [3, 24];
                case 22:
                    e_2_1 = _c.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 24];
                case 23:
                    try {
                        if (category_cpts_1_1 && !category_cpts_1_1.done && (_a = category_cpts_1.return)) _a.call(category_cpts_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7];
                case 24: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 25:
                    _c.sent();
                    return [2, rows];
                case 26:
                    err_1 = _c.sent();
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 27:
                    _c.sent();
                    throw err_1;
                case 28: return [2];
            }
        });
    }); },
    findById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows, categories, categories_1, categories_1_1, cpt_order_set_form_category_id, cpts, e_3_1;
        var e_3, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.CPTOrderFormQueries.findById(Id))];
                case 1:
                    rows = (_b.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.cptOrderSetFormToCategories.findByFormId(Id))];
                case 2:
                    categories = (_b.sent()).rows;
                    rows[0].category_cpts = [];
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 8, 9, 10]);
                    categories_1 = tslib_1.__values(categories), categories_1_1 = categories_1.next();
                    _b.label = 4;
                case 4:
                    if (!!categories_1_1.done) return [3, 7];
                    cpt_order_set_form_category_id = categories_1_1.value.cpt_order_set_form_category_id;
                    return [4, databases_1.PG_CLIENT.query(queries_1.cptOrderSetFormCategoriesCPTs.findByCategoryId(cpt_order_set_form_category_id))];
                case 5:
                    cpts = (_b.sent()).rows;
                    rows[0].category_cpts.push({ categoryId: cpt_order_set_form_category_id, cpts: cpts.map(function (_a) {
                            var practice_cpt_id = _a.practice_cpt_id;
                            return practice_cpt_id;
                        }) });
                    _b.label = 6;
                case 6:
                    categories_1_1 = categories_1.next();
                    return [3, 4];
                case 7: return [3, 10];
                case 8:
                    e_3_1 = _b.sent();
                    e_3 = { error: e_3_1 };
                    return [3, 10];
                case 9:
                    try {
                        if (categories_1_1 && !categories_1_1.done && (_a = categories_1.return)) _a.call(categories_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7];
                case 10: return [2, rows];
            }
        });
    }); },
    deleteById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 8]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 1:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.cptOrderSetFormCategoriesCPTs.deleteByFormId(Id))];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.cptOrderSetFormToCategories.deleteByFormId(Id))];
                case 3:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.CPTOrderFormQueries.deleteById(Id))];
                case 4:
                    rows = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 5:
                    _a.sent();
                    return [2, rows];
                case 6:
                    err_2 = _a.sent();
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 7:
                    _a.sent();
                    throw err_2;
                case 8: return [2];
            }
        });
    }); },
    updateById: function (Id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var category_cpts, rows, category_cpts_2, category_cpts_2_1, cat, cpts, categoryId, category, cpts_2, cpts_2_1, cptId, inserted, e_4_1, e_5_1, err_3;
        var e_5, _a;
        var e_4, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    category_cpts = data.category_cpts;
                    delete data.category_cpts;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 27, , 29]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _c.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.CPTOrderFormQueries.updateById(Id, data))];
                case 3:
                    rows = (_c.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.cptOrderSetFormToCategories.deleteByFormId(Id))];
                case 4:
                    _c.sent();
                    rows[0].category_cpts = [];
                    _c.label = 5;
                case 5:
                    _c.trys.push([5, 23, 24, 25]);
                    category_cpts_2 = tslib_1.__values(category_cpts), category_cpts_2_1 = category_cpts_2.next();
                    _c.label = 6;
                case 6:
                    if (!!category_cpts_2_1.done) return [3, 22];
                    cat = category_cpts_2_1.value;
                    cpts = cat.cpts, categoryId = cat.categoryId;
                    category = {
                        categoryId: categoryId,
                        cpts: []
                    };
                    _c.label = 7;
                case 7:
                    _c.trys.push([7, 13, 14, 19]);
                    cpts_2 = (e_4 = void 0, tslib_1.__asyncValues(cpts));
                    _c.label = 8;
                case 8: return [4, cpts_2.next()];
                case 9:
                    if (!(cpts_2_1 = _c.sent(), !cpts_2_1.done)) return [3, 12];
                    cptId = cpts_2_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.cptOrderSetFormCategoriesCPTs
                            .create({ id: uuid_1.v4(), cpt_order_set_form_category_id: categoryId, practice_cpt_id: cptId }))];
                case 10:
                    inserted = (_c.sent()).rows;
                    category.cpts.push(inserted[0].practice_cpt_id);
                    _c.label = 11;
                case 11: return [3, 8];
                case 12: return [3, 19];
                case 13:
                    e_4_1 = _c.sent();
                    e_4 = { error: e_4_1 };
                    return [3, 19];
                case 14:
                    _c.trys.push([14, , 17, 18]);
                    if (!(cpts_2_1 && !cpts_2_1.done && (_b = cpts_2.return))) return [3, 16];
                    return [4, _b.call(cpts_2)];
                case 15:
                    _c.sent();
                    _c.label = 16;
                case 16: return [3, 18];
                case 17:
                    if (e_4) throw e_4.error;
                    return [7];
                case 18: return [7];
                case 19: return [4, databases_1.PG_CLIENT.query(queries_1.cptOrderSetFormToCategories
                        .create({ cpt_order_set_form_category_id: categoryId, template_cpt_order_set_form_id: rows[0].id }))];
                case 20:
                    _c.sent();
                    rows[0].category_cpts.push(category);
                    _c.label = 21;
                case 21:
                    category_cpts_2_1 = category_cpts_2.next();
                    return [3, 6];
                case 22: return [3, 25];
                case 23:
                    e_5_1 = _c.sent();
                    e_5 = { error: e_5_1 };
                    return [3, 25];
                case 24:
                    try {
                        if (category_cpts_2_1 && !category_cpts_2_1.done && (_a = category_cpts_2.return)) _a.call(category_cpts_2);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7];
                case 25: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 26:
                    _c.sent();
                    return [2, rows];
                case 27:
                    err_3 = _c.sent();
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 28:
                    _c.sent();
                    throw err_3;
                case 29: return [2];
            }
        });
    }); },
    findAll: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows, i, categories, categories_2, categories_2_1, cpt_order_set_form_category_id, cpts, e_6_1;
        var e_6, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.CPTOrderFormQueries.findAll(Id))];
                case 1:
                    rows = (_b.sent()).rows;
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < rows.length)) return [3, 12];
                    return [4, databases_1.PG_CLIENT.query(queries_1.cptOrderSetFormToCategories.findByFormId(rows[i].id))];
                case 3:
                    categories = (_b.sent()).rows;
                    rows[i].category_cpts = [];
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 9, 10, 11]);
                    categories_2 = (e_6 = void 0, tslib_1.__values(categories)), categories_2_1 = categories_2.next();
                    _b.label = 5;
                case 5:
                    if (!!categories_2_1.done) return [3, 8];
                    cpt_order_set_form_category_id = categories_2_1.value.cpt_order_set_form_category_id;
                    return [4, databases_1.PG_CLIENT.query(queries_1.cptOrderSetFormCategoriesCPTs.findByCategoryId(cpt_order_set_form_category_id))];
                case 6:
                    cpts = (_b.sent()).rows;
                    rows[i].category_cpts.push({ categoryId: cpt_order_set_form_category_id, cpts: cpts.map(function (_a) {
                            var practice_cpt_id = _a.practice_cpt_id;
                            return practice_cpt_id;
                        }) });
                    _b.label = 7;
                case 7:
                    categories_2_1 = categories_2.next();
                    return [3, 5];
                case 8: return [3, 11];
                case 9:
                    e_6_1 = _b.sent();
                    e_6 = { error: e_6_1 };
                    return [3, 11];
                case 10:
                    try {
                        if (categories_2_1 && !categories_2_1.done && (_a = categories_2.return)) _a.call(categories_2);
                    }
                    finally { if (e_6) throw e_6.error; }
                    return [7];
                case 11:
                    i++;
                    return [3, 2];
                case 12: return [2, rows];
            }
        });
    }); }
};
