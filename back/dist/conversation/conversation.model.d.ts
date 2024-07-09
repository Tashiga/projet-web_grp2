import { Message } from "../message/message.model";
import { User } from "../user/user.model";
export declare class Conversation {
    id: number;
    users: User[];
    messages: Message[];
}
