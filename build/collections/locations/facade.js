"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationsFacade = void 0;
var tslib_1 = require("tslib");
var queries_1 = require("./queries");
var databases_1 = require("../../databases");
var locationsFacade = {
    createALocation: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var id, pay_to_address_same_as_address, payment_address, rows, paymentAddress, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = data.id, pay_to_address_same_as_address = data.pay_to_address_same_as_address, payment_address = data.payment_address;
                    delete data.payment_address;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 9]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationQueries.create(data))];
                case 3:
                    rows = (_a.sent()).rows;
                    if (!!pay_to_address_same_as_address) return [3, 5];
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationPaymentAddressQueries.create(tslib_1.__assign({ practice_location_id: id }, payment_address)))];
                case 4:
                    paymentAddress = (_a.sent()).rows;
                    rows[0].payment_address = paymentAddress[0];
                    _a.label = 5;
                case 5: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 6:
                    _a.sent();
                    return [2, rows];
                case 7:
                    err_1 = _a.sent();
                    console.error('Error while inserting practice location', err_1);
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 8:
                    _a.sent();
                    throw err_1;
                case 9: return [2];
            }
        });
    }); },
    findLocationById: function (locationId) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows, paymentAddress;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.locationQueries.findById(locationId))];
                case 1:
                    rows = (_a.sent()).rows;
                    if (!rows.length)
                        return [2, rows];
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationPaymentAddressQueries.findByLocationId(locationId))];
                case 2:
                    paymentAddress = (_a.sent()).rows;
                    rows[0].payment_address = paymentAddress[0];
                    return [2, rows];
            }
        });
    }); },
    deleteLocationById: function (locationId) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 7]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 1:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationPaymentAddressQueries.deleteLocationById(locationId))];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationQueries.deleteById(locationId))];
                case 3:
                    rows = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 4:
                    _a.sent();
                    return [2, rows];
                case 5:
                    err_2 = _a.sent();
                    console.error('Error while deleting practice location');
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 6:
                    _a.sent();
                    throw err_2;
                case 7: return [2];
            }
        });
    }); },
    updateLocationById: function (locationId, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var pay_to_address_same_as_address, payment_address, rows, fetchedPaymentAddress, paymentAddress, paymentAddress, err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pay_to_address_same_as_address = data.pay_to_address_same_as_address, payment_address = data.payment_address;
                    delete data.payment_address;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 13, , 15]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationQueries.updateById(locationId, data))];
                case 3:
                    rows = (_a.sent()).rows;
                    if (!!pay_to_address_same_as_address) return [3, 9];
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationPaymentAddressQueries.findByLocationId(locationId))];
                case 4:
                    fetchedPaymentAddress = (_a.sent()).rows;
                    if (!fetchedPaymentAddress.length) return [3, 6];
                    return [4, databases_1.PG_CLIENT.query(queries_1.locationPaymentAddressQueries.updateByLocationId(locationId, payment_address))];
                case 5:
                    paymentAddress = (_a.sent()).rows;
                    rows[0].payment_address = paymentAddress[0];
                    return [3, 8];
                case 6: return [4, databases_1.PG_CLIENT.query(queries_1.locationPaymentAddressQueries.create(tslib_1.__assign({ practice_location_id: locationId }, payment_address)))];
                case 7:
                    paymentAddress = (_a.sent()).rows;
                    rows[0].payment_address = paymentAddress[0];
                    _a.label = 8;
                case 8: return [3, 11];
                case 9: return [4, databases_1.PG_CLIENT.query(queries_1.locationPaymentAddressQueries.deleteLocationById(locationId))];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 12:
                    _a.sent();
                    return [2, rows];
                case 13:
                    err_3 = _a.sent();
                    console.error('Error while updating practice location');
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 14:
                    _a.sent();
                    throw err_3;
                case 15: return [2];
            }
        });
    }); },
    findAll: function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.locationQueries.findAll())];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); }
};
exports.locationsFacade = locationsFacade;
