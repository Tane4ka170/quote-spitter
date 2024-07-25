import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [{ userId: 1, username: 'test', password: 'test' }];

  async findOne(username: string): Promise<any | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async findAll(): Promise<any[]> {
    return this.users;
  }
}
