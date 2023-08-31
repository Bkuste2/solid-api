import {NextFunction, Request, Response} from "express";
import {UserService} from "./services/user.service";
import {User} from "./entities/user.entity";

export class UserController {
    constructor(private userService: UserService) {
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            return res.send(await this.userService.findAll());
        } catch (error) {
            next(error);
        }
    }

    async findByEmail(req: Request, res: Response): Promise<Response<User>> {
        const {email} = req.params;
        return res.send(await this.userService.findByEmail(email));
    }

    async create(req: Request, res: Response, next: NextFunction) {
        const {name, email, password} = req.body;
        try {
            return res.send(await this.userService.create({name, email, password}));
        } catch (error) {
            next(error);
        }
    }
}