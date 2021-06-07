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
exports.app.use(exports.app.locals.BaseUri + "/plan_categories", collections_1.planCategoriesRouters());
exports.app.use(exports.app.locals.BaseUri + "/plan_types", collections_1.planTypesRouters());
exports.app.use(exports.app.locals.BaseUri + "/plan_fees", collections_1.planFeesRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_plans", collections_1.practicePlanRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_icd", collections_1.practiceICDRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_cpt", collections_1.practiceCPTRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_modifiers", collections_1.practiceModifierRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_place_of_service", collections_1.practicePlaceOfServiceRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_type_of_service", collections_1.practiceTypeOfServiceRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_procedure_categories", collections_1.practiceProcedureCategoriesRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_appointment_reasons", collections_1.practiceAppointmentReasonsRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_appointment_statuses", collections_1.practiceAppointmentStatusRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_rooms", collections_1.practiceRoomRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_lab_tests", collections_1.practiceLabTestRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_laboratories", collections_1.practiceLaboratoryRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_specimen", collections_1.practiceSpecimenRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_result_alerts", collections_1.practiceResultAlertRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_result_statuses", collections_1.practiceResultStatusRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_classes", collections_1.practiceClassRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_payment_types", collections_1.practicePaymentTypeRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_patient_referral_sources", collections_1.practicePatientReferralSourceRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_preferred_communications", collections_1.practicePreferredCommunicationRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_martial_statuses", collections_1.practiceMartialStatusRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_pharmacies", collections_1.practicePharmacyRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_color_codes", collections_1.practiceColorCodeRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_alert_types", collections_1.practiceAlertTypeRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_authorization_statuses", collections_1.practiceAuthorizationStatusRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_task_types", collections_1.practiceTaskTypeRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_case_types", collections_1.practiceCaseTypeRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_documents", collections_1.practiceDocumentRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_provider_specialities", collections_1.practiceProviderSpecialityRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_template_types", collections_1.practiceTemplateTypeRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_qualifiers", collections_1.practiceQualifierRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_rx_statuses", collections_1.practiceRXStatusRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_clinical_visit_statuses", collections_1.practiceClinicalVisitStatusRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_financial_visit_statuses", collections_1.practiceFinancialVisitStatusRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_gender_indentities", collections_1.practiceGenderIdentityRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_sexual_orientations", collections_1.practiceSexualOrientationRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_accident_types", collections_1.practiceAccidentTypeRouters());
exports.app.use(exports.app.locals.BaseUri + "/practice_accident_states", collections_1.practiceAccidentStateRouters());
exports.app.use(exports.app.locals.BaseUri + "/ndc_unit_of_measurements", collections_1.NDCUnitOfMeasurementRouters());
exports.app.use(exports.app.locals.BaseUri + "/clinical/question_types", collections_1.questionTypeRouters());
exports.app.use(exports.app.locals.BaseUri + "/clinical/questions", collections_1.questionRouters());
exports.app.use(exports.app.locals.BaseUri + "/clinical/question_groups", collections_1.questionGroupRouters());
exports.app.use(exports.app.locals.BaseUri + "/clinical/sections", collections_1.sectionRouters());
exports.app.use(exports.app.locals.BaseUri + "/clinical/templates", collections_1.templateRouters());
exports.app.use(exports.app.locals.BaseUri + "/clinical/cpt_order_forms", collections_1.CPTOrderFormRouters());
exports.app.use(exports.app.locals.BaseUri + "/clinical/cpt_order_form_categories", collections_1.cptFormCategoriesRouters());
exports.app.use(exports.app.locals.BaseUri + "/clinical/icd_order_form_categories", collections_1.ICDFormCategoriesRouters());
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
