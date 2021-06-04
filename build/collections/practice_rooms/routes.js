"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.practiceRoomRouters = void 0;
var tslib_1 = require("tslib");
var express_1 = require("express");
var JOI = require("joi");
var log_1 = require("../../log");
var validation_1 = require("../../config/validation");
var facade_1 = require("./facade");
function practiceRoomRouters() {
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
                    return [4, facade_1.practiceRoomFacade.create(req.body)];
                case 1:
                    status_1 = _a.sent();
                    res.status(200).json({ data: status_1[0], error: null, message: 'practice room has been created successfully!' });
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rooms' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_1 = _a.sent();
                    log_1.log.error({ message: 'Error in creating a new practice room!', statusCode: 500, detail: err_1, repo: 'aquila-api', path: '/api/v1/practice_rooms' });
                    res.status(500).json({ data: null, error: err_1, message: 'Error in creating a new practice room!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.get('/bypractice/:practice_id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, statuss, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.findPracticeGeneralItems);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.practiceRoomFacade.findByPracticeId(req.params.practice_id)];
                case 1:
                    statuss = _a.sent();
                    if (!statuss.length) {
                        log_1.log.warn({ message: 'practice rooms do not exist!', statusCode: 404, detail: 'practice rooms do not exist!', repo: 'aquila-api', path: '/api/v1/practice_rooms/:practice_id' });
                        res.status(404).json({ data: null, error: true, message: 'practice roomes do not exist!' });
                    }
                    else {
                        res.status(200).json({ data: statuss, error: null, message: 'practice rooms fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_2 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a practice rooms!', statusCode: 500, detail: err_2, repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
                    res.status(500).json({ data: null, error: err_2, message: 'Error in finding a practice rooms!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.get('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, status_2, err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.findAPracticeGeneralItem);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.practiceRoomFacade.findById(req.params.id)];
                case 1:
                    status_2 = _a.sent();
                    if (!status_2.length) {
                        log_1.log.warn({ message: 'practice room does not exist!', statusCode: 404, detail: 'practice room does not exist!', repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
                        res.status(404).json({ data: null, error: true, message: 'practice room does not exist!' });
                    }
                    else {
                        res.status(200).json({ data: status_2[0], error: null, message: 'practice room fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_3 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a practice room!', statusCode: 500, detail: err_3, repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
                    res.status(500).json({ data: null, error: err_3, message: 'Error in finding a practice room!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.delete('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, status_3, deletedtype, err_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.deleteAPracticeGeneralItem);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.practiceRoomFacade.findById(req.params.id)];
                case 1:
                    status_3 = _a.sent();
                    if (!!status_3.length) return [3, 2];
                    log_1.log.warn({ message: 'practice room does not exist!', statusCode: 404, detail: 'practice room does not exist!', repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
                    res.status(404).json({ data: null, error: true, message: 'practice room does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.practiceRoomFacade.deleteById(req.params.id)];
                case 3:
                    deletedtype = _a.sent();
                    res.status(200).json({ data: deletedtype, error: null, message: 'practice room deleted successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, dtypeetail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_4 = _a.sent();
                    log_1.log.error({ message: 'Error in deleting a practice room!', statusCode: 500, detail: err_4, repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
                    res.status(500).json({ data: null, error: err_4, message: 'Error in deleting a practice room!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    router.put('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, status_4, updatedstatusInfo, err_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params, body: req.body }, validation_1.validationSchema.updateAPracticeGeneralItem);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.practiceRoomFacade.findById(req.params.id)];
                case 1:
                    status_4 = _a.sent();
                    if (!!status_4.length) return [3, 2];
                    log_1.log.warn({ message: 'practice room does not exist!', statusCode: 404, detail: 'practice room does not exist!', repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
                    res.status(404).json({ data: null, error: true, message: 'practice room does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.practiceRoomFacade.updateById(req.params.id, req.body)];
                case 3:
                    updatedstatusInfo = _a.sent();
                    res.status(200).json({ data: updatedstatusInfo[0], error: null, message: 'practice room updated successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_5 = _a.sent();
                    log_1.log.error({ message: 'Error in updating a practice room!', statusCode: 500, detail: err_5, repo: 'aquila-api', path: '/api/v1/practice_rooms/:id' });
                    res.status(500).json({ data: null, error: err_5, message: 'Error in updating a practice room!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    return router;
}
exports.practiceRoomRouters = practiceRoomRouters;
;
