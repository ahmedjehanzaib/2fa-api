import { Request, Response, NextFunction, Router } from 'express';
import * as JOI from 'joi';
import * as jwt from 'jsonwebtoken';

import { validationSchema } from '../../config/validation';
import { log } from '../../log';

/**
 * Two Factor Authentication Router
 */
export function twoFactorAuthenticationRouter(): Router {
	const router = Router();
	
    //  generate code for a provided phone number
	router.post('/generate-code',  async (req: Request, res: Response, _next: NextFunction) => {
        try {
			const validated = JOI.validate({ body: req.body }, validationSchema.generateCode);
			if (validated.error === null) {
                const code = Math.floor(100000 + Math.random() * 900000);
                const token = jwt.sign({ phone_number: req.body.phone_number, code: code }, 'test', {
                    expiresIn: 60
                })
                res.status(200).json({ data: token, error: null, message: `6 digit code has been sent to your provided number, [FOR TESTING] Your code is ${code} !` });
            } else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'express-typescript-boilerplate', path: '/api/v1/two-factor-authentication/generate-code' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in generating a code!', statusCode: 500, detail: err, repo: 'express-typescript-boilerplate', path: '/api/v1/two-factor-authentication/generate-code' });
			res.status(500).json({ data: null, error: err, message: 'Error in generating a code!' });
		}
	});

    // verify code
    router.post('/verify-code',  async (req: Request, res: Response, _next: NextFunction) => {
        try {
			const validated = JOI.validate({ body: req.body }, validationSchema.verifyCode);
			if (validated.error === null) {
                const token = req.body.token
                const userCode = req.body.code;
                jwt.verify(token, process.env.JWT_SECRET ? process.env.JWT_SECRET : 'test', async function(err: any, decoded: any) {
					if (err) {
						if (err.name === 'TokenExpiredError') {
							log.warn({ message: 'Your 2FA code has been expired. So do the request again!', statusCode: 400, detail: 'Your 2FA code has been expired. So do the request again!', repo: 'express-typescript-boilerplate', path: '/api/v1/two-factor-authentication/verify-code' });
							res.status(400).json({ data: null, error: err, message: 'Your 2FA code has been expired. So do the request again!' });
						} else {
							log.warn({ message: 'Problem with the request. So do the request again!', statusCode: 400, detail: 'Problem with the request. So do the request again!', repo: 'express-typescript-boilerplate', path: '/api/v1/two-factor-authentication/verify-code' });
							res.status(400).json({ data: null, error: err, message: 'Problem with the request. So do the request again!' });
						}
					} else {		
                        let _phone_number = decoded && decoded.phone_number;
                        // we should check it with phone number if it is stored in database.
                        let decoded_code = decoded && decoded.code;
                        if (userCode == decoded_code) {
                            res.status(200).json({ data: true, error: null, message: 'You 6 digit code has been verified successfully!' });
                        } else {
                            res.status(400).json({ data: null, error: err, message: 'Sorry you code is invalid!' });
                        }
					}
				});
            } else {
				log.warn({ message: validated.error.details[0].message, statusCode: 400, detail: validated.error.details[0], repo: 'express-typescript-boilerplate', path: '/api/v1/two-factor-authentication/verify-code' });
				res.status(400).json({ data: null, error: true, message: validated.error.details[0].message });
			}
		} catch (err) {
			log.error({ message: 'Error in verifying code!', statusCode: 500, detail: err, repo: 'express-typescript-boilerplate', path: '/api/v1/two-factor-authentication/verify-code' });
			res.status(500).json({ data: null, error: err, message: 'Error in verifying code!' });
		}
	});

    // resend code
    router.post('/resend-code',  async (_req: Request, _res: Response, _next: NextFunction) => {
	});

	return router;
};