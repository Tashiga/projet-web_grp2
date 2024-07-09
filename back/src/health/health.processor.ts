import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { Message } from 'src/message/message.model';

@Processor('health-queue')
export class HealthProcessor {
  private messages: Message[] = [];
  
  @Process('check-health')
  handleHealthCheck(job: Job) {
    console.log('Processing job', job.id, 'with data', job.data);
  }

  @Process('sendMessage')
  async handleSendMessage(job: Job<Message>) {
    const message = job.data;
    // Add the message to the local array (simulating a database save)
    this.messages.push(message);
    console.log('Message saved:', message);
  }
}
