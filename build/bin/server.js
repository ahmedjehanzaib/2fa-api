"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.SERVER_PORT = exports.app = void 0;
var express = require("express");
var cors = require("cors");
var body_parser_1 = require("body-parser");
var log_1 = require("../log");
var collections_1 = require("../collections");
exports.app = express();
exports.app.locals.title = 'Aquila API';
exports.app.locals.email = 'ahmedjehanzaib1992@gmail.com';
exports.app.locals.issues = 'https://github.com/ahmedjehanzaib/aquila-api/issues';
exports.app.locals.BaseUri = process.env.AQUILA_BASE_URI || '/api/v1';
exports.app.use(function (_req, res, next) {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
exports.app.use(cors());
exports.app.get(exports.app.locals.BaseUri + "/ping", function (_req, res) { res.sendStatus(200); });
exports.app.use(exports.app.locals.BaseUri + "/blueprint", express.static('docs/blueprint/', { extensions: ['html'], index: 'index.html' }));
exports.app.use(exports.app.locals.BaseUri + "/documentation", express.static('docs/typedoc/', { extensions: ['html'], index: 'index.html' }));
exports.app.use(exports.app.locals.BaseUri + "/tests", express.static('docs/tests/', { extensions: ['html'], index: 'index.html' }));
exports.app.use(body_parser_1.json());
exports.app.use(exports.app.locals.BaseUri + "/clients", collections_1.clientsRouter());
exports.app.use(exports.app.locals.BaseUri + "/practices", collections_1.practicesRouter());
exports.app.use(exports.app.locals.BaseUri + "/locations", collections_1.locationRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_roles", collections_1.practiceRoleRouters());
exports.app.use(exports.app.locals.BaseUri + "/referring_providers", collections_1.referringProvidersRouter());
exports.app.use(exports.app.locals.BaseUri + "/providers", collections_1.providersRouter());
exports.app.use(exports.app.locals.BaseUri + "/users", collections_1.userRouters());
exports.app.use(exports.app.locals.BaseUri + "/hcfa_templates", collections_1.hcfaTemplatesRouters());
var errorHandler = function (error, _req, res, _next) {
    log_1.log.error(error);
    if (error.name === 'UnauthorizedError')
        res.status(401).json({ message: error.message });
    else
        res.sendStatus(500);
    if (process.env.ENV === 'development')
        res.send(error);
    else
        res.end();
};
exports.app.use(errorHandler);
exports.SERVER_PORT = parseInt(process.env.PORT || '3020');
exports.server = exports.app.listen(exports.SERVER_PORT, '', function () {
    log_1.log.debug('Server is running on port ', exports.SERVER_PORT);
});
exports.server.on('error', function (err) {
    log_1.log.error(err);
});
