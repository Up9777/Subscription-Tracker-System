import { Injectable } from '@nestjs/common';

@Injectable()
export class SubscriptionService {
  findAll() {
    return [
      { id: 1, name: 'Netflix', status: 'active' },
      { id: 2, name: 'Spotify', status: 'inactive' },
    ];
  }
}
