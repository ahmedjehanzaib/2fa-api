"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateFacade = void 0;
var tslib_1 = require("tslib");
var queries_1 = require("./queries");
var databases_1 = require("../../databases");
exports.templateFacade = {
    create: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var sections, rows, sections_1, sections_1_1, section, inserted, e_1_1, err_1;
        var e_1, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sections = data.sections;
                    delete data.sections;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 13, , 15]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _b.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.templateQueries.create(data))];
                case 3:
                    rows = (_b.sent()).rows;
                    rows[0].sections = [];
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 9, 10, 11]);
                    sections_1 = tslib_1.__values(sections), sections_1_1 = sections_1.next();
                    _b.label = 5;
                case 5:
                    if (!!sections_1_1.done) return [3, 8];
                    section = sections_1_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.templateToSectionQueries
                            .create({ clinical_section_id: section, practice_clinical_template_id: data.id }))];
                case 6:
                    inserted = (_b.sent()).rows;
                    rows[0].sections.push(inserted[0].clinical_section_id);
                    _b.label = 7;
                case 7:
                    sections_1_1 = sections_1.next();
                    return [3, 5];
                case 8: return [3, 11];
                case 9:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 11];
                case 10:
                    try {
                        if (sections_1_1 && !sections_1_1.done && (_a = sections_1.return)) _a.call(sections_1);
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
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.templateQueries.findById(Id))];
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
                    return [4, databases_1.PG_CLIENT.query(queries_1.templateToSectionQueries.deleteByTemplateId(Id))];
                case 1:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.templateQueries.deleteById(Id))];
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
        var sections, rows, sections_2, sections_2_1, section, inserted, e_2_1, err_3;
        var e_2, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    sections = data.sections;
                    delete data.sections;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 12, , 13]);
                    return [4, databases_1.PG_CLIENT.query(queries_1.templateToSectionQueries.deleteByTemplateId(Id))];
                case 2:
                    _b.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.templateQueries.updateById(Id, data))];
                case 3:
                    rows = (_b.sent()).rows;
                    rows[0].sections = [];
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 9, 10, 11]);
                    sections_2 = tslib_1.__values(sections), sections_2_1 = sections_2.next();
                    _b.label = 5;
                case 5:
                    if (!!sections_2_1.done) return [3, 8];
                    section = sections_2_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.templateToSectionQueries
                            .create({ clinical_section_id: section, practice_clinical_template_id: Id }))];
                case 6:
                    inserted = (_b.sent()).rows;
                    rows[0].sections.push(inserted[0].clinical_section_id);
                    _b.label = 7;
                case 7:
                    sections_2_1 = sections_2.next();
                    return [3, 5];
                case 8: return [3, 11];
                case 9:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 10:
                    try {
                        if (sections_2_1 && !sections_2_1.done && (_a = sections_2.return)) _a.call(sections_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7];
                case 11: return [2, rows];
                case 12:
                    err_3 = _b.sent();
                    throw err_3;
                case 13: return [2];
            }
        });
    }); },
    findAll: function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.templateQueries.findAll())];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); }
};
