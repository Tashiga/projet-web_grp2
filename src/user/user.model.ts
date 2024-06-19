import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {

    @Field(type => ID)
    id: number;

    @Field(type => String)
    username: string;

    @Field(type => ID)
    passeword: string

}