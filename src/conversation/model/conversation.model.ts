import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Message } from "src/message/model/message.model";
import { User } from "src/user/model/user.model";

@ObjectType()
export class Conversation {

    @Field(type => ID)
    id: number;

    @Field(type => [User])
    users: User[];

    @Field(type => [Message])
    messages: Message[];

}