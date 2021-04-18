"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceProcedureCategoriesRouters = void 0;
var tslib_1 = require("tslib");
var express_1 = require("express");
var JOI = require("joi");
var log_1 = require("../../log");
var validation_1 = require("../../config/validation");
var facade_1 = require("./facade");
function practiceProcedureCategoriesRouters() {
    var _this = this;
    var router = express_1.Router();
    router.post('/', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, TOS, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ body: req.body }, validation_1.validationSchema.createAPracticeProcedureCategory);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.practiceProcedureCategoryFacade.create(req.body)];
                case 1:
                    TOS = _a.sent();
                    res.status(200).json({ data: TOS[0], error: null, message: 'Practice Procedure Category has been created successfully!' });
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_procedure_categories' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_1 = _a.sent();
                    log_1.log.error({ message: 'Error in creating a new Practice Procedure Category !', statusCode: 500, detail: err_1, repo: 'aquila-api', path: '/api/v1/practice_procedure_categories' });
                    res.status(500).json({ data: null, error: err_1, message: 'Error in creating a new Practice Procedure Category !' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.get('/', function (_req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var TOSs, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, facade_1.practiceProcedureCategoryFacade.findAll()];
                case 1:
                    TOSs = _a.sent();
                    if (!TOSs.length) {
                        log_1.log.warn({ message: 'Practice Procedure Categories do not exist!', statusCode: 404, detail: 'Practice Procedure Categories do not exist!', repo: 'aquila-api', path: '/api/v1/practice_procedure_categories' });
                        res.status(404).json({ data: null, error: true, message: 'Practice Procedure Categories do not exist!' });
                    }
                    else {
                        res.status(200).json({ data: TOSs, error: null, message: 'Practice Procedure Categories fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    err_2 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a Practice Procedure Categories!', statusCode: 500, detail: err_2, repo: 'aquila-api', path: '/api/v1/practice_procedure_categories' });
                    res.status(500).json({ data: null, error: err_2, message: 'Error in finding a Practice Procedure Categories!' });
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); });
    router.get('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, TOS, err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.findAPracticeProcedureCategory);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.practiceProcedureCategoryFacade.findById(req.params.id)];
                case 1:
                    TOS = _a.sent();
                    if (!TOS.length) {
                        log_1.log.warn({ message: 'Practice Procedure Category  does not exist!', statusCode: 404, detail: 'Practice Procedure Category does not exist!', repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
                        res.status(404).json({ data: null, error: true, message: 'Practice Procedure Category does not exist!' });
                    }
                    else {
                        res.status(200).json({ data: TOS[0], error: null, message: 'Practice Procedure Category fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_3 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a Practice Procedure Category !', statusCode: 500, detail: err_3, repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
                    res.status(500).json({ data: null, error: err_3, message: 'Error in finding a Practice Procedure Category !' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.delete('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, TOS, deletedtype, err_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.deleteAPracticeProcedureCategory);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.practiceProcedureCategoryFacade.findById(req.params.id)];
                case 1:
                    TOS = _a.sent();
                    if (!!TOS.length) return [3, 2];
                    log_1.log.warn({ message: 'Practice Procedure Category does not exist!', statusCode: 404, detail: 'Practice Procedure Category does not exist!', repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
                    res.status(404).json({ data: null, error: true, message: 'Practice Procedure Category does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.practiceProcedureCategoryFacade.deleteById(req.params.id)];
                case 3:
                    deletedtype = _a.sent();
                    res.status(200).json({ data: deletedtype, error: null, message: 'Practice Procedure Category deleted successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_4 = _a.sent();
                    log_1.log.error({ message: 'Error in deleting a Practice Procedure Category !', statusCode: 500, detail: err_4, repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
                    res.status(500).json({ data: null, error: err_4, message: 'Error in deleting a Practice Procedure Category !' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    router.put('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, TOS, updatedTOSInfo, err_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params, body: req.body }, validation_1.validationSchema.updateAPracticeProcedureCategory);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.practiceProcedureCategoryFacade.findById(req.params.id)];
                case 1:
                    TOS = _a.sent();
                    if (!!TOS.length) return [3, 2];
                    log_1.log.warn({ message: 'Practice Procedure Category does not exist!', statusCode: 404, detail: 'Practice Procedure Category does not exist!', repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
                    res.status(404).json({ data: null, error: true, message: 'Practice Procedure Category does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.practiceProcedureCategoryFacade.updateById(req.params.id, req.body)];
                case 3:
                    updatedTOSInfo = _a.sent();
                    res.status(200).json({ data: updatedTOSInfo[0], error: null, message: 'Practice Procedure Category updated successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_5 = _a.sent();
                    log_1.log.error({ message: 'Error in updating a Practice Procedure Category !', statusCode: 500, detail: err_5, repo: 'aquila-api', path: '/api/v1/practice_procedure_categories/:id' });
                    res.status(500).json({ data: null, error: err_5, message: 'Error in updating a Practice Procedure Category !' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    return router;
}
exports.practiceProcedureCategoriesRouters = practiceProcedureCategoriesRouters;
;
