import { Injectable } from '@nestjs/common';
import { Message } from '@lipetzky/api-interfaces';

@Injectable()
export class UsersService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
