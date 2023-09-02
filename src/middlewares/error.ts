import { NextFunction, Request, Response } from 'express'
import { DefaultApiError } from '../helpers/errors/default-api-error'

export const errorMiddleware = (
  error: Error & Partial<DefaultApiError>,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500
  const message = error.statusCode ? error.message : 'Internal Server Error'
  next(res.status(statusCode).json({ message }))
}
