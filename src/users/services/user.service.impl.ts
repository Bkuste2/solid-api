import { User } from '../entities/user.entity'
import { UserRepository } from '../repositories/user.repository'
import { CreateUserDto } from '../dtos/create-user.dto'
import { UpdateUserDto } from '../dtos/update-user.dto'
import { PrismaClient } from '@prisma/client'
import { NotFoundError } from '../../helpers/errors/not-found-error'

export class UserServiceImpl implements UserRepository {
  private prismaService = new PrismaClient()

  async findAll(): Promise<User[]> {
    const users = await this.prismaService.user.findMany()

    if (!users) throw new NotFoundError('Users not found')

    return users
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    })

    if (!user) throw new NotFoundError('User not found')

    return user
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    })

    if (!user) throw new NotFoundError('User not found')

    return user
  }

  async create(data: CreateUserDto): Promise<void> {
    await this.prismaService.user.create({
      data,
    })
  }

  async update(id: string, data: UpdateUserDto): Promise<void> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    })

    if (!user) throw new Error('User not found')

    await this.prismaService.user.update({
      where: { id },
      data,
    })
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.user.delete({
      where: { id },
    })
  }
}
