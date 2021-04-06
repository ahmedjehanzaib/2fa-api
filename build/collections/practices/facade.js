"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practicesFacade = void 0;
var tslib_1 = require("tslib");
var queries_1 = require("./queries");
var databases_1 = require("../../databases");
var practicesFacade = {
    createAPractice: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var pay_to_address_same_as_address, statement_address_same_as_address, is_pay_to_address_same, is_statement_address_same, rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pay_to_address_same_as_address = data.pay_to_address_same_as_address, statement_address_same_as_address = data.statement_address_same_as_address, is_pay_to_address_same = data.is_pay_to_address_same, is_statement_address_same = data.is_statement_address_same;
                    delete data.is_statement_address_same;
                    delete data.is_pay_to_address_same;
                    return [4, databases_1.PG_CLIENT.query(queries_1.practicesQueries.createAPractice(data))];
                case 1:
                    rows = (_a.sent()).rows;
                    if (!!pay_to_address_same_as_address) return [3, 3];
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementAddressQueries.create(is_statement_address_same))];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    console.log(rows);
                    return [2, rows];
            }
        });
    }); },
    findPracticeById: function (clientId) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practicesQueries.findPracticeById(clientId))];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); },
    deletePracticeById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementAddressQueries.deleteById(Id))];
                case 1:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementMessagesQueries.deleteById(Id))];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementOptionsQueries.deleteById(Id))];
                case 3:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementOptionsQueries.deleteById(Id))];
                case 4:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practicesQueries.deletePracticesById(Id))];
                case 5:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); },
    updatePracticeById: function (clientId, practiceData) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practicesQueries.updatePracticeById(clientId, practiceData))];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); }
};
exports.practicesFacade = practicesFacade;
