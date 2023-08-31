import {User} from "../entities/user.entity";
import {CreateUserDto} from "../dtos/create-user.dto";
import {UpdateUserDto} from "../dtos/update-user.dto";

export interface UserRepository {
    findAll(): Promise<User[]>;

    findOne(id: string): Promise<User>;

    findByEmail(email: string): Promise<User>;

    create(data: CreateUserDto): Promise<void>;

    update(id: string, data: UpdateUserDto): Promise<void>;

    delete(id: string): Promise<void>;
}