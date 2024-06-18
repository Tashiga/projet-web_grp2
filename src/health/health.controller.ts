import { Controller, Get } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Controller('health')
export class HealthController {
  constructor(@InjectQueue('health-queue') private healthQueue: Queue) {}

  @Get()
  async check() {
    await this.healthQueue.add('check-health', {
      time: new Date().toISOString(),
    });

    return {
      status: 'ok',
      time: new Date().toISOString(),
    };
  }
}
