"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientsRouter = void 0;
var tslib_1 = require("tslib");
var express_1 = require("express");
var JOI = require("joi");
var uuid_1 = require("uuid");
var log_1 = require("../../log");
var validation_1 = require("../../config/validation");
var facade_1 = require("./facade");
function clientsRouter() {
    var _this = this;
    var router = express_1.Router();
    router.post('/', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, client, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ body: req.body }, validation_1.validationSchema.createAClient);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.clientsFacade.createAClient({
                            id: uuid_1.v4(),
                            name: req.body.name,
                            organization_name: req.body.organization_name,
                            tax_id: req.body.tax_id,
                            address_line_1: req.body.address_line_1 ? req.body.address_line_1 : null,
                            address_line_2: req.body.address_line_2 ? req.body.address_line_2 : null,
                            city: req.body.city ? req.body.city : null,
                            state: req.body.state ? req.body.state : null,
                            zipcode: req.body.zipcode ? req.body.zipcode : null,
                            phone_number: req.body.phone_number ? req.body.phone_number : null,
                            email: req.body.email ? req.body.email : null,
                            contact_person: req.body.contact_person ? req.body.contact_person : null,
                            fax: req.body.fax ? req.body.fax : null
                        })];
                case 1:
                    client = _a.sent();
                    res.status(200).json({ data: client, error: null, message: 'Client has been created successfully!' });
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clients/' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_1 = _a.sent();
                    log_1.log.error({ message: 'Error in creating a new client!', statusCode: 500, detail: err_1, repo: 'aquila-api', path: '/api/v1/clients/' });
                    res.status(500).json({ data: null, error: err_1, message: 'Error in creating a new client!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.get('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, client, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.findAClient);
                    if (!(validated.error === null)) return [3, 2];
                    return [4, facade_1.clientsFacade.findClientById(req.params.id)];
                case 1:
                    client = _a.sent();
                    if (!client.length) {
                        log_1.log.warn({ message: 'Client not exist!', statusCode: 404, detail: 'Client not exist!', repo: 'aquila-api', path: '/api/v1/clients/:id' });
                        res.status(404).json({ data: null, error: true, message: 'Client not exist!' });
                    }
                    else {
                        res.status(200).json({ data: client, error: null, message: 'Client fetched successfully!' });
                    }
                    return [3, 3];
                case 2:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clients/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 3;
                case 3: return [3, 5];
                case 4:
                    err_2 = _a.sent();
                    log_1.log.error({ message: 'Error in finding a client!', statusCode: 500, detail: err_2, repo: 'aquila-api', path: '/api/v1/clients/:id' });
                    res.status(500).json({ data: null, error: err_2, message: 'Error in finding a client!' });
                    return [3, 5];
                case 5: return [2];
            }
        });
    }); });
    router.delete('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, client, deletedClient, err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params }, validation_1.validationSchema.deleteAClient);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.clientsFacade.findClientById(req.params.id)];
                case 1:
                    client = _a.sent();
                    if (!!client.length) return [3, 2];
                    log_1.log.warn({ message: 'Client not exist!', statusCode: 404, detail: 'Client not exist!', repo: 'aquila-api', path: '/api/v1/clients/:id' });
                    res.status(404).json({ data: null, error: true, message: 'Client not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.clientsFacade.deleteClientById(req.params.id)];
                case 3:
                    deletedClient = _a.sent();
                    res.status(200).json({ data: deletedClient, error: null, message: 'Client deleted successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clients/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_3 = _a.sent();
                    log_1.log.error({ message: 'Error in deleting a client!', statusCode: 500, detail: err_3, repo: 'aquila-api', path: '/api/v1/clients/:id' });
                    res.status(500).json({ data: null, error: err_3, message: 'Error in deleting a client!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    router.put('/:id', function (req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var validated, client, updatedClientInfo, err_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    validated = JOI.validate({ params: req.params, body: req.body }, validation_1.validationSchema.updateAClient);
                    if (!(validated.error === null)) return [3, 5];
                    return [4, facade_1.clientsFacade.findClientById(req.params.id)];
                case 1:
                    client = _a.sent();
                    if (!!client.length) return [3, 2];
                    log_1.log.warn({ message: 'Client not exist!', statusCode: 404, detail: 'Client not exist!', repo: 'aquila-api', path: '/api/v1/clients/:id' });
                    res.status(404).json({ data: null, error: true, message: 'Client not exist!' });
                    return [3, 4];
                case 2: return [4, facade_1.clientsFacade.updateClientById(req.params.id, req.body)];
                case 3:
                    updatedClientInfo = _a.sent();
                    res.status(200).json({ data: updatedClientInfo, error: null, message: 'Client updated successfully!' });
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    log_1.log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'aquila-api', path: '/api/v1/clients/:id' });
                    res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
                    _a.label = 6;
                case 6: return [3, 8];
                case 7:
                    err_4 = _a.sent();
                    log_1.log.error({ message: 'Error in updating a client!', statusCode: 500, detail: err_4, repo: 'aquila-api', path: '/api/v1/clients/:id' });
                    res.status(500).json({ data: null, error: err_4, message: 'Error in updating a client!' });
                    return [3, 8];
                case 8: return [2];
            }
        });
    }); });
    router.get('/', function (_req, res, _next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var clients, err_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, facade_1.clientsFacade.findAllClients()];
                case 1:
                    clients = _a.sent();
                    res.status(200).json({ data: clients, error: null, message: 'All Clients fetched successfully!' });
                    return [3, 3];
                case 2:
                    err_5 = _a.sent();
                    log_1.log.error({ message: 'Error in finding all client!', statusCode: 500, detail: err_5, repo: 'aquila-api', path: '/api/v1/clients/' });
                    res.status(500).json({ data: null, error: err_5, message: 'Error in finding all client!' });
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); });
    return router;
}
exports.clientsRouter = clientsRouter;
;
