"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
var bunyan = require("bunyan");
var base_ts_utils_1 = require("@simplus/base-ts-utils");
var logger;
if (process.env.ES_URL) {
    var Elasticsearch = require('bunyan-elasticsearch');
    var esStream = new Elasticsearch({
        indexPattern: '[logs-aquila-api-]YYYY.MM.DD',
        type: 'logs',
        host: process.env.ES_URL
    });
    esStream.on('error', function (err) {
        console.log('Elasticsearch Stream Error:', err.stack);
    });
    logger = bunyan.createLogger({
        name: 'aquila-api',
        streams: [
            base_ts_utils_1.Env.isDevelopment() ? { level: 'debug', stream: esStream } : { stream: esStream }
        ],
        serializers: bunyan.stdSerializers,
        env: process.env.ENV
    });
}
else {
    logger = bunyan.createLogger({
        name: 'aquila-api',
        level: 'debug'
    });
}
exports.log = logger;
