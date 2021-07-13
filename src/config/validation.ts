import * as JOI from 'joi';

const validationSchema = {
    generateCode: {
        headers: {
		},
		body: {
			phone_number: JOI.string().required(),
		},
		params: {
		}
    },

    verifyCode: {
        headers: {
		},
		body: {
			code: JOI.string().length(6).required(),
            token: JOI.string().required()
		},
		params: {
		}
    },
}

export { validationSchema };