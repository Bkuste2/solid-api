import { DefaultApiError } from './default-api-error'

export class NotFoundError extends DefaultApiError {
  constructor(message: string) {
    super(message, 404)
  }
}
