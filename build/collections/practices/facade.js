"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practicesFacade = void 0;
var tslib_1 = require("tslib");
var queries_1 = require("./queries");
var databases_1 = require("../../databases");
var practicesFacade = {
    createAPractice: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var id, statement_address_same_as_address, statement_address, statement_options, statement_messages, location, _a, pay_to_address_same_as_address, payment_address, rows, loc, options, messages, paymentAddress, statementAddress, err_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = data.id, statement_address_same_as_address = data.statement_address_same_as_address, statement_address = data.statement_address, statement_options = data.statement_options, statement_messages = data.statement_messages, location = data.location;
                    _a = location, pay_to_address_same_as_address = _a.pay_to_address_same_as_address, payment_address = _a.payment_address;
                    delete data.statement_address;
                    delete data.statement_options;
                    delete data.statement_messages;
                    delete data.location;
                    delete location.payment_address;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 12, , 14]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _b.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practicesQueries.createAPractice(data))];
                case 3:
                    rows = (_b.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationQueries.create(tslib_1.__assign({ practice_id: id }, location)))];
                case 4:
                    loc = (_b.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementOptionsQueries.create(tslib_1.__assign({ practice_id: id }, statement_options)))];
                case 5:
                    options = (_b.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementMessagesQueries.create(tslib_1.__assign({ practice_id: id }, statement_messages)))];
                case 6:
                    messages = (_b.sent()).rows;
                    rows[0].location = loc[0];
                    rows[0].statement_options = options[0];
                    rows[0].statement_messages = messages[0];
                    if (!!pay_to_address_same_as_address) return [3, 8];
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationPaymentAddressQueries.create(tslib_1.__assign({ practice_location_id: location.id }, payment_address)))];
                case 7:
                    paymentAddress = (_b.sent()).rows;
                    rows[0].location.payment_address = paymentAddress[0];
                    _b.label = 8;
                case 8:
                    if (!!statement_address_same_as_address) return [3, 10];
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementAddressQueries.create(tslib_1.__assign({ practice_id: id }, statement_address)))];
                case 9:
                    statementAddress = (_b.sent()).rows;
                    rows[0].statement_address = statementAddress[0];
                    _b.label = 10;
                case 10: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 11:
                    _b.sent();
                    return [2, rows];
                case 12:
                    err_1 = _b.sent();
                    console.error('Error while inserting practice data', err_1);
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 13:
                    _b.sent();
                    throw err_1;
                case 14: return [2];
            }
        });
    }); },
    findPracticeById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows, location, statement_address, statement_options, statement_messages, payment_address;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practicesQueries.findPracticeById(Id))];
                case 1:
                    rows = (_a.sent()).rows;
                    if (!rows.length)
                        return [2, rows];
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationQueries.findByPracticeId(Id))];
                case 2:
                    location = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementAddressQueries.findByPracticeId(Id))];
                case 3:
                    statement_address = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementOptionsQueries.findByPracticeId(Id))];
                case 4:
                    statement_options = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementOptionsQueries.findByPracticeId(Id))];
                case 5:
                    statement_messages = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationPaymentAddressQueries.findByLocationId(location[0].id))];
                case 6:
                    payment_address = (_a.sent()).rows;
                    rows[0].location = location[0];
                    rows[0].location.payment_address = payment_address[0];
                    rows[0].statement_address = statement_address[0];
                    rows[0].statement_options = statement_options[0];
                    rows[0].statement_messages = statement_messages[0];
                    return [2, rows];
            }
        });
    }); },
    deletePracticeById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var locations, locationIds, rows, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 10, , 12]);
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationQueries.findByPracticeId(Id))];
                case 1:
                    locations = (_a.sent()).rows;
                    locationIds = locations.map(function (_a) {
                        var practice_location_id = _a.practice_location_id;
                        return practice_location_id;
                    });
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementAddressQueries.deleteByPracticeId(Id))];
                case 3:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementMessagesQueries.deleteByPracticeId(Id))];
                case 4:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementOptionsQueries.deleteByPracticeId(Id))];
                case 5:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationPaymentAddressQueries.deleteByLocationIds(locationIds))];
                case 6:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationQueries.deleteBypracticeId(Id))];
                case 7:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practicesQueries.deletePracticesById(Id))];
                case 8:
                    rows = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 9:
                    _a.sent();
                    return [2, rows];
                case 10:
                    err_2 = _a.sent();
                    console.error('Error while deleting practice', err_2);
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 11:
                    _a.sent();
                    throw err_2;
                case 12: return [2];
            }
        });
    }); },
    updatePracticeById: function (Id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var statement_address_same_as_address, statement_address, statement_options, statement_messages, location, _a, pay_to_address_same_as_address, payment_address, rows, loc, options, messages, fetchAddress, paymentAddress, paymentAddress, fetchedAddress, statementAddress, statementAddress, err_3;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    statement_address_same_as_address = data.statement_address_same_as_address, statement_address = data.statement_address, statement_options = data.statement_options, statement_messages = data.statement_messages, location = data.location;
                    _a = location, pay_to_address_same_as_address = _a.pay_to_address_same_as_address, payment_address = _a.payment_address;
                    delete data.statement_address;
                    delete data.statement_options;
                    delete data.statement_messages;
                    delete data.location;
                    delete location.payment_address;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 24, , 26]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _b.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practicesQueries.updatePracticeById(Id, data))];
                case 3:
                    rows = (_b.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationQueries.updateById(location.id, location))];
                case 4:
                    loc = (_b.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementOptionsQueries.updateByPracticeId(Id, statement_options))];
                case 5:
                    options = (_b.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementMessagesQueries.updateByPracticeId(Id, statement_messages))];
                case 6:
                    messages = (_b.sent()).rows;
                    rows[0].location = loc[0];
                    rows[0].statement_options = options[0];
                    rows[0].statement_messages = messages[0];
                    if (!!pay_to_address_same_as_address) return [3, 12];
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationPaymentAddressQueries.findByLocationId(location.id))];
                case 7:
                    fetchAddress = (_b.sent()).rows;
                    if (!fetchAddress.length) return [3, 9];
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationPaymentAddressQueries.updateByLocationId(location.id, tslib_1.__assign({ practice_location_id: (location && location.id) }, payment_address)))];
                case 8:
                    paymentAddress = (_b.sent()).rows;
                    rows[0].payment_address = paymentAddress[0];
                    return [3, 11];
                case 9: return [4, databases_1.PG_CLIENT.query(queries_1.locationPaymentAddressQueries.create(tslib_1.__assign({ practice_location_id: location.id }, payment_address)))];
                case 10:
                    paymentAddress = (_b.sent()).rows;
                    rows[0].location.payment_address = paymentAddress[0];
                    _b.label = 11;
                case 11: return [3, 14];
                case 12: return [4, databases_1.PG_CLIENT.query(queries_1.locationPaymentAddressQueries.deleteByLocationId(location.id))];
                case 13:
                    _b.sent();
                    _b.label = 14;
                case 14:
                    if (!!statement_address_same_as_address) return [3, 20];
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementAddressQueries.findByPracticeId(Id))];
                case 15:
                    fetchedAddress = (_b.sent()).rows;
                    if (!fetchedAddress.length) return [3, 17];
                    return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementAddressQueries.updateByPracticeId(Id, statement_address))];
                case 16:
                    statementAddress = (_b.sent()).rows;
                    rows[0].statement_address = statementAddress[0];
                    return [3, 19];
                case 17: return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementAddressQueries.create(tslib_1.__assign({ practice_id: Id }, statement_address)))];
                case 18:
                    statementAddress = (_b.sent()).rows;
                    rows[0].statement_address = statementAddress[0];
                    _b.label = 19;
                case 19: return [3, 22];
                case 20: return [4, databases_1.PG_CLIENT.query(queries_1.practiceStatementAddressQueries.deleteByPracticeId(Id))];
                case 21:
                    _b.sent();
                    _b.label = 22;
                case 22: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 23:
                    _b.sent();
                    return [2, rows];
                case 24:
                    err_3 = _b.sent();
                    console.error('Error while updating practice data', err_3);
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 25:
                    _b.sent();
                    throw err_3;
                case 26: return [2];
            }
        });
    }); },
    findAll: function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practicesQueries.findAllPractices())];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); }
};
exports.practicesFacade = practicesFacade;
