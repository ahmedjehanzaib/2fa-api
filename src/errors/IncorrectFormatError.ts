import {BaseError} from 'make-error'

export class IncorrectFormatError extends BaseError {
	constructor () {
		super('The format is incorrect!')
	}
}

export default IncorrectFormatError;