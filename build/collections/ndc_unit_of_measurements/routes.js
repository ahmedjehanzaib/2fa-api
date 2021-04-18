"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NDCUnitOfMeasurementRouters = void 0;
var tslib_1 = require("tslib");
var express_1 = require("express");
var JOI = require("joi");
var log_1 = require("../../log");
var validation_1 = require("../../config/validation");
var facade_1 = require("./facade");
function NDCUnitOfMeasurementRouters() {
    var _this = this;
    var router = express_1.Router();
    router.post('/', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, UOM, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ body: req.body }, validation_1.validationSchema.createANDCUnitOfMeasurement);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.NDCUnitOfMeasurementFacade.create(req.body)];
                case 1:
                    UOM = _a.sent();
                    res.status(200).json({ data: UOM[0], error: null, message: 'NDC Unit of Measurement has been created successfully!' });
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_1 = _a.sent();
                    log_1.log.error({ message: 'Error in creating a new NDC Unit of Measurement !', statusCode: 500, detail: err_1, repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements' });
                    res.status(500).json({ data: null, error: err_1, message: 'Error in creating a new NDC Unit of Measurement !' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.get('/', function (_req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var UOMs, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, facade_1.NDCUnitOfMeasurementFacade.findAll()];
                case 1:
                    UOMs = _a.sent();
                    if (!UOMs.length) {
                        log_1.log.warn({ message: 'NDC Unit of Measurements do not exist!', statusCode: 404, detail: 'NDC Unit of Measurements do not exist!', repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements' });
                        res.status(404).json({ data: null, error: true, message: 'NDC Unit of Measurements do not exist!' });
                    }
                    else {
                        res.status(200).json({ data: UOMs, error: null, message: 'NDC Unit of Measurements fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    err_2 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a NDC Unit of Measurements!', statusCode: 500, detail: err_2, repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements' });
                    res.status(500).json({ data: null, error: err_2, message: 'Error in finding a NDC Unit of Measurements!' });
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); });
    router.get('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, UOM, err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.findANDCUnitOfMeasurement);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.NDCUnitOfMeasurementFacade.findById(req.params.id)];
                case 1:
                    UOM = _a.sent();
                    if (!UOM.length) {
                        log_1.log.warn({ message: 'NDC Unit of Measurement does not exist!', statusCode: 404, detail: 'NDC Unit of Measurement does not exist!', repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
                        res.status(404).json({ data: null, error: true, message: 'NDC Unit of Measurement does not exist!' });
                    }
                    else {
                        res.status(200).json({ data: UOM[0], error: null, message: 'NDC Unit of Measurement fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_3 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a NDC Unit of Measurement !', statusCode: 500, detail: err_3, repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
                    res.status(500).json({ data: null, error: err_3, message: 'Error in finding a NDC Unit of Measurement !' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.delete('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, UOM, deletedtype, err_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.deleteANDCUnitOfMeasurement);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.NDCUnitOfMeasurementFacade.findById(req.params.id)];
                case 1:
                    UOM = _a.sent();
                    if (!!UOM.length) return [3, 2];
                    log_1.log.warn({ message: 'NDC Unit of Measurement does not exist!', statusCode: 404, detail: 'NDC Unit of Measurement does not exist!', repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
                    res.status(404).json({ data: null, error: true, message: 'NDC Unit of Measurement does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.NDCUnitOfMeasurementFacade.deleteById(req.params.id)];
                case 3:
                    deletedtype = _a.sent();
                    res.status(200).json({ data: deletedtype, error: null, message: 'NDC Unit of Measurement deleted successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_4 = _a.sent();
                    log_1.log.error({ message: 'Error in deleting a NDC Unit of Measurement !', statusCode: 500, detail: err_4, repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
                    res.status(500).json({ data: null, error: err_4, message: 'Error in deleting a NDC Unit of Measurement !' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    router.put('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, UOM, updatedUOMInfo, err_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params, body: req.body }, validation_1.validationSchema.updateANDCUnitOfMeasurement);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.NDCUnitOfMeasurementFacade.findById(req.params.id)];
                case 1:
                    UOM = _a.sent();
                    if (!!UOM.length) return [3, 2];
                    log_1.log.warn({ message: 'NDC Unit of Measurement does not exist!', statusCode: 404, detail: 'NDC Unit of Measurement does not exist!', repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
                    res.status(404).json({ data: null, error: true, message: 'NDC Unit of Measurement does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.NDCUnitOfMeasurementFacade.updateById(req.params.id, req.body)];
                case 3:
                    updatedUOMInfo = _a.sent();
                    res.status(200).json({ data: updatedUOMInfo[0], error: null, message: 'NDC Unit of Measurement updated successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_5 = _a.sent();
                    log_1.log.error({ message: 'Error in updating a NDC Unit of Measurement !', statusCode: 500, detail: err_5, repo: 'aquila-api', path: '/api/v1/ndc_unit_of_measurements/:id' });
                    res.status(500).json({ data: null, error: err_5, message: 'Error in updating a NDC Unit of Measurement !' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    return router;
}
exports.NDCUnitOfMeasurementRouters = NDCUnitOfMeasurementRouters;
;
