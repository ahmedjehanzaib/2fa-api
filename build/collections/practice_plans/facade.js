"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practicePlanFacade = void 0;
var tslib_1 = require("tslib");
var uuid_1 = require("uuid");
var queries_1 = require("./queries");
var databases_1 = require("../../databases");
exports.practicePlanFacade = {
    create: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var id, address, fees, insurance_billing_options, rows, planAddress, planFees, insurance, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = data.id, address = data.address, fees = data.fees, insurance_billing_options = data.insurance_billing_options;
                    delete data.address;
                    delete data.fees;
                    delete data.insurance_billing_options;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 11, , 13]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practicePlansQueries.create(data))];
                case 3:
                    rows = (_a.sent()).rows;
                    if (!address) return [3, 5];
                    return [4, databases_1.PG_CLIENT.query(queries_1.planAddressesQueries.create(tslib_1.__assign({ id: uuid_1.v4(), plan_id: id }, address)))];
                case 4:
                    planAddress = (_a.sent()).rows;
                    rows[0].address = planAddress[0];
                    _a.label = 5;
                case 5:
                    if (!fees) return [3, 7];
                    return [4, databases_1.PG_CLIENT.query(queries_1.planFeesQueries.create(tslib_1.__assign({ id: uuid_1.v4(), plan_id: id }, fees)))];
                case 6:
                    planFees = (_a.sent()).rows;
                    rows[0].fees = planFees[0];
                    _a.label = 7;
                case 7:
                    if (!insurance_billing_options) return [3, 9];
                    return [4, databases_1.PG_CLIENT.query(queries_1.providerInsuranceBillingOptionsQueries.create(tslib_1.__assign({ plan_id: id }, insurance_billing_options)))];
                case 8:
                    insurance = (_a.sent()).rows;
                    rows[0].insurance_billing_options = insurance[0];
                    _a.label = 9;
                case 9: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 10:
                    _a.sent();
                    return [2, rows];
                case 11:
                    err_1 = _a.sent();
                    console.error('Error while creating practice plan');
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 12:
                    _a.sent();
                    throw err_1;
                case 13: return [2];
            }
        });
    }); },
    findById: function (Id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practicePlansQueries.findById(Id))];
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
                    _a.trys.push([0, 6, , 8]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 1:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.planAddressesQueries.deleteByPlanId(Id))];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.planFeesQueries.deleteByPlanId(Id))];
                case 3:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practicePlansQueries.deleteById(Id))];
                case 4:
                    rows = (_a.sent()).rows;
                    return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 5:
                    _a.sent();
                    return [2, rows];
                case 6:
                    err_2 = _a.sent();
                    console.error('Error while deleting practice plan');
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 7:
                    _a.sent();
                    throw err_2;
                case 8: return [2];
            }
        });
    }); },
    updateById: function (Id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var address, fees, insurance_billing_options, rows, planAddress, planAddress, planFees, planFees, insurance, insurance, err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    address = data.address, fees = data.fees, insurance_billing_options = data.insurance_billing_options;
                    delete data.address;
                    delete data.fees;
                    delete data.insurance_billing_options;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 26, , 28]);
                    return [4, databases_1.PG_CLIENT.query('BEGIN')];
                case 2:
                    _a.sent();
                    return [4, databases_1.PG_CLIENT.query(queries_1.practicePlansQueries.updateById(Id, data))];
                case 3:
                    rows = (_a.sent()).rows;
                    if (!address) return [3, 8];
                    if (!address.id) return [3, 5];
                    return [4, databases_1.PG_CLIENT.query(queries_1.planAddressesQueries.updateById(address.id, address))];
                case 4:
                    planAddress = (_a.sent()).rows;
                    rows[0].address = planAddress[0];
                    return [3, 7];
                case 5: return [4, databases_1.PG_CLIENT.query(queries_1.planAddressesQueries.create(tslib_1.__assign({ id: uuid_1.v4(), plan_id: Id }, address)))];
                case 6:
                    planAddress = (_a.sent()).rows;
                    rows[0].address = planAddress[0];
                    _a.label = 7;
                case 7: return [3, 10];
                case 8: return [4, databases_1.PG_CLIENT.query(queries_1.planAddressesQueries.deleteByPlanId(Id))];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    if (!fees) return [3, 15];
                    if (!fees.id) return [3, 12];
                    return [4, databases_1.PG_CLIENT.query(queries_1.planFeesQueries.updateById(fees.id, fees))];
                case 11:
                    planFees = (_a.sent()).rows;
                    rows[0].fees = planFees[0];
                    return [3, 14];
                case 12: return [4, databases_1.PG_CLIENT.query(queries_1.planFeesQueries.create(tslib_1.__assign({ id: uuid_1.v4(), plan_id: Id }, fees)))];
                case 13:
                    planFees = (_a.sent()).rows;
                    rows[0].fees = planFees[0];
                    _a.label = 14;
                case 14: return [3, 17];
                case 15: return [4, databases_1.PG_CLIENT.query(queries_1.planFeesQueries.deleteByPlanId(Id))];
                case 16:
                    _a.sent();
                    _a.label = 17;
                case 17:
                    if (!insurance_billing_options) return [3, 22];
                    if (!insurance_billing_options.id) return [3, 19];
                    return [4, databases_1.PG_CLIENT.query(queries_1.providerInsuranceBillingOptionsQueries
                            .updateById(insurance_billing_options.id, insurance_billing_options))];
                case 18:
                    insurance = (_a.sent()).rows;
                    rows[0].insurance_billing_options = insurance[0];
                    return [3, 21];
                case 19: return [4, databases_1.PG_CLIENT.query(queries_1.providerInsuranceBillingOptionsQueries
                        .create(tslib_1.__assign({ plan_id: Id }, insurance_billing_options)))];
                case 20:
                    insurance = (_a.sent()).rows;
                    rows[0].insurance_billing_options = insurance[0];
                    _a.label = 21;
                case 21: return [3, 24];
                case 22: return [4, databases_1.PG_CLIENT.query(queries_1.providerInsuranceBillingOptionsQueries.deleteByPlanId(Id))];
                case 23:
                    _a.sent();
                    _a.label = 24;
                case 24: return [4, databases_1.PG_CLIENT.query('COMMIT')];
                case 25:
                    _a.sent();
                    return [2, rows];
                case 26:
                    err_3 = _a.sent();
                    console.error('Error while updating practice plan');
                    return [4, databases_1.PG_CLIENT.query('ROLLBACK')];
                case 27:
                    _a.sent();
                    throw err_3;
                case 28: return [2];
            }
        });
    }); },
    findAll: function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var rows;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, databases_1.PG_CLIENT.query(queries_1.practicePlansQueries.findAll())];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2, rows];
            }
        });
    }); }
};
