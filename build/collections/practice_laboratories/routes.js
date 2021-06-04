"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceLaboratoryRouters = void 0;
var tslib_1 = require("tslib");
var express_1 = require("express");
var JOI = require("joi");
var log_1 = require("../../log");
var validation_1 = require("../../config/validation");
var facade_1 = require("./facade");
function practiceLaboratoryRouters() {
    var _this = this;
    var router = express_1.Router();
    router.post('/', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, status_1, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ body: req.body }, validation_1.validationSchema.createAPracticeGeneralItem);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.practiceLaboratoryFacade.create(req.body)];
                case 1:
                    status_1 = _a.sent();
                    res.status(200).json({ data: status_1[0], error: null, message: 'practice laboratory has been created successfully!' });
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_laboratories' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_1 = _a.sent();
                    log_1.log.error({ message: 'Error in creating a new practice laboratory!', statusCode: 500, detail: err_1, repo: 'aquila-api', path: '/api/v1/practice_laboratories' });
                    res.status(500).json({ data: null, error: err_1, message: 'Error in creating a new practice laboratory!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.get('/bypractice/:practice_id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, laboratory, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.findPracticeGeneralItems);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.practiceLaboratoryFacade.findByPracticeId(req.params.practice_id)];
                case 1:
                    laboratory = _a.sent();
                    if (!laboratory.length) {
                        log_1.log.warn({ message: 'practice laboratorys do not exist!', statusCode: 404, detail: 'practice laboratorys do not exist!', repo: 'aquila-api', path: '/api/v1/practice_laboratories/:practice_id' });
                        res.status(404).json({ data: null, error: true, message: 'practice laboratoryes do not exist!' });
                    }
                    else {
                        res.status(200).json({ data: laboratory, error: null, message: 'practice laboratorys fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_2 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a practice laboratorys!', statusCode: 500, detail: err_2, repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
                    res.status(500).json({ data: null, error: err_2, message: 'Error in finding a practice laboratorys!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.get('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, laboratory, err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.findAPracticeGeneralItem);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.practiceLaboratoryFacade.findById(req.params.id)];
                case 1:
                    laboratory = _a.sent();
                    if (!laboratory.length) {
                        log_1.log.warn({ message: 'practice laboratory does not exist!', statusCode: 404, detail: 'practice laboratory does not exist!', repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
                        res.status(404).json({ data: null, error: true, message: 'practice laboratory does not exist!' });
                    }
                    else {
                        res.status(200).json({ data: laboratory[0], error: null, message: 'practice laboratory fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_3 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a practice laboratory!', statusCode: 500, detail: err_3, repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
                    res.status(500).json({ data: null, error: err_3, message: 'Error in finding a practice laboratory!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.delete('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, laboratory, deleted, err_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.deleteAPracticeGeneralItem);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.practiceLaboratoryFacade.findById(req.params.id)];
                case 1:
                    laboratory = _a.sent();
                    if (!!laboratory.length) return [3, 2];
                    log_1.log.warn({ message: 'practice laboratory does not exist!', statusCode: 404, detail: 'practice laboratory does not exist!', repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
                    res.status(404).json({ data: null, error: true, message: 'practice laboratory does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.practiceLaboratoryFacade.deleteById(req.params.id)];
                case 3:
                    deleted = _a.sent();
                    res.status(200).json({ data: deleted[0], error: null, message: 'practice laboratory deleted successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_4 = _a.sent();
                    log_1.log.error({ message: 'Error in deleting a practice laboratory!', statusCode: 500, detail: err_4, repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
                    res.status(500).json({ data: null, error: err_4, message: 'Error in deleting a practice laboratory!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    router.put('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, laboratory, updated, err_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params, body: req.body }, validation_1.validationSchema.updateAPracticeGeneralItem);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.practiceLaboratoryFacade.findById(req.params.id)];
                case 1:
                    laboratory = _a.sent();
                    if (!!laboratory.length) return [3, 2];
                    log_1.log.warn({ message: 'practice laboratory does not exist!', statusCode: 404, detail: 'practice laboratory does not exist!', repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
                    res.status(404).json({ data: null, error: true, message: 'practice laboratory does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.practiceLaboratoryFacade.updateById(req.params.id, req.body)];
                case 3:
                    updated = _a.sent();
                    res.status(200).json({ data: updated[0], error: null, message: 'practice laboratory updated successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_5 = _a.sent();
                    log_1.log.error({ message: 'Error in updating a practice laboratory!', statusCode: 500, detail: err_5, repo: 'aquila-api', path: '/api/v1/practice_laboratories/:id' });
                    res.status(500).json({ data: null, error: err_5, message: 'Error in updating a practice laboratory!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    return router;
}
exports.practiceLaboratoryRouters = practiceLaboratoryRouters;
;
