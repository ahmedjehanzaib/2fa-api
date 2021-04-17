"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceICDRouters = void 0;
var tslib_1 = require("tslib");
var express_1 = require("express");
var JOI = require("joi");
var log_1 = require("../../log");
var validation_1 = require("../../config/validation");
var facade_1 = require("./facade");
function practiceICDRouters() {
    var _this = this;
    var router = express_1.Router();
    router.post('/', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, icd, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ body: req.body }, validation_1.validationSchema.createAPracticeICD);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.practiceICDFacade.create(req.body)];
                case 1:
                    icd = _a.sent();
                    res.status(200).json({ data: icd[0], error: null, message: 'Practice ICD has been created successfully!' });
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_icd' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_1 = _a.sent();
                    log_1.log.error({ message: 'Error in creating a new Practice ICD!', statusCode: 500, detail: err_1, repo: 'aquila-api', path: '/api/v1/practice_icd' });
                    res.status(500).json({ data: null, error: err_1, message: 'Error in creating a new Practice ICD!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.get('/', function (_req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var icds, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, facade_1.practiceICDFacade.findAll()];
                case 1:
                    icds = _a.sent();
                    if (!icds.length) {
                        log_1.log.warn({ message: 'Practice ICDs do not exist!', statusCode: 404, detail: 'Practice ICDs do not exist!', repo: 'aquila-api', path: '/api/v1/practice_icd' });
                        res.status(404).json({ data: null, error: true, message: 'Practice ICDs do not exist!' });
                    }
                    else {
                        res.status(200).json({ data: icds, error: null, message: 'Practice ICDs fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    err_2 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a Practice ICDs!', statusCode: 500, detail: err_2, repo: 'aquila-api', path: '/api/v1/practice_icd' });
                    res.status(500).json({ data: null, error: err_2, message: 'Error in finding a Practice ICDs!' });
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); });
    router.get('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, icd, err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.findAPracticeICD);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.practiceICDFacade.findById(req.params.id)];
                case 1:
                    icd = _a.sent();
                    if (!icd.length) {
                        log_1.log.warn({ message: 'Practice ICD does not exist!', statusCode: 404, detail: 'Practice ICDs does not exist!', repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
                        res.status(404).json({ data: null, error: true, message: 'Practice ICD does not exist!' });
                    }
                    else {
                        res.status(200).json({ data: icd[0], error: null, message: 'Practice ICD fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_3 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a Practice ICD!', statusCode: 500, detail: err_3, repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
                    res.status(500).json({ data: null, error: err_3, message: 'Error in finding a Practice ICD!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.delete('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, icd, deletedtype, err_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.deleteAPracticeICD);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.practiceICDFacade.findById(req.params.id)];
                case 1:
                    icd = _a.sent();
                    if (!!icd.length) return [3, 2];
                    log_1.log.warn({ message: 'Practice ICD does not exist!', statusCode: 404, detail: 'Practice ICD does not exist!', repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
                    res.status(404).json({ data: null, error: true, message: 'Practice ICD does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.practiceICDFacade.deleteById(req.params.id)];
                case 3:
                    deletedtype = _a.sent();
                    res.status(200).json({ data: deletedtype, error: null, message: 'Practice ICD deleted successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_4 = _a.sent();
                    log_1.log.error({ message: 'Error in deleting a Practice ICD!', statusCode: 500, detail: err_4, repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
                    res.status(500).json({ data: null, error: err_4, message: 'Error in deleting a Practice ICD!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    router.put('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, icd, updatedICDInfo, err_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params, body: req.body }, validation_1.validationSchema.updateAPracticeICD);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.practiceICDFacade.findById(req.params.id)];
                case 1:
                    icd = _a.sent();
                    if (!!icd.length) return [3, 2];
                    log_1.log.warn({ message: 'Practice ICD does not exist!', statusCode: 404, detail: 'Practice ICD does not exist!', repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
                    res.status(404).json({ data: null, error: true, message: 'Practice ICD does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.practiceICDFacade.updateById(req.params.id, req.body)];
                case 3:
                    updatedICDInfo = _a.sent();
                    res.status(200).json({ data: updatedICDInfo[0], error: null, message: 'Practice ICDs updated successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_5 = _a.sent();
                    log_1.log.error({ message: 'Error in updating a Practice ICD!', statusCode: 500, detail: err_5, repo: 'aquila-api', path: '/api/v1/practice_icd/:id' });
                    res.status(500).json({ data: null, error: err_5, message: 'Error in updating a Practice ICD!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    return router;
}
exports.practiceICDRouters = practiceICDRouters;
;
