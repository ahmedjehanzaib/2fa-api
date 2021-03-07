// import { NextFunction, Request, Response } from 'express';
// import { log } from '../log'

// const accesslog = require('access-log');

// export const accessLog = (req: Request, res: Response, next: NextFunction) => {
// 	const options = {
// 		format : 'url=:url method=:method statusCode=:statusCode delta=:delta ip=:ip logType=accessLogs'
// 	}
// 	accesslog(req, res, options, (Log: any) => {
// 		const splitted_val = Log.split(' ')
// 		const obj: any = {}
// 		splitted_val.forEach((item: any) => {
// 			const c = item.split('=');
// 			obj[c[0]] = isNaN(parseInt(c[1])) ? c[1] : parseInt(c[1])
// 		})
		
// 		// Add more info in access log obj for user (role and organization)
// 		if (req.user) {
// 			obj.userId = req.user.id || null;
// 			obj.role = req.user.role || null;
// 			obj.organization = req.user.organization || null;
// 		}
// 		obj.env = process.env.ENV || 'local';
// 		log.info(obj);
// 	})
// 	return next();
// }