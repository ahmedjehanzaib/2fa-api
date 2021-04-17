"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practicePlaceOfServiceRouters = void 0;
var tslib_1 = require("tslib");
var express_1 = require("express");
var JOI = require("joi");
var log_1 = require("../../log");
var validation_1 = require("../../config/validation");
var facade_1 = require("./facade");
function practicePlaceOfServiceRouters() {
    var _this = this;
    var router = express_1.Router();
    router.post('/', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, POS, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ body: req.body }, validation_1.validationSchema.createAPracticePlaceOfService);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.practicePlaceOfServiceFacade.create(req.body)];
                case 1:
                    POS = _a.sent();
                    res.status(200).json({ data: POS[0], error: null, message: 'Practice Place of Service has been created successfully!' });
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_place_of_service' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_1 = _a.sent();
                    log_1.log.error({ message: 'Error in creating a new Practice Place of Service !', statusCode: 500, detail: err_1, repo: 'aquila-api', path: '/api/v1/practice_place_of_service' });
                    res.status(500).json({ data: null, error: err_1, message: 'Error in creating a new Practice Place of Service !' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.get('/', function (_req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var POSs, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, facade_1.practicePlaceOfServiceFacade.findAll()];
                case 1:
                    POSs = _a.sent();
                    if (!POSs.length) {
                        log_1.log.warn({ message: 'Practice Places of Service do not exist!', statusCode: 404, detail: 'Practice Places of Service do not exist!', repo: 'aquila-api', path: '/api/v1/practice_place_of_service' });
                        res.status(404).json({ data: null, error: true, message: 'Practice Places of Service do not exist!' });
                    }
                    else {
                        res.status(200).json({ data: POSs, error: null, message: 'Practice Places of Service fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    err_2 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a Practice Place of Service s!', statusCode: 500, detail: err_2, repo: 'aquila-api', path: '/api/v1/practice_place_of_service' });
                    res.status(500).json({ data: null, error: err_2, message: 'Error in finding a Practice Places of Service!' });
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); });
    router.get('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, POS, err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.findAPracticePlaceOfService);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.practicePlaceOfServiceFacade.findById(req.params.id)];
                case 1:
                    POS = _a.sent();
                    if (!POS.length) {
                        log_1.log.warn({ message: 'Practice Place of Service  does not exist!', statusCode: 404, detail: 'Practice Place of Service s does not exist!', repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
                        res.status(404).json({ data: null, error: true, message: 'Practice Place of Service  does not exist!' });
                    }
                    else {
                        res.status(200).json({ data: POS[0], error: null, message: 'Practice Place of Service  fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_3 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a Practice Place of Service !', statusCode: 500, detail: err_3, repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
                    res.status(500).json({ data: null, error: err_3, message: 'Error in finding a Practice Place of Service !' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.delete('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, POS, deletedtype, err_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.deleteAPracticePlaceOfService);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.practicePlaceOfServiceFacade.findById(req.params.id)];
                case 1:
                    POS = _a.sent();
                    if (!!POS.length) return [3, 2];
                    log_1.log.warn({ message: 'Practice Place of Service  does not exist!', statusCode: 404, detail: 'Practice Place of Service  does not exist!', repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
                    res.status(404).json({ data: null, error: true, message: 'Practice Place of Service  does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.practicePlaceOfServiceFacade.deleteById(req.params.id)];
                case 3:
                    deletedtype = _a.sent();
                    res.status(200).json({ data: deletedtype, error: null, message: 'Practice Place of Service  deleted successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_4 = _a.sent();
                    log_1.log.error({ message: 'Error in deleting a Practice Place of Service !', statusCode: 500, detail: err_4, repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
                    res.status(500).json({ data: null, error: err_4, message: 'Error in deleting a Practice Place of Service !' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    router.put('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, POS, updatedPOSInfo, err_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params, body: req.body }, validation_1.validationSchema.updateAPracticePlaceOfService);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.practicePlaceOfServiceFacade.findById(req.params.id)];
                case 1:
                    POS = _a.sent();
                    if (!!POS.length) return [3, 2];
                    log_1.log.warn({ message: 'Practice Place of Service  does not exist!', statusCode: 404, detail: 'Practice Place of Service  does not exist!', repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
                    res.status(404).json({ data: null, error: true, message: 'Practice Place of Service  does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.practicePlaceOfServiceFacade.updateById(req.params.id, req.body)];
                case 3:
                    updatedPOSInfo = _a.sent();
                    res.status(200).json({ data: updatedPOSInfo[0], error: null, message: 'Practice Place of Service s updated successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_5 = _a.sent();
                    log_1.log.error({ message: 'Error in updating a Practice Place of Service !', statusCode: 500, detail: err_5, repo: 'aquila-api', path: '/api/v1/practice_place_of_service/:id' });
                    res.status(500).json({ data: null, error: err_5, message: 'Error in updating a Practice Place of Service !' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    return router;
}
exports.practicePlaceOfServiceRouters = practicePlaceOfServiceRouters;
;
