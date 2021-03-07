import {BaseError} from 'make-error'

export class InvalidObjectError extends BaseError {
  constructor () {
	super(`Object is not valid!`)
  }
}

export default InvalidObjectError;