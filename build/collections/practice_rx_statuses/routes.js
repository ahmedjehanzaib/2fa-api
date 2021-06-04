"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceRXStatusRouters = void 0;
var tslib_1 = require("tslib");
var express_1 = require("express");
var JOI = require("joi");
var log_1 = require("../../log");
var validation_1 = require("../../config/validation");
var facade_1 = require("./facade");
function practiceRXStatusRouters() {
    var _this = this;
    var router = express_1.Router();
    router.post('/', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, _a, data, err_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ body: req.body }, validation_1.validationSchema.createAPracticeGeneralItem);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.practiceRXStatusFacade.create(req.body)];
                case 1:
                    _a = tslib_1.__read.apply(void 0, [_b.sent(), 1]), data = _a[0];
                    res.status(200).json({ data: data, error: null, message: 'practice rx status has been created successfully!' });
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rx_statuses' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _b.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_1 = _b.sent();
                    log_1.log.error({ message: 'Error in creating a new practice rx status!', statusCode: 500, detail: err_1, repo: 'aquila-api', path: '/api/v1/practice_rx_statuses' });
                    res.status(500).json({ data: null, error: err_1, message: 'Error in creating a new practice rx status!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.get('/bypractice/:practice_id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, data, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.findPracticeGeneralItems);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.practiceRXStatusFacade.findByPracticeId(req.params.practice_id)];
                case 1:
                    data = _a.sent();
                    if (!data.length) {
                        log_1.log.warn({ message: 'practice rx statuses do not exist!', statusCode: 404, detail: 'practice rx statuses do not exist!', repo: 'aquila-api', path: '/api/v1/practice_rx_statuses/:practice_id' });
                        res.status(404).json({ data: null, error: true, message: 'practice rx statuses do not exist!' });
                    }
                    else {
                        res.status(200).json({ data: data, error: null, message: 'practice rx statuses fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rx_statuses/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_2 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a practice rx statuses!', statusCode: 500, detail: err_2, repo: 'aquila-api', path: '/api/v1/practice_rx_statuses/:id' });
                    res.status(500).json({ data: null, error: err_2, message: 'Error in finding a practice rx statuses!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.get('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, _a, data, err_3;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.findAPracticeGeneralItem);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.practiceRXStatusFacade.findById(req.params.id)];
                case 1:
                    _a = tslib_1.__read.apply(void 0, [_b.sent(), 1]), data = _a[0];
                    if (!data) {
                        log_1.log.warn({ message: 'practice rx status does not exist!', statusCode: 404, detail: 'practice rx status does not exist!', repo: 'aquila-api', path: '/api/v1/practice_rx_statuses/:id' });
                        res.status(404).json({ data: null, error: true, message: 'practice rx status does not exist!' });
                    }
                    else {
                        res.status(200).json({ data: data, error: null, message: 'practice rx status fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rx_statuses/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _b.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_3 = _b.sent();
                    log_1.log.error({ message: 'Error in finding a practice rx status!', statusCode: 500, detail: err_3, repo: 'aquila-api', path: '/api/v1/practice_rx_statuses/:id' });
                    res.status(500).json({ data: null, error: err_3, message: 'Error in finding a practice rx status!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.delete('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, _a, found, _b, data, err_4;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.deleteAPracticeGeneralItem);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.practiceRXStatusFacade.findById(req.params.id)];
                case 1:
                    _a = tslib_1.__read.apply(void 0, [_c.sent(), 1]), found = _a[0];
                    if (!!found) return [3, 2];
                    log_1.log.warn({ message: 'practice rx status does not exist!', statusCode: 404, detail: 'practice rx status does not exist!', repo: 'aquila-api', path: '/api/v1/practice_rx_statuses/:id' });
                    res.status(404).json({ data: null, error: true, message: 'practice rx status does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.practiceRXStatusFacade.deleteById(req.params.id)];
                case 3:
                    _b = tslib_1.__read.apply(void 0, [_c.sent(), 1]), data = _b[0];
                    res.status(200).json({ data: data, error: null, message: 'practice rx status deleted successfully!' });
                    _c.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rx_statuses/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _c.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_4 = _c.sent();
                    log_1.log.error({ message: 'Error in deleting a practice rx status!', statusCode: 500, detail: err_4, repo: 'aquila-api', path: '/api/v1/practice_rx_statuses/:id' });
                    res.status(500).json({ data: null, error: err_4, message: 'Error in deleting a practice rx status!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    router.put('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, _a, found, data, err_5;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params, body: req.body }, validation_1.validationSchema.updateAPracticeGeneralItem);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.practiceRXStatusFacade.findById(req.params.id)];
                case 1:
                    _a = tslib_1.__read.apply(void 0, [_b.sent(), 1]), found = _a[0];
                    if (!!found) return [3, 2];
                    log_1.log.warn({ message: 'practice rx status does not exist!', statusCode: 404, detail: 'practice rx status does not exist!', repo: 'aquila-api', path: '/api/v1/practice_rx_statuses/:id' });
                    res.status(404).json({ data: null, error: true, message: 'practice rx status does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.practiceRXStatusFacade.updateById(req.params.id, req.body)];
                case 3:
                    data = _b.sent();
                    res.status(200).json({ data: data, error: null, message: 'practice rx status updated successfully!' });
                    _b.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rx_statuses/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _b.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_5 = _b.sent();
                    log_1.log.error({ message: 'Error in updating a practice rx status!', statusCode: 500, detail: err_5, repo: 'aquila-api', path: '/api/v1/practice_rx_statuses/:id' });
                    res.status(500).json({ data: null, error: err_5, message: 'Error in updating a practice rx status!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    return router;
}
exports.practiceRXStatusRouters = practiceRXStatusRouters;
;
