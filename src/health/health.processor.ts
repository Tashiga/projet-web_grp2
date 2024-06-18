import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('health-queue')
export class HealthProcessor {
  @Process('check-health')
  handleHealthCheck(job: Job) {
    console.log('Processing job', job.id, 'with data', job.data);
  }
}
