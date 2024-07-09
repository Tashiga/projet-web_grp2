import { User } from "../user/user.model";
export declare class Message {
    id: number;
    userFrom: User;
    userTo: User;
    message: string;
    conversationId: number;
    time: string;
}
