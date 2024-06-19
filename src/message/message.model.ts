import { Field, ID, ObjectType } from "@nestjs/graphql";
import { User } from "../user/user.model";

@ObjectType()
export class Message {

    @Field(type => ID)
    id: number;

    @Field(type => User)
    userFrom: User;

    @Field(type => User)
    userTo: User;

    @Field(type => String)
    message: string;

    @Field(type => ID)
    conversationId: number;

    @Field(type => String, { nullable: true })
    time: string;

}