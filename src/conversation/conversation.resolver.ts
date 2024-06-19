import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Conversation } from "./conversation.model";
import { Message } from "src/message/message.model";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";

@Resolver(of => Conversation)
export class ConversationResolver {
  private conversations: Conversation[] = [];

  constructor(@InjectQueue('health-queue') private messageQueue: Queue) {}

  @Query(returns => [Conversation])
  getUserConversations(@Args('userId') userId: number): Conversation[] {
    return this.conversations.filter(conversation =>
      conversation.users.some(user => user.id === userId)
    );
  }

  @Query(returns => [Message])
  getConversationMessages(@Args('conversationId') conversationId: number): Message[] {
    const conversation = this.conversations.find(conv => conv.id === conversationId);
    return conversation ? conversation.messages : [];
  }

  @Mutation(returns => Conversation)
  createConversation(@Args('user1Id') user1Id: number, @Args('user2Id') user2Id: number): Conversation {
    const newConversation: Conversation = {
      id: this.conversations.length + 1,
      users: [{ id: user1Id, username: 'User1', passeword: 'pass1' }, { id: user2Id, username: 'User2', passeword: 'pass2' }],
      messages: []
    };
    this.conversations.push(newConversation);
    return newConversation;
  }

  @Mutation(returns => Message)
  async sendMessage(
    @Args('conversationId') conversationId: number,
    @Args('userFromId') userFromId: number,
    @Args('userToId') userToId: number,
    @Args('message') message: string,
    @Args('time', { nullable: true }) time: string
  ): Promise<Message> {
    const conversation = this.conversations.find(conv => conv.id === conversationId);
    if (!conversation) throw new Error('Conversation not found');

    const newMessage: Message = {
      id: conversation.messages.length + 1,
      userFrom: { id: userFromId, username: 'UserFrom', passeword: 'passFrom' },
      userTo: { id: userToId, username: 'UserTo', passeword: 'passTo' },
      message,
      conversationId,
      time: time || new Date().toISOString()
    };

    conversation.messages.push(newMessage);
    await this.messageQueue.add('sendMessage', newMessage);
    console.log("All OK !");
    return newMessage;
  }
}