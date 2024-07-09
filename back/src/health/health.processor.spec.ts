import { Test, TestingModule } from '@nestjs/testing';
import { HealthProcessor } from './health.processor';

describe('HealthProcessor', () => {
  let processor: HealthProcessor;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthProcessor],
    }).compile();

    processor = module.get<HealthProcessor>(HealthProcessor);
  });

  it('should be defined', () => {
    expect(processor).toBeDefined();
  });
});