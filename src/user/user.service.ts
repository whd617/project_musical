import _ from 'lodash';
import { Repository } from 'typeorm';
import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async login(userId: string, password: string) {
    const user = await this.userRepository.findOne({
      where: { userId, deletedAt: null },
      select: ['id', password],
    });

    if (_.isNil(user)) {
      throw new NotFoundException(`유저를 찾을 수 없습니다. ID: ${userId}`);
    }

    if (user.password !== password) {
      throw new UnauthorizedException(
        `유저의 비밀번호가 올바르지 않습니다. ID: ${userId}`,
      );
    }
  }

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.findOne(createUserDto.userId);
    if (!_.isNil(existUser)) {
      throw new ConflictException(
        `이미 가입된 ID입니다. ID: ${createUserDto.userId}`,
      );
    }
    return await this.userRepository.save(createUserDto);
  }

  checkUser(userPayload: any) {
    return `유저 정보: ${JSON.stringify(userPayload)}`;
  }

  private async findOne(userId: string) {
    return await this.userRepository.findOne({
      where: { userId, deletedAt: null },
      select: ['userId', 'createdAt', 'updatedAt'],
    });
  }
}
