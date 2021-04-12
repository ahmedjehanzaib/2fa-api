"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouters = void 0;
var tslib_1 = require("tslib");
var express_1 = require("express");
var JOI = require("joi");
var uuid_1 = require("uuid");
var log_1 = require("../../log");
var validation_1 = require("../../config/validation");
var facade_1 = require("./facade");
function userRouters() {
    var _this = this;
    var router = express_1.Router();
    router.post('/', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, user, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ body: req.body }, validation_1.validationSchema.createAUser);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.usersFacade.create(tslib_1.__assign({ id: uuid_1.v4() }, req.body))];
                case 1:
                    user = _a.sent();
                    res.status(200).json({ data: user[0], error: null, message: 'user has been created successfully!' });
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/users/' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_1 = _a.sent();
                    log_1.log.error({ message: 'Error in creating a new user!', statusCode: 500, detail: err_1, repo: 'aquila-api', path: '/api/v1/users/' });
                    res.status(500).json({ data: null, error: err_1, message: 'Error in creating a new user!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.get('/', function (_req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var users, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, facade_1.usersFacade.findAll()];
                case 1:
                    users = _a.sent();
                    if (!users.length) {
                        log_1.log.warn({ message: 'Users do not exist!', statusCode: 404, detail: 'Users do not exist!', repo: 'aquila-api', path: '/api/v1/users' });
                        res.status(404).json({ data: null, error: true, message: 'Users do not exist!' });
                    }
                    else {
                        res.status(200).json({ data: users, error: null, message: 'Users fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    err_2 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a users!', statusCode: 500, detail: err_2, repo: 'aquila-api', path: '/api/v1/users' });
                    res.status(500).json({ data: null, error: err_2, message: 'Error in finding a users!' });
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); });
    router.get('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, user, err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.findAUser);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.usersFacade.findById(req.params.id)];
                case 1:
                    user = _a.sent();
                    if (!user.length) {
                        log_1.log.warn({ message: 'User does not exist!', statusCode: 404, detail: 'User does not exist!', repo: 'aquila-api', path: '/api/v1/users/:id' });
                        res.status(404).json({ data: null, error: true, message: 'User does not exist!' });
                    }
                    else {
                        res.status(200).json({ data: user[0], error: null, message: 'User fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/users/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_3 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a user!', statusCode: 500, detail: err_3, repo: 'aquila-api', path: '/api/v1/users/:id' });
                    res.status(500).json({ data: null, error: err_3, message: 'Error in finding a user!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.delete('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, user, deletedLocation, err_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.deleteAUser);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.usersFacade.findById(req.params.id)];
                case 1:
                    user = _a.sent();
                    if (!!user.length) return [3, 2];
                    log_1.log.warn({ message: 'User does not exist!', statusCode: 404, detail: 'User does not exist!', repo: 'aquila-api', path: '/api/v1/users/:id' });
                    res.status(404).json({ data: null, error: true, message: 'User does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.usersFacade.deleteById(req.params.id)];
                case 3:
                    deletedLocation = _a.sent();
                    res.status(200).json({ data: deletedLocation, error: null, message: ' user deleted successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/users/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_4 = _a.sent();
                    log_1.log.error({ message: 'Error in deleting a user!', statusCode: 500, detail: err_4, repo: 'aquila-api', path: '/api/v1/users/:id' });
                    res.status(500).json({ data: null, error: err_4, message: 'Error in deleting a user!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    router.put('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, user, updatedUserInfo, err_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params, body: req.body }, validation_1.validationSchema.updateAUser);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.usersFacade.findById(req.params.id)];
                case 1:
                    user = _a.sent();
                    if (!!user.length) return [3, 2];
                    log_1.log.warn({ message: 'User does not exist!', statusCode: 404, detail: 'User does not exist!', repo: 'aquila-api', path: '/api/v1/users/:id' });
                    res.status(404).json({ data: null, error: true, message: 'User does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.usersFacade.updateById(req.params.id, req.body)];
                case 3:
                    updatedUserInfo = _a.sent();
                    res.status(200).json({ data: updatedUserInfo[0], error: null, message: 'User updated successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/users/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_5 = _a.sent();
                    log_1.log.error({ message: 'Error in updating a user!', statusCode: 500, detail: err_5, repo: 'aquila-api', path: '/api/v1/users/:id' });
                    res.status(500).json({ data: null, error: err_5, message: 'Error in updating a user!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    return router;
}
exports.userRouters = userRouters;
;
