import { Message } from "./message.model";
export declare class MessageResolver {
    private messages;
    getMessages(): Message[];
    getMessage(id: number): Message;
    getMessagesByUser(userId: number): Message[];
}
