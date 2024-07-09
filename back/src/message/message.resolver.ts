import { Args, Query, Resolver } from "@nestjs/graphql";
import { Message } from "./message.model";

Resolver(of => Message)
export class MessageResolver {
  private messages: Message[] = [];

  // Add your message queries and mutations here if needed
  @Query(returns => [Message])
  getMessages(): Message[] {
    return this.messages;
  }

  @Query(returns => Message)
  getMessage(@Args('id') id: number): Message {
    return this.messages.find(message => message.id === id);
  }

  @Query(returns => [Message])
  getMessagesByUser(@Args('userId') userId: number): Message[] {
    return this.messages.filter(message => message.userFrom.id === userId || message.userTo.id === userId);
  }
}