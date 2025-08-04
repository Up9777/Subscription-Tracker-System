import { Controller, Get } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionsSrvice: SubscriptionService) {}

  @Get('all')
  findAll() {
    try {
      const subscriptions = this.subscriptionsSrvice.findAll();
      return subscriptions;
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
      throw error;
    }
  }
}
