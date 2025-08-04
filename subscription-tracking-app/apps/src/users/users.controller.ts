import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('all')
  findall() {
    try {
      const users = this.usersService.findall();
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
}
