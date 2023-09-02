import { Router } from 'express'
import { userController } from './index'

const userRoutes = Router()

userRoutes.get('/', (req, res, next) => userController.findAll(req, res, next))
userRoutes.get('/:email', (req, res, next) =>
  userController.findByEmail(req, res, next),
)
userRoutes.post('/', (req, res, next) => userController.create(req, res, next))

export { userRoutes }
