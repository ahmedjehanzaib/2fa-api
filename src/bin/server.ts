import express = require('express');
import cors = require('cors')
//////////////////////////////////////////////////////////////////////////////////////////////////
// bin Server requirements
//////////////////////////////////////////////////////////////////////////////////////////////////
import { json } from 'body-parser';
import { Server } from 'http';
import { log } from '../log';
import { twoFactorAuthenticationRouter } from '../collections';

//////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Server initialization and middlewares
 */
//////////////////////////////////////////////////////////////////////////////////////////////////
export const app: express.Express = express()
app.locals.title = 'Express Typescript Boilerplate'
app.locals.email = 'ahmedjehanzaib1992@gmail.com'
app.locals.issues = 'https://github.com/ahmedjehanzaib/express-typescript-boilerplate/issues'
app.locals.BaseUri = process.env.BASE_URI || '/api/v1'

app.use((_req: express.Request, res: express.Response, next: express.NextFunction): void => {
	res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next()
})
app.use(cors())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Server routing (Standard)
 */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get(`${app.locals.BaseUri}/ping`, (_req: express.Request, res: express.Response) => { res.sendStatus(200) })
// @ts-ignore
app.use(`${app.locals.BaseUri}/blueprint`, express.static('docs/blueprint/', { extensions: ['html'], index: 'index.html' }))
// @ts-ignore
app.use(`${app.locals.BaseUri}/documentation`, express.static('docs/typedoc/', { extensions: ['html'], index: 'index.html' }))
// @ts-ignore
app.use(`${app.locals.BaseUri}/tests`, express.static('docs/tests/', { extensions: ['html'], index: 'index.html' }))
//////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Server routing (Application)
 */
/////////////////////////////////////////////////////////////////////////////////////////////////
app.use(json())
app.use(`${app.locals.BaseUri}/two-factor-authentication`,  twoFactorAuthenticationRouter())

/////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Error handling and logging
 */
/////////////////////////////////////////////////////////////////////////////////////////////////
const errorHandler: express.ErrorRequestHandler = (error: Error, _req: express.Request, res: express.Response, _next: express.NextFunction): void => {
	log.error(error)
	if (error.name === 'UnauthorizedError')
		res.status(401).json({ message: error.message })
	else
		res.sendStatus(500)
	if (process.env.ENV === 'development')
		res.send(error)
	else
		res.end()
}


app.use(errorHandler)

/////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Launch server
 */
////////////////////////////////////////////////////////////////////////////////////////////////
export const SERVER_PORT = parseInt(process.env.PORT || '3020')
export const server: Server = app.listen(SERVER_PORT, '', () => {
	log.debug('Server is running on port ', SERVER_PORT)
})
server.on('error', (err: Error) => {
	log.error(err)
})