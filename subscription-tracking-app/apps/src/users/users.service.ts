import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findall() {
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane' },
    ];
  }
}
