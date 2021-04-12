"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersFacade = void 0;
var tslib_1 = require("tslib");
var queries_1 = require("./queries");
var databases_1 = require("../../databases");
exports.usersFacade = {
    create: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var roles, rows, roles_1, roles_1_1, role, inserted, e_1_1, err_1;
        var e_1, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    roles = data.roles;
                    delete data.roles;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 13, , 15]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _b.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.userQueries.create(data))];
                case 3:
                    rows = (_b.sent()).rows;
                    rows[0].roles = [];
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 9, 10, 11]);
                    roles_1 = tslib_1.__values(roles), roles_1_1 = roles_1.next();
                    _b.label = 5;
                case 5:
                    if (!!roles_1_1.done) return [3, 8];
                    role = roles_1_1.value;
                    return [4, databases_1.PG_CLIENT.query(queries_1.userRolesQueries.create(tslib_1.__assign({ user_id: rows[0].id }, role)))];
                case 6:
                    inserted = (_b.sent()).rows;
                    rows[0].roles.push(inserted[0]);
                    _b.label = 7;
                case 7:
                    roles_1_1 = roles_1.next();
                    return [3, 5];
                case 8: return [3, 11];
                case 9:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 11];
                case 10:
                    try {
                        if (roles_1_1 && !roles_1_1.done && (_a = roles_1.return)) _a.call(roles_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 11: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 12:
                    _b.sent();
                    return [2, rows];
                case 13:
                    err_1 = _b.sent();
                    console.error('Error while inserting user');
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 14:
                    _b.sent();
                    throw err_1;
                case 15: return [2];
            }
        });
    }); },
    findById: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows, roles;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.userQueries.findById(id))];
                case 1:
                    rows = (_a.sent()).rows;
                    if (!rows.length)
                        return [2, rows];
                    return [4, databases_1.PG_CLIENT.query(queries_1.userRolesQueries.findByUserId(id))];
                case 2:
                    roles = (_a.sent()).rows;
                    rows[0].roles = roles;
                    return [2, rows];
            }
        });
    }); },
    deleteById: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 7]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 1:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.userRolesQueries.deleteByUserId(id))];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.userQueries.deleteById(id))];
                case 3:
                    rows = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 4:
                    _a.sent();
                    return [2, rows];
                case 5:
                    err_2 = _a.sent();
                    console.error('Error while deleting user');
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 6:
                    _a.sent();
                    throw err_2;
                case 7: return [2];
            }
        });
    }); },
    updateById: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var roles, rows, roles_2, roles_2_1, role, updated, inserted, e_2_1, err_3;
        var e_2, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    roles = data.roles;
                    delete data.roles;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 15, , 17]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _b.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.userQueries.updateById(id, data))];
                case 3:
                    rows = (_b.sent()).rows;
                    rows[0].roles = [];
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 11, 12, 13]);
                    roles_2 = tslib_1.__values(roles), roles_2_1 = roles_2.next();
                    _b.label = 5;
                case 5:
                    if (!!roles_2_1.done) return [3, 10];
                    role = roles_2_1.value;
                    if (!role.id) return [3, 7];
                    return [4, databases_1.PG_CLIENT.query(queries_1.userRolesQueries.updateById(role.id, role))];
                case 6:
                    updated = (_b.sent()).rows;
                    rows[0].roles.push(updated[0]);
                    return [3, 9];
                case 7: return [4, databases_1.PG_CLIENT.query(queries_1.userRolesQueries.create(tslib_1.__assign({ user_id: id }, role)))];
                case 8:
                    inserted = (_b.sent()).rows;
                    rows[0].roles.push(inserted[0]);
                    _b.label = 9;
                case 9:
                    roles_2_1 = roles_2.next();
                    return [3, 5];
                case 10: return [3, 13];
                case 11:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 13];
                case 12:
                    try {
                        if (roles_2_1 && !roles_2_1.done && (_a = roles_2.return)) _a.call(roles_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7];
                case 13: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 14:
                    _b.sent();
                    return [2, rows];
                case 15:
                    err_3 = _b.sent();
                    console.error('Error while updating user');
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 16:
                    _b.sent();
                    throw err_3;
                case 17: return [2];
            }
        });
    }); },
    findAll: function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.userQueries.findAll())];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); }
};
