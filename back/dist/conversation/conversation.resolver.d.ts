import { Conversation } from "./conversation.model";
import { Message } from "../message/message.model";
import { Queue } from "bull";
export declare class ConversationResolver {
    private messageQueue;
    private conversations;
    constructor(messageQueue: Queue);
    getUserConversations(userId: number): Conversation[];
    getConversationMessages(conversationId: number): Message[];
    createConversation(user1Id: number, user2Id: number): Conversation;
    sendMessage(conversationId: number, userFromId: number, userToId: number, message: string, time: string): Promise<Message>;
}
