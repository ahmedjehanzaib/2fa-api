"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationRouters = void 0;
var tslib_1 = require("tslib");
var express_1 = require("express");
var JOI = require("joi");
var uuid_1 = require("uuid");
var log_1 = require("../../log");
var validation_1 = require("../../config/validation");
var facade_1 = require("./facade");
function locationRouters() {
    var _this = this;
    var router = express_1.Router();
    router.post('/', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, location_1, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ body: req.body }, validation_1.validationSchema.createAPracticeLocation);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.locationsFacade.createALocation(tslib_1.__assign({ id: uuid_1.v4() }, req.body))];
                case 1:
                    location_1 = _a.sent();
                    res.status(200).json({ data: location_1[0], error: null, message: 'Practice location has been created successfully!' });
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/locations/' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_1 = _a.sent();
                    log_1.log.error({ message: 'Error in creating a new practice location!', statusCode: 500, detail: err_1, repo: 'aquila-api', path: '/api/v1/locations/' });
                    res.status(500).json({ data: null, error: err_1, message: 'Error in creating a new practice location!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.get('/', function (_req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var locations, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, facade_1.locationsFacade.findAll()];
                case 1:
                    locations = _a.sent();
                    if (!locations.length) {
                        log_1.log.warn({ message: 'Practice locations do not exist!', statusCode: 404, detail: 'Practice locations do not exist!', repo: 'aquila-api', path: '/api/v1/locations' });
                        res.status(404).json({ data: null, error: true, message: 'Practice locations do not exist!' });
                    }
                    else {
                        res.status(200).json({ data: locations, error: null, message: 'practice locations fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    err_2 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a practice locations!', statusCode: 500, detail: err_2, repo: 'aquila-api', path: '/api/v1/locations' });
                    res.status(500).json({ data: null, error: err_2, message: 'Error in finding a practice locations!' });
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); });
    router.get('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, location_2, err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.findPracticeLocation);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.locationsFacade.findLocationById(req.params.id)];
                case 1:
                    location_2 = _a.sent();
                    if (!location_2.length) {
                        log_1.log.warn({ message: 'Practice location does not exist!', statusCode: 404, detail: 'Practice location does not exist!', repo: 'aquila-api', path: '/api/v1/locations/:id' });
                        res.status(404).json({ data: null, error: true, message: 'Practice location does not exist!' });
                    }
                    else {
                        res.status(200).json({ data: location_2[0], error: null, message: 'practice location fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/locations/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_3 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a practice location!', statusCode: 500, detail: err_3, repo: 'aquila-api', path: '/api/v1/locations/:id' });
                    res.status(500).json({ data: null, error: err_3, message: 'Error in finding a practice location!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.delete('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, location_3, deletedLocation, err_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.deleteAPractice);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.locationsFacade.findLocationById(req.params.id)];
                case 1:
                    location_3 = _a.sent();
                    if (!!location_3.length) return [3, 2];
                    log_1.log.warn({ message: 'Pracrice location does not exist!', statusCode: 404, detail: 'Pracrice location does not exist!', repo: 'aquila-api', path: '/api/v1/locations/:id' });
                    res.status(404).json({ data: null, error: true, message: 'Pracrice location does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.locationsFacade.deleteLocationById(req.params.id)];
                case 3:
                    deletedLocation = _a.sent();
                    res.status(200).json({ data: deletedLocation, error: null, message: 'Practice location deleted successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/locations/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_4 = _a.sent();
                    log_1.log.error({ message: 'Error in deleting a practice location!', statusCode: 500, detail: err_4, repo: 'aquila-api', path: '/api/v1/locations/:id' });
                    res.status(500).json({ data: null, error: err_4, message: 'Error in deleting a practice location!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    router.put('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, location_4, updatedLocationInfo, err_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params, body: req.body }, validation_1.validationSchema.updateAPracticeLocation);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.locationsFacade.findLocationById(req.params.id)];
                case 1:
                    location_4 = _a.sent();
                    if (!!location_4.length) return [3, 2];
                    log_1.log.warn({ message: 'Practice location does not exist!', statusCode: 404, detail: 'Practice location does not exist!', repo: 'aquila-api', path: '/api/v1/locations/:id' });
                    res.status(404).json({ data: null, error: true, message: 'Practice location does not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.locationsFacade.updateLocationById(req.params.id, req.body)];
                case 3:
                    updatedLocationInfo = _a.sent();
                    res.status(200).json({ data: updatedLocationInfo[0], error: null, message: 'practice location updated successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/locations/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_5 = _a.sent();
                    log_1.log.error({ message: 'Error in updating a practice location!', statusCode: 500, detail: err_5, repo: 'aquila-api', path: '/api/v1/locations/:id' });
                    res.status(500).json({ data: null, error: err_5, message: 'Error in updating a practice location!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    return router;
}
exports.locationRouters = locationRouters;
;
