import { Job } from 'bull';
import { Message } from 'src/message/message.model';
export declare class HealthProcessor {
    private messages;
    handleHealthCheck(job: Job): void;
    handleSendMessage(job: Job<Message>): Promise<void>;
}
