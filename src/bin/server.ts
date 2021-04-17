import express = require('express');
import cors = require('cors')
//////////////////////////////////////////////////////////////////////////////////////////////////
// bin Server requirements
//////////////////////////////////////////////////////////////////////////////////////////////////
import { json } from 'body-parser';
import { Server } from 'http';
import { log } from '../log';
import {
	clientsRouter, practicesRouter, locationRouters, practiceRoleRouters,
	referringProvidersRouter, providersRouter, userRouters, hcfaTemplatesRouters,
	planCategoriesRouters, planTypesRouters, practicePlanRouters, practiceICDRouters
} from '../collections';

//////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Server initialization and middlewares
 */
//////////////////////////////////////////////////////////////////////////////////////////////////
export const app: express.Express = express()
app.locals.title = 'Aquila API'
app.locals.email = 'ahmedjehanzaib1992@gmail.com'
app.locals.issues = 'https://github.com/ahmedjehanzaib/aquila-api/issues'
app.locals.BaseUri = process.env.AQUILA_BASE_URI || '/api/v1'

app.use((_req: express.Request, res: express.Response, next: express.NextFunction): void => {
	res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next()
})
app.use(cors())
// app.use('*', accessLog)

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
app.use(`${app.locals.BaseUri}/clients`, clientsRouter());
app.use(`${app.locals.BaseUri}/practices`, practicesRouter());
app.use(`${app.locals.BaseUri}/locations`, locationRouters());
app.use(`${app.locals.BaseUri}/practice_roles`, practiceRoleRouters());
app.use(`${app.locals.BaseUri}/referring_providers`, referringProvidersRouter());
app.use(`${app.locals.BaseUri}/providers`, providersRouter());
app.use(`${app.locals.BaseUri}/users`, userRouters());
app.use(`${app.locals.BaseUri}/hcfa_templates`, hcfaTemplatesRouters());
app.use(`${app.locals.BaseUri}/plan_categories`, planCategoriesRouters());
app.use(`${app.locals.BaseUri}/plan_types`, planTypesRouters());
app.use(`${app.locals.BaseUri}/practice_plans`, practicePlanRouters());
app.use(`${app.locals.BaseUri}/practice_icd`, practiceICDRouters());

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