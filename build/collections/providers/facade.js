"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providersFacade = void 0;
var tslib_1 = require("tslib");
var queries_1 = require("./queries");
var databases_1 = require("../../databases");
var providersFacade = {
    createAProvider: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var id, is_pay_to_address, payment_address, insurance_billing_options, rows, insurance, inserted, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = data.id, is_pay_to_address = data.is_pay_to_address, payment_address = data.payment_address, insurance_billing_options = data.insurance_billing_options;
                    delete data.payment_address;
                    delete data.insurance_billing_options;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 8, , 10]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.providersQueries.createAProvider(data))];
                case 3:
                    rows = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.providerInsuranceBillingOptionsQueries.create(tslib_1.__assign({ provider_id: id }, insurance_billing_options)))];
                case 4:
                    insurance = (_a.sent()).rows;
                    rows[0].insurance_billing_options = insurance[0];
                    if (!(is_pay_to_address === false)) return [3, 6];
                    return [4, databases_1.PG_CLIENT.query(queries_1.providerPayToAddressQueries.create(tslib_1.__assign({ provider_id: id }, payment_address)))];
                case 5:
                    inserted = (_a.sent()).rows;
                    rows[0].payment_address = inserted[0];
                    _a.label = 6;
                case 6: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 7:
                    _a.sent();
                    return [2, rows];
                case 8:
                    err_1 = _a.sent();
                    console.error('Error while creating provider', err_1);
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 9:
                    _a.sent();
                    throw err_1;
                case 10: return [2];
            }
        });
    }); },
    findProviderById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows, insurance, payment_address;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.providersQueries.findProviderById(Id))];
                case 1:
                    rows = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.providerInsuranceBillingOptionsQueries.findByProviderId(Id))];
                case 2:
                    insurance = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.providerPayToAddressQueries.findByProviderId(Id))];
                case 3:
                    payment_address = (_a.sent()).rows;
                    rows[0].insurance_billing_options = insurance[0];
                    rows[0].payment_address = payment_address[0];
                    return [2, rows];
            }
        });
    }); },
    deleteProviderById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 8]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 1:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.providerPayToAddressQueries.deleteByProviderId(Id))];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.providerInsuranceBillingOptionsQueries.deleteByProviderId(Id))];
                case 3:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.providersQueries.deleteProviderById(Id))];
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
                    console.error('Error while deleting provider', err_2);
                    throw err_2;
                case 8: return [2];
            }
        });
    }); },
    updateProviderById: function (Id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var is_pay_to_address, payment_address, insurance_billing_options, rows, insurance, paymentData, updated, inserted, err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    is_pay_to_address = data.is_pay_to_address, payment_address = data.payment_address, insurance_billing_options = data.insurance_billing_options;
                    delete data.payment_address;
                    delete data.insurance_billing_options;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 14, , 16]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.providersQueries.updateProviderById(Id, data))];
                case 3:
                    rows = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query(queries_1.providerInsuranceBillingOptionsQueries.updateByProviderId(Id, insurance_billing_options))];
                case 4:
                    insurance = (_a.sent()).rows;
                    rows[0].insurance_billing_options = insurance[0];
                    if (!!is_pay_to_address) return [3, 10];
                    return [4, databases_1.PG_CLIENT.query(queries_1.providerPayToAddressQueries.findByProviderId(Id))];
                case 5:
                    paymentData = (_a.sent()).rows;
                    if (!paymentData.length) return [3, 7];
                    return [4, databases_1.PG_CLIENT.query(queries_1.providerPayToAddressQueries.updateById(paymentData[0].id, payment_address))];
                case 6:
                    updated = (_a.sent()).rows;
                    rows[0].payment_address = updated[0];
                    return [3, 9];
                case 7: return [4, databases_1.PG_CLIENT.query(queries_1.providerPayToAddressQueries.create(tslib_1.__assign({ provider_id: Id }, payment_address)))];
                case 8:
                    inserted = (_a.sent()).rows;
                    rows[0].payment_address = inserted[0];
                    _a.label = 9;
                case 9: return [3, 12];
                case 10: return [4, databases_1.PG_CLIENT.query(queries_1.providerPayToAddressQueries.deleteByProviderId(Id))];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 13:
                    _a.sent();
                    return [2, rows];
                case 14:
                    err_3 = _a.sent();
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 15:
                    _a.sent();
                    console.error('Error while updating provider', err_3);
                    throw err_3;
                case 16: return [2];
            }
        });
    }); },
    findAllProviders: function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.providersQueries.findAllProviders())];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); },
};
exports.providersFacade = providersFacade;
