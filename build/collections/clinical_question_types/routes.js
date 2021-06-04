"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionTypeRouters = void 0;
var tslib_1 = require("tslib");
var express_1 = require("express");
var JOI = require("joi");
var log_1 = require("../../log");
var validation_1 = require("../../config/validation");
var facade_1 = require("./facade");
function questionTypeRouters() {
    var _this = this;
    var router = express_1.Router();
    router.post('/', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, role, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ body: req.body }, validation_1.validationSchema.createAQuestionType);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.questionTypeFacade.create(req.body)];
                case 1:
                    role = _a.sent();
                    res.status(200).json({ data: role[0], error: null, message: 'Question type has been created successfully!' });
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/question_types' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_1 = _a.sent();
                    log_1.log.error({ message: 'Error in creating a new Question type!', statusCode: 500, detail: err_1, repo: 'aquila-api', path: '/api/v1/question_types' });
                    res.status(500).json({ data: null, error: err_1, message: 'Error in creating a new Question type!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.get('/', function (_req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var data, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, facade_1.questionTypeFacade.findAll()];
                case 1:
                    data = _a.sent();
                    res.status(200).json({ data: data, error: null, message: 'Question types fetched successfully!' });
                    return [3, 3];
                case 2:
                    err_2 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a question type!', statusCode: 500, detail: err_2, repo: 'aquila-api', path: '/api/v1/question_types' });
                    res.status(500).json({ data: null, error: err_2, message: 'Error in finding a question type!' });
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); });
    router.get('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, _a, data, err_3;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.findAQuestionType);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.questionTypeFacade.findById(req.params.id)];
                case 1:
                    _a = tslib_1.__read.apply(void 0, [_b.sent(), 1]), data = _a[0];
                    if (!data) {
                        log_1.log.warn({ message: 'Question type does not exist!', statusCode: 404, detail: 'Question type does not exist!', repo: 'aquila-api', path: '/api/v1/question_types/:id' });
                        res.status(404).json({ data: null, error: true, message: 'Question type does not exist!' });
                    }
                    else {
                        res.status(200).json({ data: data, error: null, message: 'Question type fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/question_types/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _b.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_3 = _b.sent();
                    log_1.log.error({ message: 'Error in finding a Question type!', statusCode: 500, detail: err_3, repo: 'aquila-api', path: '/api/v1/question_types/:id' });
                    res.status(500).json({ data: null, error: err_3, message: 'Error in finding a Question type!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.delete('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, _a, data, data_1, err_4;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.deleteAQuestionType);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.questionTypeFacade.findById(req.params.id)];
                case 1:
                    _a = tslib_1.__read.apply(void 0, [_b.sent(), 1]), data = _a[0];
                    if (!!data) return [3, 2];
                    log_1.log.warn({ message: 'question type does not exist!', statusCode: 404, detail: 'question type does not exist!', repo: 'aquila-api', path: '/api/v1/question_types/:id' });
                    res.status(404).json({ data: null, error: true, message: 'question type does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.questionTypeFacade.deleteById(req.params.id)];
                case 3:
                    data_1 = _b.sent();
                    res.status(200).json({ data: data_1, error: null, message: 'Question type deleted successfully!' });
                    _b.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/question_types/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _b.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_4 = _b.sent();
                    log_1.log.error({ message: 'Error in deleting a Question type!', statusCode: 500, detail: err_4, repo: 'aquila-api', path: '/api/v1/question_types/:id' });
                    res.status(500).json({ data: null, error: err_4, message: 'Error in deleting a Question type!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    router.put('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, _a, data, _b, updated, err_5;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params, body: req.body }, validation_1.validationSchema.updateAQuestionType);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.questionTypeFacade.findById(req.params.id)];
                case 1:
                    _a = tslib_1.__read.apply(void 0, [_c.sent(), 1]), data = _a[0];
                    if (!!data) return [3, 2];
                    log_1.log.warn({ message: 'Question type does not exist!', statusCode: 404, detail: 'Question type does not exist!', repo: 'aquila-api', path: '/api/v1/question_types/:id' });
                    res.status(404).json({ data: null, error: true, message: 'Practice location does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.questionTypeFacade.updateById(req.params.id, req.body)];
                case 3:
                    _b = tslib_1.__read.apply(void 0, [_c.sent(), 1]), updated = _b[0];
                    res.status(200).json({ data: updated, error: null, message: 'Question type updated successfully!' });
                    _c.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/question_types/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _c.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_5 = _c.sent();
                    log_1.log.error({ message: 'Error in updating a Question type!', statusCode: 500, detail: err_5, repo: 'aquila-api', path: '/api/v1/question_types/:id' });
                    res.status(500).json({ data: null, error: err_5, message: 'Error in updating a Question type!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    return router;
}
exports.questionTypeRouters = questionTypeRouters;
;
