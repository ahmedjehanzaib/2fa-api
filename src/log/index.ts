import bunyan = require('bunyan');
//////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * bunyan logger engine
 */
export const log = bunyan.createLogger({ name : 'express-typescript-boilerplate', level : 'debug'})