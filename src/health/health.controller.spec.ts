import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { Queue } from 'bull';
import { BullModule } from '@nestjs/bull';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      imports: [
        BullModule.registerQueue({
          name: 'health-queue',
        }),
      ],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should return health status', async () => {
    const result = await controller.check();
    expect(result.status).toBe('ok');
  });
});