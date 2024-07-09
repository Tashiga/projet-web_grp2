import { Queue } from 'bull';
export declare class HealthController {
    private healthQueue;
    constructor(healthQueue: Queue);
    check(): Promise<{
        status: string;
        time: string;
    }>;
}
