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

  describe('createConversation', () => {
    it('should create a new conversation', () => {
      const user1Id = 1;
      const user2Id = 2;
      const result = resolver.createConversation(user1Id, user2Id);
      expect(result).toBeDefined();
      expect(result.users).toEqual([
        { id: user1Id, username: 'User1', passeword: 'pass1' },
        { id: user2Id, username: 'User2', passeword: 'pass2' },
      ]);
    });
  });
});