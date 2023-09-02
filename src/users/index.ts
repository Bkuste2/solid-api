import { UserController } from './user.controller'
import { UserService } from './services/user.service'
import { UserServiceImpl } from './services/user.service.impl'

const userServiceImpl = new UserServiceImpl()

const userService = new UserService(userServiceImpl)

const userController = new UserController(userService)

export { userService, userController }
