"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PG_CLIENT = void 0;
var pg_1 = require("pg");
var path = require("path");
var fs = require("fs");
var log_1 = require("../log");
var config = {
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT) || 5432,
    ssl: {
        rejectUnauthorized: false,
        ca: fs.readFileSync(path.resolve(__dirname, '../../../ca-certificate.crt')).toString(),
    }
};
var PG_CLIENT = new pg_1.Pool(config);
exports.PG_CLIENT = PG_CLIENT;
PG_CLIENT.connect()
    .then(function () { log_1.log.debug('postgres database connected'); })
    .catch(function (err) {
    log_1.log.error("Database connection: " + err);
    log_1.log.fatal('postgres database could not connect');
});
