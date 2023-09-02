import { User } from '../entities/user.entity'
import { UserRepository } from '../repositories/user.repository'
import { CreateUserDto } from '../dtos/create-user.dto'
import { UpdateUserDto } from '../dtos/update-user.dto'

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll()
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne(id)
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findByEmail(email)
  }

  async create(data: CreateUserDto): Promise<void> {
    return await this.userRepository.create(data)
  }

  async update(id: string, data: UpdateUserDto): Promise<void> {
    return await this.userRepository.update(id, data)
  }

  async delete(id: string): Promise<void> {
    return await this.userRepository.delete(id)
  }
}
