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
	planCategoriesRouters, planTypesRouters, practicePlanRouters, practiceICDRouters,
	practiceModifierRouters, practicePlaceOfServiceRouters, practiceTypeOfServiceRouters,
	practiceProcedureCategoriesRouters, NDCUnitOfMeasurementRouters, practiceCPTRouters,
	planFeesRouters, practiceAppointmentReasonsRouters, practiceAppointmentStatusRouters,
	practiceRoomRouters, practiceLabTestRouters, practiceLaboratoryRouters, practiceSpecimenRouters,
	practiceResultAlertRouters, practiceResultStatusRouters, practiceClassRouters,
	practicePaymentTypeRouters, practicePatientReferralSourceRouters, practicePreferredCommunicationRouters,
	practiceMartialStatusRouters, practicePharmacyRouters, practiceColorCodeRouters, practiceAlertTypeRouters,
	practiceAuthorizationStatusRouters, practiceTaskTypeRouters, practiceCaseTypeRouters, practiceDocumentRouters,
	practiceProviderSpecialityRouters, practiceTemplateTypeRouters, practiceQualifierRouters, practiceRXStatusRouters,
	practiceClinicalVisitStatusRouters, practiceFinancialVisitStatusRouters, practiceGenderIdentityRouters,
	practiceSexualOrientationRouters, practiceAccidentTypeRouters, practiceAccidentStateRouters,
	questionRouters, questionTypeRouters, questionGroupRouters
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
app.use(`${app.locals.BaseUri}/plan_fees`, planFeesRouters());
app.use(`${app.locals.BaseUri}/practice_plans`, practicePlanRouters());
app.use(`${app.locals.BaseUri}/practice_icd`, practiceICDRouters());
app.use(`${app.locals.BaseUri}/practice_cpt`, practiceCPTRouters());
app.use(`${app.locals.BaseUri}/practice_modifiers`, practiceModifierRouters());
app.use(`${app.locals.BaseUri}/practice_place_of_service`, practicePlaceOfServiceRouters());
app.use(`${app.locals.BaseUri}/practice_type_of_service`, practiceTypeOfServiceRouters());
app.use(`${app.locals.BaseUri}/practice_procedure_categories`, practiceProcedureCategoriesRouters());
app.use(`${app.locals.BaseUri}/practice_appointment_reasons`, practiceAppointmentReasonsRouters());
app.use(`${app.locals.BaseUri}/practice_appointment_statuses`, practiceAppointmentStatusRouters());
app.use(`${app.locals.BaseUri}/practice_rooms`, practiceRoomRouters());
app.use(`${app.locals.BaseUri}/practice_lab_tests`, practiceLabTestRouters());
app.use(`${app.locals.BaseUri}/practice_laboratories`, practiceLaboratoryRouters());
app.use(`${app.locals.BaseUri}/practice_specimen`, practiceSpecimenRouters());
app.use(`${app.locals.BaseUri}/practice_result_alerts`, practiceResultAlertRouters());
app.use(`${app.locals.BaseUri}/practice_result_statuses`, practiceResultStatusRouters());
app.use(`${app.locals.BaseUri}/practice_classes`, practiceClassRouters());
app.use(`${app.locals.BaseUri}/practice_payment_types`, practicePaymentTypeRouters());
app.use(`${app.locals.BaseUri}/practice_patient_referral_sources`, practicePatientReferralSourceRouters());
app.use(`${app.locals.BaseUri}/practice_preferred_communications`, practicePreferredCommunicationRouters());
app.use(`${app.locals.BaseUri}/practice_martial_statuses`, practiceMartialStatusRouters());
app.use(`${app.locals.BaseUri}/practice_pharmacies`, practicePharmacyRouters());
app.use(`${app.locals.BaseUri}/practice_color_codes`, practiceColorCodeRouters());
app.use(`${app.locals.BaseUri}/practice_alert_types`, practiceAlertTypeRouters());
app.use(`${app.locals.BaseUri}/practice_authorization_statuses`, practiceAuthorizationStatusRouters());
app.use(`${app.locals.BaseUri}/practice_task_types`, practiceTaskTypeRouters());
app.use(`${app.locals.BaseUri}/practice_case_types`, practiceCaseTypeRouters());
app.use(`${app.locals.BaseUri}/practice_documents`, practiceDocumentRouters());
app.use(`${app.locals.BaseUri}/practice_provider_specialities`, practiceProviderSpecialityRouters());
app.use(`${app.locals.BaseUri}/practice_template_types`, practiceTemplateTypeRouters());
app.use(`${app.locals.BaseUri}/practice_qualifiers`, practiceQualifierRouters());
app.use(`${app.locals.BaseUri}/practice_rx_statuses`, practiceRXStatusRouters());
app.use(`${app.locals.BaseUri}/practice_clinical_visit_statuses`, practiceClinicalVisitStatusRouters());
app.use(`${app.locals.BaseUri}/practice_financial_visit_statuses`, practiceFinancialVisitStatusRouters());
app.use(`${app.locals.BaseUri}/practice_gender_indentities`, practiceGenderIdentityRouters());
app.use(`${app.locals.BaseUri}/practice_sexual_orientations`, practiceSexualOrientationRouters());
app.use(`${app.locals.BaseUri}/practice_accident_types`, practiceAccidentTypeRouters());
app.use(`${app.locals.BaseUri}/practice_accident_states`, practiceAccidentStateRouters());
app.use(`${app.locals.BaseUri}/ndc_unit_of_measurements`, NDCUnitOfMeasurementRouters());
app.use(`${app.locals.BaseUri}/clinical/question_types`, questionTypeRouters());
app.use(`${app.locals.BaseUri}/clinical/questions`, questionRouters());
app.use(`${app.locals.BaseUri}/clinical/question_groups`, questionGroupRouters());

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