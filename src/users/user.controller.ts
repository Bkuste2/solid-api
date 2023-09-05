import { NextFunction, Request, Response } from "express";
import { UserService } from "./services/user.service";
import { User } from "./entities/user.entity";
import { DefaultApiError } from "../helpers/errors/default-api-error";

export class UserController {
  constructor(private userService: UserService) {}

  async findAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<User[]> | void> {
    try {
      const users = await this.userService.findAll();
      return res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  }

  async findByEmail(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<User> | void> {
    const { email } = req.params;
    try {
      return res.send(await this.userService.findByEmail(email));
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body;
    try {
      return res.send(await this.userService.create({ name, email, password }));
    } catch (error) {
      next(error);
    }
  }
}
