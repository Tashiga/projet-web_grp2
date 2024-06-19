import { Test, TestingModule } from '@nestjs/testing';
import { ConversationResolver } from './conversation.resolver';
import { BullModule } from '@nestjs/bull';

describe('ConversationResolver', () => {
  let resolver: ConversationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConversationResolver],
      imports: [
        BullModule.registerQueue({
          name: 'health-queue',
        }),
      ],
    }).compile();

    resolver = module.get<ConversationResolver>(ConversationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});