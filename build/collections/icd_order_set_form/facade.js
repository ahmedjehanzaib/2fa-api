"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICDOrderFormFacade = void 0;
var tslib_1 = require("tslib");
var uuid_1 = require("uuid");
var queries_1 = require("./queries");
var databases_1 = require("../../databases");
exports.ICDOrderFormFacade = {
    create: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var category_icds, rows, category_icds_1, category_icds_1_1, cat, icds, categoryId, category, icds_1, icds_1_1, icdId, inserted, e_1_1, e_2_1, err_1;
        var e_2, _a;
        var e_1, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    category_icds = data.category_icds;
                    delete data.category_icds;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 26, , 28]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _c.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.ICDOrderFormQueries.create(data))];
                case 3:
                    rows = (_c.sent()).rows;
                    rows[0].category_icds = [];
                    _c.label = 4;
                case 4:
                    _c.trys.push([4, 22, 23, 24]);
                    category_icds_1 = tslib_1.__values(category_icds), category_icds_1_1 = category_icds_1.next();
                    _c.label = 5;
                case 5:
                    if (!!category_icds_1_1.done) return [3, 21];
                    cat = category_icds_1_1.value;
                    icds = cat.icds, categoryId = cat.categoryId;
                    category = {
                        categoryId: categoryId,
                        icds: []
                    };
                    _c.label = 6;
                case 6:
                    _c.trys.push([6, 12, 13, 18]);
                    icds_1 = (e_1 = void 0, tslib_1.__asyncValues(icds));
                    _c.label = 7;
                case 7: return [4, icds_1.next()];
                case 8:
                    if (!(icds_1_1 = _c.sent(), !icds_1_1.done)) return [3, 11];
                    icdId = icds_1_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.ICDOrderSetFormCategoriesICDs
                            .create({ id: uuid_1.v4(), icd_order_set_form_category_id: categoryId, practice_icd_id: icdId, icd_order_set_form_id: rows[0].id }))];
                case 9:
                    inserted = (_c.sent()).rows;
                    console.log(1);
                    category.icds.push(inserted[0].practice_icd_id);
                    _c.label = 10;
                case 10: return [3, 7];
                case 11: return [3, 18];
                case 12:
                    e_1_1 = _c.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 18];
                case 13:
                    _c.trys.push([13, , 16, 17]);
                    if (!(icds_1_1 && !icds_1_1.done && (_b = icds_1.return))) return [3, 15];
                    return [4, _b.call(icds_1)];
                case 14:
                    _c.sent();
                    _c.label = 15;
                case 15: return [3, 17];
                case 16:
                    if (e_1) throw e_1.error;
                    return [7];
                case 17: return [7];
                case 18: return [4, databases_1.PG_CLIENT.query(queries_1.ICDOrderSetFormToCategories
                        .create({ icd_order_set_form_categories_id: categoryId, template_icd_order_set_form_id: rows[0].id }))];
                case 19:
                    _c.sent();
                    rows[0].category_icds.push(category);
                    _c.label = 20;
                case 20:
                    category_icds_1_1 = category_icds_1.next();
                    return [3, 5];
                case 21: return [3, 24];
                case 22:
                    e_2_1 = _c.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 24];
                case 23:
                    try {
                        if (category_icds_1_1 && !category_icds_1_1.done && (_a = category_icds_1.return)) _a.call(category_icds_1);
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
        var rows, categories, categories_1, categories_1_1, icd_order_set_form_categories_id, icds, e_3_1;
        var e_3, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.ICDOrderFormQueries.findById(Id))];
                case 1:
                    rows = (_b.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.ICDOrderSetFormToCategories.findByFormId(Id))];
                case 2:
                    categories = (_b.sent()).rows;
                    if (!rows.length) return [3, 10];
                    rows[0].category_icds = [];
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 8, 9, 10]);
                    categories_1 = tslib_1.__values(categories), categories_1_1 = categories_1.next();
                    _b.label = 4;
                case 4:
                    if (!!categories_1_1.done) return [3, 7];
                    icd_order_set_form_categories_id = categories_1_1.value.icd_order_set_form_categories_id;
                    return [4, databases_1.PG_CLIENT.query(queries_1.ICDOrderSetFormCategoriesICDs.findByCategoryAndFormId(icd_order_set_form_categories_id, Id))];
                case 5:
                    icds = (_b.sent()).rows;
                    rows[0].category_icds.push({ categoryId: icd_order_set_form_categories_id, icds: icds.map(function (_a) {
                            var practice_icd_id = _a.practice_icd_id;
                            return practice_icd_id;
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
                    return [4, databases_1.PG_CLIENT.query(queries_1.ICDOrderSetFormCategoriesICDs.deleteByFormId(Id))];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.ICDOrderSetFormToCategories.deleteByFormId(Id))];
                case 3:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.ICDOrderFormQueries.deleteById(Id))];
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
        var category_icds, rows, category_icds_2, category_icds_2_1, cat, icds, categoryId, category, icds_2, icds_2_1, icdId, inserted, e_4_1, e_5_1, err_3;
        var e_5, _a;
        var e_4, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    category_icds = data.category_icds;
                    delete data.category_icds;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 28, , 30]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _c.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.ICDOrderSetFormCategoriesICDs.deleteByFormId(Id))];
                case 3:
                    _c.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.ICDOrderSetFormToCategories.deleteByFormId(Id))];
                case 4:
                    _c.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.ICDOrderFormQueries.updateById(Id, data))];
                case 5:
                    rows = (_c.sent()).rows;
                    rows[0].category_icds = [];
                    _c.label = 6;
                case 6:
                    _c.trys.push([6, 24, 25, 26]);
                    category_icds_2 = tslib_1.__values(category_icds), category_icds_2_1 = category_icds_2.next();
                    _c.label = 7;
                case 7:
                    if (!!category_icds_2_1.done) return [3, 23];
                    cat = category_icds_2_1.value;
                    icds = cat.icds, categoryId = cat.categoryId;
                    category = {
                        categoryId: categoryId,
                        icds: []
                    };
                    _c.label = 8;
                case 8:
                    _c.trys.push([8, 14, 15, 20]);
                    icds_2 = (e_4 = void 0, tslib_1.__asyncValues(icds));
                    _c.label = 9;
                case 9: return [4, icds_2.next()];
                case 10:
                    if (!(icds_2_1 = _c.sent(), !icds_2_1.done)) return [3, 13];
                    icdId = icds_2_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.ICDOrderSetFormCategoriesICDs
                            .create({ id: uuid_1.v4(), icd_order_set_form_category_id: categoryId, practice_icd_id: icdId, icd_order_set_form_id: Id }))];
                case 11:
                    inserted = (_c.sent()).rows;
                    category.icds.push(inserted[0].practice_icd_id);
                    _c.label = 12;
                case 12: return [3, 9];
                case 13: return [3, 20];
                case 14:
                    e_4_1 = _c.sent();
                    e_4 = { error: e_4_1 };
                    return [3, 20];
                case 15:
                    _c.trys.push([15, , 18, 19]);
                    if (!(icds_2_1 && !icds_2_1.done && (_b = icds_2.return))) return [3, 17];
                    return [4, _b.call(icds_2)];
                case 16:
                    _c.sent();
                    _c.label = 17;
                case 17: return [3, 19];
                case 18:
                    if (e_4) throw e_4.error;
                    return [7];
                case 19: return [7];
                case 20: return [4, databases_1.PG_CLIENT.query(queries_1.ICDOrderSetFormToCategories
                        .create({ icd_order_set_form_categories_id: categoryId, template_icd_order_set_form_id: rows[0].id }))];
                case 21:
                    _c.sent();
                    rows[0].category_icds.push(category);
                    _c.label = 22;
                case 22:
                    category_icds_2_1 = category_icds_2.next();
                    return [3, 7];
                case 23: return [3, 26];
                case 24:
                    e_5_1 = _c.sent();
                    e_5 = { error: e_5_1 };
                    return [3, 26];
                case 25:
                    try {
                        if (category_icds_2_1 && !category_icds_2_1.done && (_a = category_icds_2.return)) _a.call(category_icds_2);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7];
                case 26: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 27:
                    _c.sent();
                    return [2, rows];
                case 28:
                    err_3 = _c.sent();
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 29:
                    _c.sent();
                    console.log(err_3);
                    throw err_3;
                case 30: return [2];
            }
        });
    }); },
    findAll: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.ICDOrderFormQueries.findAll(Id))];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); }
};
